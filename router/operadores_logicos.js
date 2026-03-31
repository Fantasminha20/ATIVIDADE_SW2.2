//operadores logicos

import express from 'express'
const router_operadores_logicos = express.Router();

import { validacaoLogin } from "../operadores_logicos/ex1.js";
import { sistemaBonus } from "../operadores_logicos/ex2.js";
import { classificacaoTriangulo } from "../operadores_logicos/ex3.js";


// router_operadores_logicos.get('/ex1logicos', (req, res) => {
//    let resultado = validacaoLogin()
//    res.send(resultado)
// });
router_operadores_logicos.post('/ex1logicos', (req, res) => {
   let { usuario, senha } = req.body
   let resultado = {

    resposta: validacaoLogin(usuario,senha)

   }
  res.json(resultado)
});



// router_operadores_logicos.get('/ex2logicos', (req, res) => {
//    let resultado = sistemaBonus()
//    res.send(resultado)
// });
router_operadores_logicos.get('/ex2logicos', (req, res) => {
    let { funcionario, tempo, status, vendas } = req.query
    let resultado = {

      resposta: sistemaBonus(funcionario,tempo,status,vendas)

    }
    res.send(resultado)
   });


// router_operadores_logicos.get('/ex3logicos', (req, res) => {
//    let resultado = classificacaoTriangulo()
//    res.send(resultado)
// });
router_operadores_logicos.get('/ex3logicos/:ladoA/:ladoB/:ladoC', (req, res)=> {
  let { ladoA, ladoB, ladoC } = req.params
  let resultado = {
       
      resposta: classificacaoTriangulo(ladoA, ladoB, ladoC)

  }
  res.send(resultado)
})



export { router_operadores_logicos }