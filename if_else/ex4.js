//4. Crie um programa para verificar se uma cidade é grnade ou pequena. 
// Considere que cidades com mais de 100.000 habitantes são grandes, e as demais são pequenas. 
// if composto
//const Sao_Paulo = 12300000;

export function extersao(Sao_Paulo) {

  if (Sao_Paulo > 100000) {
    return ("São Paulo é uma cidade grande")
  } else {
    return ("São Paulo é uma cidade pequena")
  }

};