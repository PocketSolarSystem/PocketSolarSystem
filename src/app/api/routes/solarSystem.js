const express = require("express");
const solarSystemSchema = require("../../../models/solarSystem");

const router = express.Router();

// create solarSystem
router.post("/solarSystems", (req, res) => {
  const solarSystem = solarSystemSchema(req.body);
  solarSystem
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all solarSystems
router.get("/solarSystems", (req, res) => {
  solarSystemSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all solarSystem names
router.get("/solarSystems/names", (req, res) => {
  solarSystemSchema
    .find({}, { nombre: 1, _id: 0 })
    .then((data) => res.json(data.map((solarSystem) => solarSystem.nombre)))
    .catch((error) => res.json({ message: error }));
});

// get a solarSystem
router.get("/solarSystems/id/:_id", (req, res) => {
  const { _id } = req.params;
  solarSystemSchema
    .findById(_id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a solarSystem by name
router.get("/solarSystems/name/:nombre", (req, res) => {
  const { nombre } = req.params;
  solarSystemSchema
    .findByNombre(nombre)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a solarSystem
router.delete("/solarSystems/:_id", (req, res) => {
  const { id } = req.params;
  solarSystemSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a solarSystem
router.put("/solarSystems/:_id", (req, res) => {
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

  solarSystemSchema
    .updateOne(
      { _id: id },
      { $set: { nombre, descripcion, overview, cultura_pop, historias, facts } }
    )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
