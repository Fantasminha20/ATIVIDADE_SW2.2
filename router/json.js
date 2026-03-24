//json

import express from 'express'
const router_json = express();
import { alunos } from "../json/ex1.js";

router_json.get('/ex1json', (req, res) => {
   let resultado = alunos()
   res.send(resultado)
});

export { router_json }