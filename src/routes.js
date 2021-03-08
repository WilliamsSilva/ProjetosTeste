const { Router } = require('express');
const express = require ('express');
const routes = express.Router();


const cargoController = require('./controller/cargoController');
const empresaController = require('./controller/empresaController');
const funcionarioController = require('./controller/funcionarioController');
const protocoloController =  require('./controller/protocoloController');


routes.get('/', (req,res)=>{
    res.json('Olá mundo');
}),

routes.get('/cargo/ler', cargoController.ler)
routes.get('/cargo/inserir', cargoController.inserir)
routes.get('/cargo/editar/id', cargoController.editar)
routes.get('/cargo/deletar/id', cargoController.deletar)

routes.get('/empresa/ler', empresaController.ler)
routes.get('/empresa/inserir', empresaController.inserir)
routes.get('/empresa/editar/id', empresaController.editar)
routes.get('/empresa/deletar/id', empresaController.deletar)

routes.get('/funcionario/ler', funcionarioController.ler)
routes.get('/funcionario/inserir', funcionarioController.inserir)
routes.get('/funcionario/editar/id', funcionarioController.editar)
routes.get('/funcionario/deletar/id', funcionarioController.deletar)

routes.get('/protocolo/ler', protocoloController.ler)
routes.get('/protocolo/inserir', protocoloController.inserir)
routes.get('/protocolo/editar/id', protocoloController.editar)
routes.get('/protocolo/deletar/id', protocoloController.editar)

module.exports = routes;