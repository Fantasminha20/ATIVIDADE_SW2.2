import express from 'express'
const app = express()
console.log("SERVIDOR CERTO RODANDO")


//case
import { exe_case } from './case/ex1.js';

app.get('/ex1_case', (req, res) => {
   let dia = 6
   let resultado = exe_case(dia);
   res.send(resultado)
});


// if_else
import { resultadoIfElse } from "./if_else/ex1.js";
import { idade_nadador1 } from "./if_else/ex2.js";
import { turno1 } from "./if_else/ex3.js";
import { extersao } from "./if_else/ex4.js";

app.get('/ex1', (req, res) => {
   let numero = 5
   let resultado = resultadoIfElse(numero);
   res.send(resultado)
});

app.get('/ex2', (req, res) => {
   let idade_nadador = 10
   let resultado = idade_nadador1(idade_nadador)
   res.send(resultado)
});

app.get('/ex3', (req, res) => {
   let turno = "m"
   let resultado = turno1(turno)
   res.send(resultado)
});

app.get('/ex4', (req, res) => {
   let Sao_Paulo = 12300000
   let resultado = extersao(Sao_Paulo)
   res.send(resultado)
});


//laço
import { somaPares } from "./laco/ex1.js";
import { numero } from "./laco/ex2.js";
import { exercio3 } from "./laco/ex3.js";
import { pessoas } from "./laco/ex4.js";
import { nomes } from "./laco/ex5.js";

console.log(somaPares())
console.log(numero())

app.get('/ex1laco', (req, res) => {
   let resultado = somaPares()
   res.send(resultado)
});

app.get('/ex2laco', (req, res) => {
   console.log("ROTA EX2LACO FOI CHAMADA")
   let resultado = numero()
   res.send(resultado)
});

app.get('/ex3laco', (req, res) => {
   let resultado = exercio3()
   res.send(resultado)
});

app.get('/ex4laco', (req, res) => {
   let resultado = pessoas()
   res.send(resultado)
});

app.get('/ex5laco', (req, res) => {
   let resultado = nomes()
   res.send(resultado)
});


//json
import { alunos } from "./json/ex1.js";

app.get('/ex1json', (req, res) => {
   let resultado = alunos()
   res.send(resultado)
});


//vetor
import { somaNumeros } from "./vetor/ex1.js";
import { criacaoVetor } from "./vetor/ex2.js";

app.get('/ex1vetor', (req, res) => {
   let resultado = somaNumeros()
   res.send(resultado)
});

app.get('/ex2vetor', (req, res) => {
   let resultado = criacaoVetor()
   res.send(resultado)
});


//variaveis
import { compra } from "./variaveis/ex1.js";
import { conversao } from "./variaveis/ex2.js";
import { areaRetangulo } from "./variaveis/ex3.js";

app.get('/ex1variaveis', (req, res) => {
   let resultado = compra()
   res.send(resultado)
});

app.get('/ex2variaveis', (req, res) => {
   let resultado = conversao()
   res.send(resultado)
});

app.get('/ex3variaveis', (req, res) => {
   let resultado = areaRetangulo()
   res.send(resultado)
});


//operadores logicos
import { validacaoLogin } from "./operadores_logicos/ex1.js";
import { sistemaBonus } from "./operadores_logicos/ex2.js";
import { classificacaoTriangulo } from "./operadores_logicos/ex3.js";

app.get('/ex1logicos', (req, res) => {
   let resultado = validacaoLogin()
   res.send(resultado)
});

app.get('/ex2logicos', (req, res) => {
   let resultado = sistemaBonus()
   res.send(resultado)
});

app.get('/ex3logicos', (req, res) => {
   let resultado = classificacaoTriangulo()
   res.send(resultado)
});


//operadores relacionais
import { carteiraMotorista } from './operadores_relacionais/ex1.js';
import { administracao } from './operadores_relacionais/ex2.js';
import { notaAluno } from './operadores_relacionais/ex3.js';
import { acessoSite } from './operadores_relacionais/ex4.js';
import { numeroPositivoNegativo } from './operadores_relacionais/ex5.js';
import { desconto } from './operadores_relacionais/ex6.js';



app.get('/ex1relacionais', (req, res) => {
   let resultado = carteiraMotorista()
   res.send(resultado)
});

app.get('/ex2relacionais', (req, res) => {
   let resultado = administracao()
   res.send(resultado)
});

app.get('/ex3relacionais', (req, res) => {
   let resultado = notaAluno()
   res.send(resultado)
});

app.get('/ex4relacionais', (req, res) => {
   let resultado = acessoSite()
   res.send(resultado)
});

app.get('/ex5relacionais', (req, res) => {
   let resultado = numeroPositivoNegativo()
   res.send(resultado)
});

app.get('/ex6relacionais', (req, res) => {
   let resultado = desconto()
   res.send(resultado)
});


//operadores aritmeticos
import { calculadora } from './operadores_aritimeticos/ex1.js';
import { media } from './operadores_aritimeticos/ex2.js';
import { restoDivisao } from './operadores_aritimeticos/ex3.js';
import { potenciacao } from './operadores_aritimeticos/ex4.js';
import { conversorTemperatura } from './operadores_aritimeticos/ex5.js';
import { areaQuadrado } from './operadores_aritimeticos/ex6.js';
import { salarioTotal } from './operadores_aritimeticos/ex7.js';


app.get('/ex1aritimeticos', (req, res) => {
   let resultado = calculadora()
   res.send(resultado)
});

app.get('/ex2aritimeticos', (req, res) => {
   let resultado = media()
   res.send(resultado)
});

app.get('/ex3aritimeticos', (req, res) => {
   let resultado = restoDivisao()
   res.send(resultado)
});

app.get('/ex4aritimeticos', (req, res) => {
   let resultado = potenciacao()
   res.send(resultado)
});

app.get('/ex5aritimeticos', (req, res) => {
   let resultado = conversorTemperatura()
   res.send(resultado)
});

app.get('/ex6aritimeticos', (req, res) => {
   let resultado = areaQuadrado()
   res.send(resultado)
});

app.get('/ex7aritimeticos', (req, res) => {
   let resultado = salarioTotal()
   res.send(resultado)
});




app.listen(3000, () => {
   console.log('rodando no servidor http://localhost:3000')
})