// if_else

import express from 'express'
const router_if_else = express.Router()

import { resultadoIfElse } from "../if_else/ex1.js";
import { idade_nadador1 } from "../if_else/ex2.js";
import { turno1 } from "../if_else/ex3.js";
import { extersao } from "../if_else/ex4.js";

// router_if_else.get('/ex1', (req, res) => {
//    let numero = 5
//    let resultado = resultadoIfElse(numero);
//    res.send(resultado)
// });
router_if_else.post('/ex1_ifElse', (req, res) => {
   let { numero } = req.body
   let resultado = {

      resposta: resultadoIfElse(numero)

   }

   res.send(resultado)
});


// router_if_else.get('/ex2', (req, res) => {
//    let idade_nadador = 10
//    let resultado = idade_nadador1(idade_nadador)
//    res.send(resultado)
// });
router_if_else.get('/ex2_ifElse', (req, res) => {
   let { idade_nadador } = req.query
   let resultado = {
       resposta: idade_nadador1(idade_nadador)
   }
   res.send(resultado)
});


// router_if_else.get('/ex3', (req, res) => {
//    let turno = "m"
//    let resultado = turno1(turno)
//    res.send(resultado)
// });
router_if_else.get('/ex3_ifElse/:turno', (req, res) => {
   let { turno } = req.params
   let turnos = {
      m: "Manhã",
      t: "Tarde",
      n: "Noite"
   }
   let resultado = {
      resposta: turnos[turno]
   }
   res.send(resultado)
});


// router_if_else.get('/ex4', (req, res) => {
//    let Sao_Paulo = 12300000
//    let resultado = extersao(Sao_Paulo)
//    res.send(resultado)
// });
router_if_else.get('/ex4_ifElse/:Sao_Paulo', (req, res) => {
   let { Sao_Paulo } = req.params
   let resultado = {
      resposta: extersao(Sao_Paulo)
   }
   res.send(resultado)
});


export { router_if_else }