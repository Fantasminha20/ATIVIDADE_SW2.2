//operadores aritmeticos

import express from 'express'
const router_operadores_aritimeticos = express()


import { calculadora } from '../operadores_aritimeticos/ex1.js';
import { media } from '../operadores_aritimeticos/ex2.js';
import { restoDivisao } from '../operadores_aritimeticos/ex3.js';
import { potenciacao } from '../operadores_aritimeticos/ex4.js';
import { conversorTemperatura } from '../operadores_aritimeticos/ex5.js';
import { areaQuadrado } from '../operadores_aritimeticos/ex6.js';
import { salarioTotal } from '../operadores_aritimeticos/ex7.js';


router_operadores_aritimeticos.get('/ex1aritimeticos', (req, res) => {
   let resultado = calculadora()
   res.send(resultado)
});

router_operadores_aritimeticos.get('/ex2aritimeticos', (req, res) => {
   let resultado = media()
   res.send(resultado)
});

router_operadores_aritimeticos.get('/ex3aritimeticos', (req, res) => {
   let resultado = restoDivisao()
   res.send(resultado)
});

router_operadores_aritimeticos.get('/ex4aritimeticos', (req, res) => {
   let resultado = potenciacao()
   res.send(resultado)
});

router_operadores_aritimeticos.get('/ex5aritimeticos', (req, res) => {
   let resultado = conversorTemperatura()
   res.send(resultado)
});

router_operadores_aritimeticos.get('/ex6aritimeticos', (req, res) => {
   let resultado = areaQuadrado()
   res.send(resultado)
});

router_operadores_aritimeticos.get('/ex7aritimeticos', (req, res) => {
   let resultado = salarioTotal()
   res.send(resultado)
});


export { router_operadores_aritimeticos }
