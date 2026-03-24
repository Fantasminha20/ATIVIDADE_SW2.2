//operadores relacionais

import express from 'express'
const router_operadores_relacionais = express()

import { carteiraMotorista } from '../operadores_relacionais/ex1.js';
import { administracao } from '../operadores_relacionais/ex2.js';
import { notaAluno } from '../operadores_relacionais/ex3.js';
import { acessoSite } from '../operadores_relacionais/ex4.js';
import { numeroPositivoNegativo } from '../operadores_relacionais/ex5.js';
import { desconto } from '../operadores_relacionais/ex6.js';



router_operadores_relacionais.get('/ex1relacionais', (req, res) => {
   let resultado = carteiraMotorista()
   res.send(resultado)
});

router_operadores_relacionais.get('/ex2relacionais', (req, res) => {
   let resultado = administracao()
   res.send(resultado)
});

router_operadores_relacionais.get('/ex3relacionais', (req, res) => {
   let resultado = notaAluno()
   res.send(resultado)
});

router_operadores_relacionais.get('/ex4relacionais', (req, res) => {
   let resultado = acessoSite()
   res.send(resultado)
});

router_operadores_relacionais.get('/ex5relacionais', (req, res) => {
   let resultado = numeroPositivoNegativo()
   res.send(resultado)
});

router_operadores_relacionais.get('/ex6relacionais', (req, res) => {
   let resultado = desconto()
   res.send(resultado)
});

export { router_operadores_relacionais }