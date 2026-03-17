//7 - Um funcionário ganha R$ 50,00 por hora. Se ele trabalhar mais de 40 horas semanais, as horas excedentes ganham um adicional de 50%.
//Exercício: Se ele trabalhou 45 horas, qual o salário total da semana?

export function salarioTotal() {
    let ganho_porHora = 50


    let adicional = 0.50 * 5


    let total = (50 * 45) * adicional

    return total
};