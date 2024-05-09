const express = require("express");
const asteroidCometSchema = require("../../../models/asteroidComet");

const router = express.Router();

// create asteroidComet
router.post("/asteroidComets", (req, res) => {
  const asteroidComet = asteroidCometSchema(req.body);
  asteroidComet
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all asteroidComets
router.get("/asteroidComets", (req, res) => {
  asteroidCometSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all asteroidComet names
router.get("/asteroidComets/names", (req, res) => {
  asteroidCometSchema
    .find({}, { nombre: 1, _id: 0 })
    .then((data) => res.json(data.map((asteroidComet) => asteroidComet.nombre)))
    .catch((error) => res.json({ message: error }));
});

// get a asteroidComet
router.get("/asteroidComets/id/:_id", (req, res) => {
  const { _id } = req.params;
  asteroidCometSchema
    .findById(_id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a asteroidComet by name
router.get("/asteroidComets/name/:nombre", (req, res) => {
  const { nombre } = req.params;
  asteroidCometSchema
    .findByNombre(nombre)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a asteroidComet
router.delete("/asteroidComets/:_id", (req, res) => {
  const { id } = req.params;
  asteroidCometSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a asteroidComet
router.put("/asteroidComets/:_id", (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, overview, cultura_pop, historias, facts } =
    req.body;
  /* const {
    Introduccion,
    Nombre,
    Potencial_para_la_vida,
    Tamaño_y_Distancia,
    Orbita_y_Rotacion,
    Lunas,
    Anillos,
    Formacion,
    Estructura,
    Superficie,
    Atmosfera,
    Magnetosfera,
  } = req.body.facts; */

  asteroidCometSchema
    .updateOne(
      { _id: id },
      { $set: { nombre, descripcion, overview, cultura_pop, historias, facts } }
    )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
