//variaveis
import express from 'express'
const router_variaveis = express();

import { compra } from "../variaveis/ex1.js";
import { conversao } from "../variaveis/ex2.js";
import { areaRetangulo } from "../variaveis/ex3.js";

router_variaveis.get('/ex1variaveis', (req, res) => {
   let resultado = compra()
   res.send(resultado)
});

router_variaveis.get('/ex2variaveis', (req, res) => {
   let resultado = conversao()
   res.send(resultado)
});

router_variaveis.get('/ex3variaveis', (req, res) => {
   let resultado = areaRetangulo()
   res.send(resultado)
});

export {router_variaveis}