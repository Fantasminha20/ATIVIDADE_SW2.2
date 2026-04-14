 import { exe_case } from "../case/ex1";
import { router_case } from "../router/case";


 test("testar a função de Dias da Semana ",()=>{
     
  let resultado = exe_case (1)
  expect(resultado.toLowerCase()).toBe('domingo'.toLowerCase());
 
 
 
 
 })