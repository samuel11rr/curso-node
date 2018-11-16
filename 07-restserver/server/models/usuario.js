const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre es necesario']
  },
  email: {
    type: String,
    required: [true, 'El email es necesario']
  },
  password: {
    type: String,
    required: [true, 'El password es necesario']
  },
  img: {
    type: String,
    required: [false, 'Es opcional']
  },
  role: {
    type: String,
    default: 'USER_ROLE'
  },
  estado: {
    type: Boolean,
    default: true
  },
  google: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model( 'Usuario', usuarioSchema );
