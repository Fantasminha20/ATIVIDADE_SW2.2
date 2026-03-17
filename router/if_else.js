// if_else
import express from 'express'
const router_if_else = express.Router()

import { resultadoIfElse } from "../if_else/ex1.js";
import { idade_nadador1 } from "../if_else/ex2.js";
import { turno1 } from "../if_else/ex3.js";
import { extersao } from "../if_else/ex4.js";

router_if_else.get('/ex1', (req, res) => {
   let numero = 5
   let resultado = resultadoIfElse(numero);
   res.send(resultado)
});

router_if_else.get('/ex2', (req, res) => {
   let idade_nadador = 10
   let resultado = idade_nadador1(idade_nadador)
   res.send(resultado)
});

router_if_else.get('/ex3', (req, res) => {
   let turno = "m"
   let resultado = turno1(turno)
   res.send(resultado)
});

router_if_else.get('/ex4', (req, res) => {
   let Sao_Paulo = 12300000
   let resultado = extersao(Sao_Paulo)
   res.send(resultado)
});

export {router_if_else}