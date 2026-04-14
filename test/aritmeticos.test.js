import { calculadora } from '../operadores_aritimeticos/ex1.js';
import { media } from '../operadores_aritimeticos/ex2.js';
import { restoDivisao } from '../operadores_aritimeticos/ex3.js';
import { potenciacao } from '../operadores_aritimeticos/ex4.js';
import { conversorTemperatura } from '../operadores_aritimeticos/ex5.js';
import { areaQuadrado } from '../operadores_aritimeticos/ex6.js';
import { salarioTotal } from '../operadores_aritimeticos/ex7.js';



test("Testar o exercício 1", () => {
    let resultado = calculadora(2, 2)
    expect(resultado).toBe(`{"divisao": 1, "multiplicacao": 4, "resto": 0, "soma": 4, "subtracao": 0}`)
})

test("Testar o exercício 1", () => {
    // Espera-se um objeto com as operações realizadas
    let resultado = calculadora(2, 2)
    expect(resultado).toEqual({
        divisao: 1,
        multiplicacao: 4,
        resto: 0,
        soma: 4,
        subtracao: 0
    })
})


test("Testar o exercício 3", () => {
    // expectativa de retorno 15
    let resultado = restoDivisao(10, 10,10)
    expect(resultado).toBe(2)
})


test("Testar o exercício 4", () => {
    // expectativa de retorno 15
    let resultado = potenciacao(100, 5)
    expect(resultado).toBe(1024)
})

test("Testar o exercício 5", () => {
    // expectativa de retorno 15
    let resultado = conversorTemperatura(100, 5)
    expect(resultado).toBe(82.4)
})

test("Testar o exercício 6", () => {
    // expectativa de retorno 15
    let resultado = areaQuadrado(100, 5)
    expect(resultado).toBe(100)
})

test("Testar o exercício 7", () => {
    // expectativa de retorno 15
    let resultado = salarioTotal(100, 5)
    expect(resultado).toBe(5625)
})