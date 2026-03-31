//json

import express from 'express'
const router_json = express.Router();
import { alunos } from "../json/ex1.js";

// router_json.get('/ex1json', (req, res) => {
//    let resultado = alunos()
//    res.send(resultado)
// });
router_json.get('/ex1json', (req, res) => {
   let { aluno, idade, curso, turno, modulo } = req.query
   let resposta = {
       
      nome: aluno,
      idade: idade,
      curso: curso,
      turno: turno,
      modulo: modulo
}

   res.json(resposta)
});


export { router_json }