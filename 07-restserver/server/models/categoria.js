const mongoose        = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


let Schema = mongoose.Schema;


let categoriaSchema = new Schema({
  descripcion: {
    type: String,
    unique: true,
    required: [true, 'Se requiere la descripción']
  },
  usuario: {
    type: Schema.Types.ObjectId, ref: 'Usuario'
  }
});


module.exports = mongoose.model( 'Categoria', categoriaSchema );
