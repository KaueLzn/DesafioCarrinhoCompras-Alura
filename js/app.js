function adicionar() {
    let qtd = document.getElementById('quantidade').value;
    let produtoSelecionado = document.getElementById('produto').value;
    let nomeProduto = iterarNome(produtoSelecionado);
    let precoProduto = iterarPreco(produtoSelecionado);

    if (qtd == 0) {
        qtd = 1;
    }

    let listaProdutos = document.getElementById('lista-produtos');
    let produto = listaProdutos.querySelector('.carrinho__produtos__produto');

    produto.innerHTML = produto.innerHTML + 
    `<section class = "carrinho__produtos__produto"><span class="texto-azul">${qtd}x</span> ${nomeProduto} <span class="texto-azul">R$${precoProduto}</span></section>`;
    console.log(produto)


    let valorTotal = document.getElementById('valor-total').innerHTML;
    let valorIteradoTotal = iterarPreco(valorTotal);
 
    let calculoTotal = (qtd*precoProduto) + valorIteradoTotal;

    let total = document.getElementById('valor-total');
    total.innerHTML = `<span class="texto-azul" id="valor-total">R$${calculoTotal}</span>`
}

function limpar() {
    let listaProdutos = document.getElementById('lista-produtos');
    let produto = listaProdutos.querySelector('.carrinho__produtos__produto');
    produto.innerHTML = '';

    let total = document.getElementById('valor-total');
    total.innerHTML = `<span class="texto-azul" id="valor-total">R$ 0</span>`

}


function iterarPreco(preco) {

    let precoIterado = '';

    for (i = 0; i < preco.length; i++) {
        for (j = 0; j < 10; j++) {
            if (preco[i] == j) {
                precoIterado = precoIterado + preco[i];
            }
        }
    }


   return parseInt(precoIterado);
}

function iterarNome(nome){

    let apenasNome = ''

    for (let i = 0; i < nome.length; i++) {
        if (nome[i] == '-') {
        break;
        }
        else {
        apenasNome += nome[i];
        }
    }

    return apenasNome;

}
