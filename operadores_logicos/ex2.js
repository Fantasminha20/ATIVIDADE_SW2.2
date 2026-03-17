// 2 -  Sistema de Bônus
//Escreva a lógica para decidir se um funcionário recebe um bônus. As condições são:
//O funcionário deve ter mais de 2 anos de casa AND ter vendido mais de R$ 50.000,00.
//OU, se ele for o "Funcionário do Mês", ele ganha o bônus independente do tempo ou vendas.

export function sistemaBonus() {
  let funcionario = [{

    tempo_empresa: 1,
    vendas: 700,
    status: 'funcionario do mes'
  }
  ]


  if (funcionario[0].tempo_empresa > 2 & funcionario[0].vendas >= 50000 || funcionario[0].status == 'funcionario do mes') {
    return 'voce ganhou o bônus'
  }
  else {
    return 'você não tem direito ao bônus '
  }
};
