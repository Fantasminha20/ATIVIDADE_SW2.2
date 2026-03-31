//case

import express from 'express'
const router_case = express.Router()

import { exe_case } from '../case/ex1.js';


// router_case.get('/ex1_case', (req, res) => {
//    let dia = 6
//    let resultado = exe_case(dia);
//    res.send(resultado)
// });
router_case.get('/ex1_case/:dia', (req, res) => {
   let { dia } = req.params

   let dias = {
      1: "Domingo",
      2: "Segunda-feira",
      3: "Terça-feira",
      4: "Quarta-feira",
      5: "Quinta-feira",
      6: "Sexta-feira",
      7: "Sábado"
   }

   let resultado = {
      resposta: dias[dia]
   }

   res.send(resultado)
});


export { router_case }


