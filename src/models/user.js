import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellidos: {
    type: String,
  },
  correo: {
    type: String,
    required: true,
  },
  codigoPostal: {
    type: String,
  },
  direccion: {
    type: String,
  },
  ciudad: {
    type: String,
  },
  pais: {
    type: String,
  },
  telefono: {
    type: String,
  },
  codigo: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    required: true,
  },
  clave: {
    type: String,
    required: true,
  },
  estado: {
    type: String,
    required: true,
  },
  fechaNacimiento: {
    type: Date,
  },
  fechaUltimoAcceso: {
    type: Date,
  },
  numeroAccesosErroneo: {
    type: Number,
    required: true,
  },
});

export default mongoose.models.User || mongoose.model("User", userSchema);
