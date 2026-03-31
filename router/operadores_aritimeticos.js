//operadores aritmeticos

import express from 'express'
const router_operadores_aritimeticos = express.Router()


import { calculadora } from '../operadores_aritimeticos/ex1.js';
import { media } from '../operadores_aritimeticos/ex2.js';
import { restoDivisao } from '../operadores_aritimeticos/ex3.js';
import { potenciacao } from '../operadores_aritimeticos/ex4.js';
import { conversorTemperatura } from '../operadores_aritimeticos/ex5.js';
import { areaQuadrado } from '../operadores_aritimeticos/ex6.js';
import { salarioTotal } from '../operadores_aritimeticos/ex7.js';


// router_operadores_aritimeticos.get('/ex1aritimeticos', (req, res) => {
//    let resultado = calculadora()
//    res.send(resultado)
// });

router_operadores_aritimeticos.get('/ex1aritimeticos/:a/:b', (req, res) => {
 let {a,b} = req.params
 let resultado = {
  resposta: calculadora(a,b)

 }
 res.send(resultado);


});

// router_operadores_aritimeticos.get('/ex2aritimeticos', (req, res) => {
//    let resultado = media()
//    res.send(resultado)
// });

router_operadores_aritimeticos.get('/ex2aritimeticos/:nota_1/:nota_2/:nota_3', (req, res) => {
   let {nota_1,nota_2, nota_3} = req.params
   let resultado = {
    resposta: media(nota_1,nota_2,nota_3)
  
   }
   res.send(resultado);
  
  
  });

// router_operadores_aritimeticos.get('/ex3aritimeticos', (req, res) => {
//    let resultado = restoDivisao()
//    res.send(resultado)
// });

router_operadores_aritimeticos.get('/ex3aritimeticos/:ab/:ress', (req, res) => {
   let {ab,ress} = req.params
   let resultado = {
    resposta: restoDivisao (ab,ress)
  
   }
   res.send(resultado);
  
  
  });

// router_operadores_aritimeticos.get('/ex4aritimeticos', (req, res) => {
//    let resultado = potenciacao()
//    res.send(resultado)
// });

router_operadores_aritimeticos.get('/ex4aritimeticos', (req, res) => {
   let {numero} = req.query
   let resultado = {
    resposta: potenciacao (numero)
  
   }
   res.send(resultado);
  
  
  });



// router_operadores_aritimeticos.get('/ex5aritimeticos', (req, res) => {
//    let resultado = conversorTemperatura()
//    res.send(resultado)
// });

router_operadores_aritimeticos.post('/ex5aritimeticos', (req, res) => {
   let {graus_celsius,graus_Fahrenheit} = req.body
   let resultado = {
    resposta: conversorTemperatura (graus_celsius,graus_Fahrenheit)
  
   }
   res.send(resultado);
  
  
  });

// router_operadores_aritimeticos.get('/ex6aritimeticos', (req, res) => {
//    let resultado = areaQuadrado()
//    res.send(resultado)
// });

router_operadores_aritimeticos.post('/ex6aritimeticos', (req, res) => {
   let {base,altura,area} = req.body
   let resultado = {
    resposta: areaQuadrado (base,altura,area)
  
   }
   res.send(resultado);
  
  
  });

// router_operadores_aritimeticos.get('/ex7aritimeticos', (req, res) => {
//    let resultado = salarioTotal()
//    res.send(resultado)
// });

router_operadores_aritimeticos.get('/ex7aritimeticos/:ganho_porHora/:adicional/:total', (req, res) => {
   let {ganho_porHora,adicional,total } = req.params
   let resultado = {
    resposta: salarioTotal (ganho_porHora,adicional,total)
  
   }
   res.send(resultado);
  
  
  });


export { router_operadores_aritimeticos }
