// 2-Soma de Dois Vetores: Crie dois vetores (a e b) de 10 elementos. Gere um terceiro vetor (c) onde cada posição é a soma dos elementos correspondentes de a e b.

export function criacaoVetor() {
    let a = [1, 2, 3, 4, 5]

    let b = [10, 9, 8, 7, 6]


    let c = [a[0] + b[0], a[1] + b[1], a[2] + b[2], a[3] + b[3], a[4] + b[4]]

    return c

};