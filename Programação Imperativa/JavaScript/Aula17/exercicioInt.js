let estoque = [
    { produto: 'Maçã', preco: 5, qtdVendida: 50 },
    { produto: 'Banana', preco: 3, qtdVendida: 150 },
    { produto: 'Laranja', preco: 2, qtdVendida: 80 },
    { produto: 'Abacaxi', preco: 8, qtdVendida: 40 }
];


let lucroTotal = () => {
    let getTotal = (total, item) => {
        return total + (item.preco * item.qtdVendida);
    };
    let lucroTotal = estoque.reduce(getTotal, 0);
    console.log(`O lucro total de todos os produtos é R$${lucroTotal}`);
};
lucroTotal();


let lucroProduto = item => {
    let produto = estoque.filter(nome => nome.produto === item);
    let getTotal = (total, item) => {
        return total + (item.preco * item.qtdVendida);
    };
    let totalProduto = produto.reduce(getTotal, 0);
    console.log(`O lucro total de ${item} é R$${totalProduto}`);
}
lucroProduto('Banana');


let produtoVendido = valor => {
    estoque.map(e => {
        if (e.preco * e.qtdVendida > valor)
            console.log(`Produto vendido acima de R$${valor}: ${e.produto}`);
    });
};
produtoVendido(200);


let maiorLucro = () => {
    estoque.sort(function (a, b) {
        if (a.preco * a.qtdVendida < b.preco * b.qtdVendida) {
            return 1;
        };
        if (a.preco * a.qtdVendida > b.preco * b.qtdVendida) {
            return -1;
        };
    });
    console.log(estoque);
}
maiorLucro();

let novoPreco = (item, valor) => {
    let produto = estoque.filter((nome) => {
        if (nome.produto === item) {
            nome.preco = valor;
        };
        return nome.produto === item;
    }
    );
    console.log(produto);
};
novoPreco('Abacaxi', 10);


let lucroTotalImposto = () => {
    let getTotal = (total, item) => {
        return total + (item.preco * item.qtdVendida);
    };
    let lucroTotal = estoque.reduce(getTotal, 0);
    let lucroTotalImposto = lucroTotal - lucroTotal * (45 / 100);
    console.log(` lucro de todos os produtos após pagar 45% de imposto é R$${lucroTotalImposto}`);
};
lucroTotalImposto();