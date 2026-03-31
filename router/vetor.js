//vetor

import express from 'express'
const router_vetor = express.Router()

import { somaNumeros } from "../vetor/ex1.js";
import { criacaoVetor } from "../vetor/ex2.js";

// router_vetor.get('/ex1vetor', (req, res) => {
//    let resultado = somaNumeros()
//    res.send(resultado)
// });
router_vetor.get('/ex1vetor', (req, res) => {
   let { numeros } = req.query
   let soma = numeros.reduce((acc, num) => acc + Number(num), 0)
   res.send(soma.toString())
});


// router_vetor.get('/ex2vetor', (req, res) => {
//    let resultado = criacaoVetor()
//    res.send(resultado)
// });
router_vetor.post('/ex2vetor', (req, res) => {
   let { vetorA, vetorB } = req.body
   let vetorC = vetorA.map((num, index) => num + vetorB[index])
   res.json(vetorC)
});

export { router_vetor }