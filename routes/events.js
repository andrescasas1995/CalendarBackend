/*
    Rutas de los Events
    host + /api/events
*/
const { Router } = require("express");
const router = Router();

const { validateJWT } = require("../middlewares/validateJWT");
const {
    getEvent,
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent,
} = require('../controllers/events');

//Todas las rutas que estén debajo de la siguiente ruta usa el middleware
router.use(validateJWT);

router.get(
    '/',
    getEvents
);

router.get(
    '/:id',
    getEvent
);

router.post(
    '/',
    createEvent
);

router.put(
    '/:id',
    updateEvent
);

router.delete(
    '/:id',
    deleteEvent
);

module.exports = router;