import { alunos } from "../json/ex1";

 
 
 
 
 
test("testar a idade do aluno1", () => {
  const resultado = alunos();
  const aluno1 = resultado[0].aluno1;  // Acessando o aluno1 no primeiro (e único) objeto do array
  expect(aluno1.idade).toBe(17);  // Verificando a idade
});