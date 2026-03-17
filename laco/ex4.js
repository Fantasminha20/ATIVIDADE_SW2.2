// foreach - Exercício: Crie um array de nomes (ex: ["Alice", "Bruno", "Carla"]) e use o forEach para imprimir cada nome no console com uma saudação: "Olá, [nome]!".


export function pessoas() {
    let nomes = ["Daniel", "André", "Nicolas", "Leonardo"]

    nomes.forEach(i => {
    })

    return nomes.map(i => "Olá, " + i + "!")

};