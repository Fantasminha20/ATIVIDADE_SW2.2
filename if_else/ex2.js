//2-Classificação de Nadador: Leia a idade de um nadador e exiba sua categoria: Mirim (menor que 9), Infantil (9 a 13), Juvenil (14 a 17) ou Adulto (18+).


// let idade_nadador = 15
export function idade_nadador1(idade_nadador) {


  if (idade_nadador < 9) {
    return (`sua idade é : ${idade_nadador} então você é mirim`)

  }

  if (idade_nadador >= 9 & idade_nadador < 13) {
    return (`sua idade é : ${idade_nadador} então você é infatil`)

  }


  if (idade_nadador >= 14 & idade_nadador < 17) {
    return (`sua idade é : ${idade_nadador} então você é juvenil`)

  }

  if (idade_nadador > 18) {
    return (`sua idade é : ${idade_nadador} então você é adulto`)

  }
};


