// 1-Validação de Login
//Crie uma expressão que retorne sucesso apenas se:
//O usuario for igual a "admin" E a senha for igual a "1234".


export function validacaoLogin(usuario, senha) {


  if (usuario == 'admin' & senha == '1234') {
    return 'sucesso'
  }
  else {
    return "erro"
  }
};
