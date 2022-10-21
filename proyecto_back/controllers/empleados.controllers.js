const Empleado = require("../models/empleados.model");
let response ={
    msg: "",
    exito: false
}
//POST method
exports.create = function(req,res){
    let empleado = new Empleado({
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        genero: req.body.genero,
        telefono: req.body.telefono,
        mail: req.body.mail,
        direccion : req.body.direccion,
        fechaContratacion : req.body.fechaContratacion,
        cargo : req.body.cargo,
        salario :   req.body.salario
    })

    empleado.save(function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al guardar el empleado"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El empleado se guardó correctamente"
        res.json(response)
    })
}
//GET method
exports.find = function(req,res){
    Empleado.find(function(err, empleados){
        res.json(empleados)
    })
}

exports.findOne = function(req,res){
    Empleado.findOne({_id: req.params.id},function(err, empleado){
        res.json(empleado)
    })
}
//update method
exports.update = function(req,res){
    let empleado = {
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        genero: req.body.genero,
        telefono: req.body.telefono,
        mail: req.body.mail,
        direccion : req.body.direccion,
        fechaContratacion : req.body.fechaContratacion,
        cargo : req.body.cargo,
        salario :   req.body.salario
    }

    Empleado.findByIdAndUpdate(req.params.id, {$set: empleado}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al modificar el empleado"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El empleado modifico correctamente"
        res.json(response)
    })
}
//delete method
exports.remove = function(req,res){
    Empleado.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al eliminar el empleado"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El empleado eliminado correctamente"
        res.json(response)
    })
}