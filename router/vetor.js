//vetor

import express from 'express'
const router_vetor = express()

import { somaNumeros } from "../vetor/ex1.js";
import { criacaoVetor } from "../vetor/ex2.js";

router_vetor.get('/ex1vetor', (req, res) => {
   let resultado = somaNumeros()
   res.send(resultado)
});

router_vetor.get('/ex2vetor', (req, res) => {
   let resultado = criacaoVetor()
   res.send(resultado)
});

export { router_vetor }