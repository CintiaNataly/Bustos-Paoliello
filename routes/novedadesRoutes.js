import express from "express"
import {getTodasNovedades, getTodasNovedadesId, crearNovedad, actualizarNovedad, eliminarNovedad} from "../controllers/novedadesController.js";

const router = express.Router();


// Todos los libros
router.get('/', getTodasNovedades);

// Libros por id
router.get('/:id', getTodasNovedadesId);

// Crear libro
router.post('/', crearNovedad);

// Actualizar un libro
router.put('/:id', actualizarNovedad);

// Eliminar un libro
router.delete('/:id', eliminarNovedad);

export default router;