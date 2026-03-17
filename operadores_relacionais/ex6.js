// 6-  desconto : se a compra for mais de 100 reais entao 10% de desconto

export function desconto() {
    let valorCompra = 200

    if (valorCompra >= 100) {
        return `seu desconto é ${valorCompra * 0.10}`
    }
};