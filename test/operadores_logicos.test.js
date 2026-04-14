import { validacaoLogin } from "../operadores_logicos/ex1.js";
import { sistemaBonus } from "../operadores_logicos/ex2.js";
import { classificacaoTriangulo } from "../operadores_logicos/ex3.js";



test("Testar o exercício Validação de Login", () => {
    let resultado = validacaoLogin("admin","1234")
    expect(resultado).toBe("sucesso")
})


test("Testar o exercício Sistema de Bônus", () => {
    let resultado = sistemaBonus(2,900,"funcionario do mes")
    expect(resultado).toBe("voce ganhou o bônus")
})

test("Testar o exercício Classificação de Triângulos Um triângulo é Equilátero se: ladoA == ladoB E ladoB == ladoC.Um triângulo é Isósceles se: Pelo menos dois lados forem iguais", () => {
    let resultado = classificacaoTriangulo(4)
    expect(resultado).toBe('triângulo isósceles')
})


