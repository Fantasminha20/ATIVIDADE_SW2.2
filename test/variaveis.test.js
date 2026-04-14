import { compra } from "../variaveis/ex1.js";
import { conversao } from "../variaveis/ex2.js";
import { areaRetangulo } from "../variaveis/ex3.js";



test("Testar o exercício 1", ()=>{
    // expectativa de retorno 15
    let resultado = compra(100, 5)
    expect(resultado).toBe(60)
} )

test("Testar o exercício 2", ()=>{
    // expectativa de retorno 15
    let resultado = conversao(30, 75)
    expect(resultado).toBe(167)
} )

test("Testar o exercício 3", ()=>{
    // expectativa de retorno 15
    let resultado = areaRetangulo(30,2)
    expect(resultado).toBe(50)
} )