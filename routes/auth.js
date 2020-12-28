/*
    Rutas del Auth
    host + /api/auth
*/
const { Router } = require("express");
const { check } = require("express-validator");
const router = Router();

const {
  createUser,
  loginUser,
  revalidateUser,
} = require("../controllers/auth");
const { validateFields } = require("../middlewares/validateFields");
const { validateJWT } = require("../middlewares/validateJWT");

router.get(
    "/renew",
    validateJWT,
    revalidateUser
);

router.post(
  "/",
  [
    check("email", "El email es obligatorio").not().isEmpty(),
    check("email", "El email no tiene un formato valido").isEmail(),
    check("password", "El password es obligatorio").not().isEmpty(),
    check("password", "El password debe de ser de 6 caracteres").isLength({
      min: 6,
    }),
    validateFields,
  ],
  loginUser
);

router.post(
  "/new",
  [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").not().isEmpty(),
    check("email", "El email no tiene un formato valido").isEmail(),
    check("password", "El password es obligatorio").not().isEmpty(),
    check("password", "El password debe de ser de 6 caracteres").isLength({
      min: 6,
    }),
    validateFields,
  ],
  createUser
);

module.exports = router;
