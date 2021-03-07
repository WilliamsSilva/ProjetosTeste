const express = require ('express');
const routes = express.Router();

routes.get('/', (req,res)=>{
    res.get('Olá mundo');
})

module.exports = routes;