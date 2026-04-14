import { somaNumeros } from "../vetor/ex1.js";
import { criacaoVetor } from "../vetor/ex2.js";



test("testar a Soma de Elementos", () => {
  const resultado = somaNumeros([1,3,5]);
  expect(resultado).toBe(150);
});



test("testar a Soma de Dois Vetores", () => {
  const resultado = criacaoVetor();
  expect(resultado).toEqual([11, 11, 11, 11, 11]);  
});

