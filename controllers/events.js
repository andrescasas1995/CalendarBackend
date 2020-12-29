const { response } = require("express");

const getEvents = (req, res = response) => {
    try {
        res.status(200).json({
            ok: true,
            msg: 'getEvents'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
          ok: false,
          msg: "Por favor habla con el administrador",
        });
    }
}

const getEvent = (req, res = response) => {
    try {
        res.status(200).json({
            ok: true,
            msg: 'getEvent'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
          ok: false,
          msg: "Por favor habla con el administrador",
        });
    }
}

const createEvent = (req, res = response) => {
    try {
        res.status(201).json({
            ok: true,
            msg: 'createEvent'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
          ok: false,
          msg: "Por favor habla con el administrador",
        });
    }
}

const updateEvent = (req, res = response) => {
    try {
        res.status(202).json({
            ok: true,
            msg: 'updateEvent'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
          ok: false,
          msg: "Por favor habla con el administrador",
        });
    }
}

const deleteEvent = (req, res = response) => {
    try {
        res.status(202).json({
            ok: true,
            msg: 'deleteEvent'
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
