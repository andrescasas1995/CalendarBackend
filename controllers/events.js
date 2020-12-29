const { response } = require("express");
const Event = require('../models/Event');

const getEvents = async (req, res = response) => {
    try {
        const events = await Event.find().populate('user', 'name');
        res.status(200).json({
            ok: true,
            events
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "Por favor habla con el administrador",
        });
    }
}

const getEvent = async (req, res = response) => {
    try {
        const { id } = req.params;

        const event = await Event.findById(id).populate('user', 'name');
        res.status(200).json({
            ok: true,
            event
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "Por favor habla con el administrador",
        });
    }
}

const createEvent = async (req, res = response) => {
    try {
        const event = new Event(req.body);
        event.user = req.uid;

        await event.save();

        res.status(201).json({
            ok: true,
            event
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "Por favor habla con el administrador",
        });
    }
}

const updateEvent = async (req, res = response) => {
    try {
        const { id } = req.params;
        const { uid } = req;

        const event = await Event.findById(id);

        if (!event) {
            return res.status(404).json({
                ok: false,
                msg: 'El evento no fue encontrado'
            });
        }

        if (event.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                msg: 'No tiene permisos para hacer este cambio'
            });
        }

        const newEvent = {
            ...req.body,
            user: uid
        };

        const eventUpdate = await Event.findByIdAndUpdate(id, newEvent, { new: true });

        res.status(202).json({
            ok: true,
            prevEvent: event,
            event: eventUpdate
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "Por favor habla con el administrador",
        });
    }
}

const deleteEvent = async (req, res = response) => {
    try {
        const { id } = req.params;
        const { uid } = req;

        const event = await Event.findById(id);

        if (!event) {
            return res.status(404).json({
                ok: false,
                msg: 'El evento no fue encontrado'
            });
        }

        if (event.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                msg: 'No tiene permisos para hacer este cambio'
            });
        }

        await Event.findByIdAndDelete(id);

        res.status(202).json({
            ok: true,
            prevEvent: event
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "Por favor habla con el administrador",
        });
    }
}

module.exports = {
    getEvent,
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent,
}
