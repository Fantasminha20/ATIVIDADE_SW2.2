// 1-Calculadora Básica: Crie duas variáveis, a = 10 e b = 5. Mostre no console a soma, subtração, multiplicação, divisão e o resto da divisão entre elas

export function calculadora(q) {
    let a = 10

    let b = 5

    let soma = a + b

    let subtracao = a - b

    let multiplicacao = a * b

    let divisao = a / b

    let resto = a % b

    return { multiplicacao, divisao, soma, subtracao, resto }
};

