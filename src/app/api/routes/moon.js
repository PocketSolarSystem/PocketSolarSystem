const express = require("express");
const moonSchema = require("../models/moon");

const router = express.Router();

// create moon
router.post("/moons", (req, res) => {
  const moon = moonSchema(req.body);
  moon
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all moons
router.get("/moons", (req, res) => {
  moonSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all moon names
router.get("/moons/names", (req, res) => {
  moonSchema
    .find({}, { nombre: 1, _id: 0 })
    .then((data) => res.json(data.map((moon) => moon.nombre)))
    .catch((error) => res.json({ message: error }));
});

// get a moon
router.get("/moons/id/:_id", (req, res) => {
  const { _id } = req.params;
  moonSchema
    .findById(_id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a moon by name
router.get("/moons/name/:nombre", (req, res) => {
  const { nombre } = req.params;
  moonSchema
    .findByNombre(nombre)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a moon
router.delete("/moons/:_id", (req, res) => {
  const { id } = req.params;
  moonSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a moon
router.put("/moons/:_id", (req, res) => {
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

  moonSchema
    .updateOne(
      { _id: id },
      { $set: { nombre, descripcion, overview, cultura_pop, historias, facts } }
    )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
