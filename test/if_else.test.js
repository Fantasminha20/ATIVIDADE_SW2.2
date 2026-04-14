import { resultadoIfElse } from "../if_else/ex1";
import { idade_nadador1 } from "../if_else/ex2";
import { turno1 } from "../if_else/ex3";
import { extersao } from "../if_else/ex4";



test("testar a função de positivo e negativo",()=>{
    
 let resultado = resultadoIfElse(5)
 expect(resultado.toLowerCase()).toBe('seu numero é positivo'.toLowerCase());




})


test("Leia a idade de um nadador e exiba sua categoria",()=>{

  let resultado = idade_nadador1(9)
  expect(resultado).toBe(`sua idade é : 9 então você é infatil`);


})


test("Conversor de Turno: Receba uma letra M,V ou N",()=>{

  let resultado = turno1 ('m')
expect(resultado.toLowerCase()).toBe('bom dia'.toLowerCase());

})

test("Crie um programa para verificar se uma cidade é grnade ou pequena.",()=>{

  let resultado = extersao (1000)
expect(resultado.toLowerCase()).toBe('São Paulo é uma cidade pequena'.toLowerCase());

})

