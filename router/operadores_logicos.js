//operadores logicos
import express from 'express'
const router_operadores_logicos = express();

import { validacaoLogin } from "../operadores_logicos/ex1.js";
import { sistemaBonus } from "../operadores_logicos/ex2.js";
import { classificacaoTriangulo } from "../operadores_logicos/ex3.js";

router_operadores_logicos.get('/ex1logicos', (req, res) => {
   let resultado = validacaoLogin()
   res.send(resultado)
});

router_operadores_logicos.get('/ex2logicos', (req, res) => {
   let resultado = sistemaBonus()
   res.send(resultado)
});

router_operadores_logicos.get('/ex3logicos', (req, res) => {
   let resultado = classificacaoTriangulo()
   res.send(resultado)
});

export {router_operadores_logicos}