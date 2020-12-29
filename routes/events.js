/*
    Rutas de los Events
    host + /api/events
*/
const { Router } = require("express");
const { check } = require("express-validator");
const router = Router();

const { validateJWT } = require("../middlewares/validateJWT");
const { validateFields } = require("../middlewares/validateFields");
const { isDate } = require("../helpers/dates");
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
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').not().isEmpty().custom(isDate),
        check('end', 'Fecha de fin es obligatoria').not().isEmpty().custom(isDate),
        validateFields
    ],
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