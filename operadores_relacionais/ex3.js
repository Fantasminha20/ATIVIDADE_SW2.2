// 3- nota : se nota for menor que 5 entao o aluno está reprovado


export function notaAluno() {
    let nota = 7

    if (nota > 5) {
        return "aprovado"
    }
    else {
        return 'reprovado'
    }
};