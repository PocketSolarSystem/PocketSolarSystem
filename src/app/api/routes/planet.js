const express = require("express");
const planetSchema = require("../../../models/planet");

const router = express.Router();

// create planet
router.post("/planets", (req, res) => {
  const planet = planetSchema(req.body);
  planet
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all planets
router.get("/planets", (req, res) => {
  planetSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all planet names
router.get("/planets/names", (req, res) => {
  planetSchema
    .find({}, { nombre: 1, _id: 0 })
    .then((data) => res.json(data.map((planet) => planet.nombre)))
    .catch((error) => res.json({ message: error }));
});

// get a planet
router.get("/planets/id/:_id", (req, res) => {
  const { _id } = req.params;
  planetSchema
    .findById(_id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a planet by name
router.get("/planets/name/:nombre", (req, res) => {
  const { nombre } = req.params;
  planetSchema
    .findByNombre(nombre)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a planet
router.delete("/planets/:_id", (req, res) => {
  const { id } = req.params;
  planetSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a planet
router.put("/planets/:_id", (req, res) => {
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

  planetSchema
    .updateOne(
      { _id: id },
      { $set: { nombre, descripcion, overview, cultura_pop, historias, facts } }
    )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
