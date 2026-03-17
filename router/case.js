//case
import express from 'express'
const router_case = express.Router()

import { exe_case } from '../case/ex1.js';


router_case.get('/ex1_case', (req, res) => {
   let dia = 6
   let resultado = exe_case(dia);
   res.send(resultado)
});

export {router_case}


