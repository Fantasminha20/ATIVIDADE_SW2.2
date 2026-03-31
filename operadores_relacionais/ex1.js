// 1- carteita de motorista : se a idade for menor que 18 = reprovado

export function carteiraMotorista(idade) {
  if (idade >= 18) {
    return "pode tirar"
  } if (idade <= 18) {
    return 'não pode tirar'
  }
};