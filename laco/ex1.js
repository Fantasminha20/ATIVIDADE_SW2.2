//1. Crie um programa que calcule a soma de números pares entre 1 e 20.

export function somaPares() {
    let soma = 0;
    let numero = 1;

    while (numero <= 20) {
        if (numero % 2 === 0) {
            soma += numero;
        }
        numero++;
    }

    return "A soma dos numeros pares entre 1 e 20 é: " + soma;
};