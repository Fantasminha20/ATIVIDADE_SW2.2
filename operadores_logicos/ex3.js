// 3 Classificação de Triângulos Um triângulo é Equilátero se: ladoA == ladoB E ladoB == ladoC.Um triângulo é Isósceles se: Pelo menos dois lados forem iguais:


export function classificacaoTriangulo(l1,l2,l3) {
 

  if (l1 == l2 & l2 == l3) {
    return "triângulo equilátero "
  }

  if (l1 == l2 || l1 == l3 || l2 == l3) {
    return 'triângulo isósceles'
  }
};