import express from 'express'
const app = express()

import { router_if_else } from './router/if_else.js';
import { router_case } from './router/case.js';
import { router_laco } from './router/laco.js';
import { router_json } from './router/json.js';
import { router_operadores_aritimeticos } from './router/operadores_aritimeticos.js';
import { router_operadores_logicos } from './router/operadores_logicos.js';
import { router_operadores_relacionais } from './router/operadores_ralacionais.js';
import { router_variaveis } from './router/variaveis.js';
import { router_vetor } from './router/vetor.js';

app.use(express.Router())
app.use(express.json());



app.use('/', router_if_else)
app.use('/', router_case)
app.use('/', router_laco)
app.use('/', router_json)
app.use('/', router_operadores_aritimeticos)
app.use('/', router_operadores_logicos)
app.use('/', router_operadores_relacionais)
app.use('/', router_variaveis)
app.use('/', router_vetor)

app.listen(3000, () => {
   console.log('rodando no servidor http://localhost:3000')
})