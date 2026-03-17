// 1- carteita de motorista : se a idade for menor que 18 = reprovado

export function carteiraMotorista() {
  let idade = 12
  if (idade >= 18) {
    return "pode tirar"
  } if (idade <= 18) {
    return 'não pode tirar'
  }
};