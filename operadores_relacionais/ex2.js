// 2- login se usuario não for = admin e senha nao for = 1234 entao digite senha incorreta

export function administracao() {
    let usuario = 'admin'

    let senha = '1234'

    if (usuario == 'admin' & senha == '1234') {
        return 'senha válida'
    }
    else {
        return 'senha inválida'
    }
};