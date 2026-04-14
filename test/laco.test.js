import { somaPares } from "../laco/ex1";
import { numero } from "../laco/ex2";
import { exercio3 } from "../laco/ex3";
import { pessoas } from "../laco/ex4";
import { nomes } from "../laco/ex5";




test("testar a idade do aluno1", () => {
  const resultado = somaPares(5,5);
  
  expect(resultado).toBe("A soma dos numeros pares entre 1 e 20 é: 109");  // Verificando a idade
});


test("testar um programa que repita números de 1 a 30", () => {
    const resultado = numero();

    expect(resultado).toEqual([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30
    ]);
});

test("testar a  um programa que repita um numero de 1 a 50", () => {
 const resultado = exercio3();

    expect(resultado).toEqual([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50
    ]);
})


test("testar saudação", () => {
    let resultado = pessoas(["Daniel", "André", "Nicolas", "Leonardo"])
   
    expect(resultado).toEqual(["Olá, Daniel!", "Olá, André!", "Olá, Nicolas!", "Olá, Leonardo!"])

})



test("deve retornar apenas os nomes dos usuários", () => {
  const resultado = nomes();

  expect(resultado).toEqual(["Daniel", "Yago", "Ana"]);
});