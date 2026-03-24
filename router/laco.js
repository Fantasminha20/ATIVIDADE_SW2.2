import express from 'express'

const router_laco = express()

//laço
import { somaPares } from "../laco/ex1.js";
import { numero } from "../laco/ex2.js";
import { exercio3 } from "../laco/ex3.js";
import { pessoas } from "../laco/ex4.js";
import { nomes } from "../laco/ex5.js";


router_laco.get('/ex1laco', (req, res) => {
   let resultado = somaPares()
   res.send(resultado)
});

router_laco.get('/ex2laco', (req, res) => {
   console.log("ROTA EX2LACO FOI CHAMADA")
   let resultado = numero()
   res.send(resultado)
});

router_laco.get('/ex3laco', (req, res) => {
   let resultado = exercio3()
   res.send(resultado)
});

router_laco.get('/ex4laco', (req, res) => {
   let resultado = pessoas()
   res.send(resultado)
});

router_laco.get('/ex5laco', (req, res) => {
   let resultado = nomes()
   res.send(resultado)
});

export { router_laco }