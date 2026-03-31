//operadores relacionais

import express from 'express'
const router_operadores_relacionais = express.Router()

import { carteiraMotorista } from '../operadores_relacionais/ex1.js';
import { administracao } from '../operadores_relacionais/ex2.js';
import { notaAluno } from '../operadores_relacionais/ex3.js';
import { acessoSite } from '../operadores_relacionais/ex4.js';
import { numeroPositivoNegativo } from '../operadores_relacionais/ex5.js';
import { desconto } from '../operadores_relacionais/ex6.js';



// router_operadores_relacionais.get('/ex1relacionais', (req, res) => {
//    let resultado = carteiraMotorista()
//    res.send(resultado)
// });
router_operadores_relacionais.get('/ex1relacionais/:idade', (req, res) => {
   let { idade } = req.params
   let resultado = {

       resposta: carteiraMotorista(idade)

   }
   res.send(resultado)
});


// router_operadores_relacionais.get('/ex2relacionais', (req, res) => {
//    let resultado = administracao()
//    res.send(resultado)
// });
router_operadores_relacionais.post('/ex2relacionais', (req, res) => {
   let { usuario, senha } = req.body
   let resultado = {

    resposta: administracao(usuario,senha)

   }
  res.json(resultado)
});



// router_operadores_relacionais.get('/ex3relacionais', (req, res) => {
//    let resultado = notaAluno()
//    res.send(resultado)
// });
router_operadores_relacionais.get('/ex3relacionais/:nota', (req, res) => {
  let { nota } = req.params
  let resultado = {

   resposta: notaAluno(nota)

  }
   res.send(resultado)
})



// router_operadores_relacionais.get('/ex4relacionais', (req, res) => {
//    let resultado = acessoSite()
//    res.send(resultado)
// });
router_operadores_relacionais.get('/ex4relacionais', (req, res) => {
   let { idade } = req.query
   let resultado = {

       resposta: acessoSite(idade)

   }
   res.send(resultado)
})


// router_operadores_relacionais.get('/ex5relacionais', (req, res) => {
//    let resultado = numeroPositivoNegativo()
//    res.send(resultado)
// });
router_operadores_relacionais.get('/ex5relacionais', (req, res) => {
  let { numero } = req.query
  let resultado = {

      resposta: numeroPositivoNegativo(numero)

  }
  res.send(resultado)
})



// router_operadores_relacionais.get('/ex6relacionais', (req, res) => {
//    let resultado = desconto()
//    res.send(resultado)
// });
router_operadores_relacionais.post('/ex6relacionais', (req, res) => {
 let { valorCompra } = req.body
 let resultado = {
     
     resposta: desconto(valorCompra)

 }
 res.json(resultado)
})



export { router_operadores_relacionais }