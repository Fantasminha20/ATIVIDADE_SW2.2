//case

import express from 'express'
const router_case = express.Router()

import { exe_case } from '../case/ex1.js';


router_case.get('/ex1_case', (req, res) => {
   let dia = 6
   let resultado = exe_case(dia);
   res.send(resultado)
});

/*router_case.get('/ex1_case', (req, res) => {

   let {dia} = req.body
   let resultado = exe_case(dia);
   res.send(resultado)
});*/

/*app.post('/ex4', (req, res) => {

   let { base, altura } = req.body
   let area = (base * altura) / 2
   let resposta = {

       resultado: area

   }
   res.json(resposta)

});*/


export { router_case }


