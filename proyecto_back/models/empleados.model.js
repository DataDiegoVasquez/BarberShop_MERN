const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmpleadosSchema = new Schema({
    nombres:{type: String, required: true, max:60},
    apellidos:{type: String, required: true, max:40},
    genero:{type: String, required: true, max:10},
    telefono:{type: String, required: true, max:15},
    mail:{type: String, required: false, max:70},
    direccion:{type: String, required: false, max:150},
    fechaContratacion:{type: Date, required: true},
    cargo:{type: String, required: true, max: 100},
    salario:{type: Number, required: true, max: 20000000}
});

module.exports = mongoose.model("empleados", EmpleadosSchema); 