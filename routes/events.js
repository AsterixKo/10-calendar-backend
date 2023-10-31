/*
    Rutas de Eventos / Events
    host + /api/events
*/

const Router = require("express");
const { validarJWT } = require("../middlewares/validar-jwt");
const {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
} = require("../controllers/events");
const router = Router();

router.use(validarJWT); // de esta forma aplica el middelware en todas las peticiones del archivo

// Todas tienen que pasar por la validación del JWT
// Obtener eventos
router.get("/", getEventos);

router.post("/", crearEvento);

router.put("/:id", actualizarEvento);

router.delete("/:id", eliminarEvento);

module.exports = router;
