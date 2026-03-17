// Extração de Propriedades: Você tem uma lista de usuários: [{nome: "Ana", idade: 25}, {nome: "Beto", idade: 30}]. Use o map para retornar um novo array contendo apenas os nomes



export function nomes() {
  let usuarios = [{

    nome: "Daniel",
    idade: 17,
    sexo: "masculino"
  },
  {
    nome: "Yago",
    idade: 17,
    sexo: "masculino"
  },
  {
    nome: "Ana",
    idade: 15,
    sexo: "feminino"
  }


  ]

  const nomes = usuarios.map(function (usuario) {
    return usuario.nome
  })

  return nomes
};
