import { carteiraMotorista } from '../operadores_relacionais/ex1.js';
import { administracao } from '../operadores_relacionais/ex2.js';
import { notaAluno } from '../operadores_relacionais/ex3.js';
import { acessoSite } from '../operadores_relacionais/ex4.js';
import { numeroPositivoNegativo } from '../operadores_relacionais/ex5.js';
import { desconto } from '../operadores_relacionais/ex6.js';


test("Testar o exercício 1", () => {
    // expectativa de retorno 15
    let resultado = carteiraMotorista(19)
    expect(resultado).toBe("pode tirar")
})


test("Testar o exercício 2", () => {
    // expectativa de retorno 15
    let resultado = administracao('admin','1234')
    expect(resultado).toBe("senha válida")
})



test("Testar o exercício 3", () => {
    // expectativa de retorno 15
    let resultado = notaAluno(10)
    expect(resultado).toBe('aprovado')
})


test("Testar o exercício 4", () => {
    // expectativa de retorno 15
    let resultado = acessoSite(51)
    expect(resultado).toBe("acesso válido")
})


test("Testar o exercício 5", () => {
    // expectativa de retorno 15
    let resultado = numeroPositivoNegativo(5)
    expect(resultado).toBe("seu numero é positivo")
})


test("Testar o exercício 6", () => {
    // expectativa de retorno 15
    let resultado = desconto(500)
    expect(resultado).toBe(`seu desconto é 50`)
})