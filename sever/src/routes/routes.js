const express = require('express')
const route = express.Router()
const vendedorController = require('../controller/vendedorController')
const clienteController = require('../controller/clienteController')
const visitasController = require('../controller/visitasController')

//Rota para tabela CLIENTE
route.get('/cliente', clienteController.listarCliente)
route.post('/cliente', clienteController.cadastrarCliente)
route.put('/cliente/:cnpj', clienteController.atualizarCliente) //http://localhost:5000/cliente/77777777000171
route.delete('/cliente/:cnpj', clienteController.removerCliente)

//Rota para tabela VENDEDOR
route.get('/vendedor', vendedorController.listarVendedor)
route.post('/vendedor', vendedorController.cadastrarVendedor)
route.put('/vendedor/:cpf', vendedorController.atualizarVendedor)
route.delete('/vendedor/:cpf', vendedorController.removerVendedor)
route.get('/vendedor/contrato', vendedorController.contratoVencimento) //localhost:5000/vendedor/contrato?data_termino=1900-01-01

//ROTA para tabela VISITAS






module.exports = route