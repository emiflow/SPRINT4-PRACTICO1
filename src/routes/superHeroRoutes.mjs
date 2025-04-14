import express from 'express';
import {
    obtenerSuperheroePorIdController,
    obtenerTodosLosSuperheroesController,
    buscarSuperheroesPorAtributoController,
    obtenerSuperheroesMayoresDe30Controller,
    crearSuperheroeController,
    actualizarSuperheroeController,
    borrarPorIdController,
    borrarPorNombreSuperheroeController,
    borrarTodoController,
    formularioCrearSuperheroe,
    formularioActualizarSuperheroeController,
    alertaEliminacionSuperheroeController,
    obtenerPaginaPrincipal
} from '../controllers/superheroesController.mjs';

import { reglasDeValidacion } from '../validations/validacionesSuperheroes.mjs';
import { validacionErrores } from '../middlewares/middlewaresSuperheroes.mjs';

const router = express.Router();

router.get('/heroes', obtenerTodosLosSuperheroesController);
router.get('/heroes/:id', obtenerSuperheroePorIdController);
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);
router.get('/mayores-30', obtenerSuperheroesMayoresDe30Controller);
router.get('/formularioCrearSuperheroe',formularioCrearSuperheroe);
router.get('/', obtenerPaginaPrincipal);
router.post('/crearSuperheroe' ,reglasDeValidacion(),validacionErrores, crearSuperheroeController);
router.post('/formularioActualizarSuperheroe',formularioActualizarSuperheroeController);
router.post('/formularioActualizarSuperheroe',formularioActualizarSuperheroeController);
router.post('/alertaEliminacionSuperheroe',alertaEliminacionSuperheroeController)
router.put('/actualizarSuperheroe/:id',reglasDeValidacion(),validacionErrores,actualizarSuperheroeController);
router.delete('/borrarPorId/:id',borrarPorIdController);
router.delete('/borrarPorNombreSuperheroe/:nombre',borrarPorNombreSuperheroeController);
router.delete('/borrarTodo',borrarTodoController);
export default router;

