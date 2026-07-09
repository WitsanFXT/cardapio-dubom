const produtos = [

    // =========================
    // JANTINHAS
    // =========================

    {
        id: 1,
        nome: 'Jantinha Completa G',
        descricao: 'Arroz, feijão tropeiro, vinagrete, mandioca e espetinho de sua preferência 500g-600g .',
        preco: 25.00,
        categoria: 'jantinha',
        imagem: './img/produtos/jantinha-com-churrasco.jpg',
        precisaEscolherEspetinho: true,
        exigeEspetinho: true
    },

    {
        id: 2,
        nome: 'Jantinha Completa P',
        descricao: 'Arroz, feijão tropeiro, vinagrete, mandioca e espetinho de sua preferência 200g-300g .',
        preco: 22.00,
        categoria: 'jantinha',
        imagem: './img/produtos/jantinha-com-churrasco.jpg',
        precisaEscolherEspetinho: true,
        exigeEspetinho: true
    },

    // =========================
    // LANCHES
    // =========================

    {
        id: 8,
        nome: 'Pão De Costela Desfiada',
        descricao: 'Pão Francês, costela desfiada, molho de alho, vinagrete e mussarela.',
        preco: 20.00,
        categoria: 'lanche',
        imagem: './img/produtos/pao-costela.jpg'
    },

    {
        id: 9,
        nome: 'Pão com Churrasco',
        descricao: 'Pão Francês, molho de alho, vinagrete, mussarela e churrasco da sua preferência. ',
        preco: 22.00,
        categoria: 'lanche',
        imagem: './img/produtos/pao-churrasco.jpg',
        precisaEscolherEspetinho: true,
        exigeEspetinho: true
    },

    // =========================
    // ESPETINHOS
    // =========================

    {
        id: 10,
        nome: 'Espetinho Barrigada',
        descricao: 'Espetinho de barrigada.',
        preco: 14.00,
        categoria: 'espetinho',
        imagem: './img/produtos/barrigada.jpg'
    },

    {
        id: 11,
        nome: 'Espetinho Contra Filé',
        descricao: 'Espetinho de contra filé.',
        preco: 14.00,
        categoria: 'espetinho',
        imagem: './img/produtos/contra-file.jpg'
    },

    {
        id: 12,
        nome: 'Espetinho Frango com Bacon',
        descricao: 'Espetinho de frango com bacon.',
        preco: 14.00,
        categoria: 'espetinho',
        imagem: './img/produtos/frango-bacon.jpg'
    },

    {
        id: 13,
        nome: 'Espetinho Linguiça Mista',
        descricao: 'Espetinho de linguiça mista.',
        preco: 14.00,
        categoria: 'espetinho',
        imagem: './img/produtos/linguica-mista.jpg'
    },

    {
        id: 14,
        nome: 'Espetinho Tulipa',
        descricao: 'Espetinho de tulipa de frango.',
        preco: 14.00,
        categoria: 'espetinho',
        imagem: './img/produtos/tulipa.jpg'
    },

    {
        id: 23,
        nome: 'Espetinho Cupim',
        descricao: 'Espetinho de Cupim.',
        preco: 14.00,
        categoria: 'espetinho',
        imagem: './img/produtos/cupim.jpg'
    },

    {
        id: 24,
        nome: 'Espetinho Coração',
        descricao: 'Espetinho de Coração de frango.',
        preco: 14.00,
        categoria: 'espetinho',
        imagem: './img/produtos/coracao.jpg'
    },

    {
        id: 25,
        nome: 'Espetinho Linguiça com Pimenta',
        descricao: 'Espetinho de Linguiça com Pimenta.',
        preco: 14.00,
        categoria: 'espetinho',
        imagem: './img/produtos/linguica_pimenta.jpg'
    },

    {
        id: 26,
        nome: 'Pão de Alho',
        descricao: 'Pão de Alho.',
        preco: 9.00,
        categoria: 'espetinho',
        imagem: './img/produtos/pao.jpg'
    },

    {
        id: 27,
        nome: 'Queijo Coalho',
        descricao: 'Queijo Coalho.',
        preco: 14.00,
        categoria: 'espetinho',
        imagem: './img/produtos/queijo.jpg'
    },


    // =========================
    // PORÇÕES
    // =========================

    {
        id: 4,
        nome: 'Porção de Arroz',
        descricao: 'Porção individual de arroz.',
        preco: 15.00,
        categoria: 'porcao',
        imagem: './img/produtos/arroz.jpg'
    },

    {
        id: 5,
        nome: 'Porção de Feijão Tropeiro P',
        descricao: 'Porção de feijão tropeiro.',
        preco: 18.00,
        categoria: 'porcao',
        imagem: './img/produtos/tropeiroP.jpg'
    },

    {
        id: 28,
        nome: 'Porção de Feijão Tropeiro G',
        descricao: 'Porção de feijão tropeiro.',
        preco: 20.00,
        categoria: 'porcao',
        imagem: './img/produtos/tropeiroG.jpg'
    },

    {
        id: 29,
        nome: 'Porção de Feijão Tropeiro P + Espetinho',
        descricao: 'Porção de feijão tropeiro + Espetinho de sua preferência.',
        preco: 22.00,
        categoria: 'porcao',
        imagem: './img/produtos/tropeiroE.jpg',
        precisaEscolherEspetinho: true,
        exigeEspetinho: true
    },

    {
        id: 88,
        nome: 'Porção de Feijão Tropeiro G + Espetinho',
        descricao: 'Porção de feijão tropeiro + Espetinho de sua preferência.',
        preco: 25.00,
        categoria: 'porcao',
        imagem: './img/produtos/tropeiroE.jpg',
        precisaEscolherEspetinho: true,
        exigeEspetinho: true
    },

    {
        id: 6,
        nome: 'Porção de Mandioca',
        descricao: 'Porção de mandioca cozida.',
        preco: 3.00,
        categoria: 'porcao',
        imagem: './img/produtos/mandioca.jpg'
    },

    {
        id: 7,
        nome: 'Porção de Vinagrete',
        descricao: 'Porção de vinagrete fresco.',
        preco: 3.00,
        categoria: 'porcao',
        imagem: './img/produtos/vinagrete.jpg'
    },

    // =========================
    // BEBIDAS
    // =========================

    {
        id: 15,
        nome: 'Guaraná Zero Antarctica 350ml',
        descricao: 'Lata gelada.',
        preco: 5.00,
        categoria: 'bebida',
        imagem: './img/produtos/guarana-zero.jpg'
    },

    {
        id: 16,
        nome: 'Coca-Cola Zero 350ml',
        descricao: 'Lata 350ml.',
        preco: 5.00,
        categoria: 'bebida',
        imagem: './img/produtos/coca-zero.jpg'
    },

    {
        id: 17,
        nome: 'Guaraná Antarctica 350ml',
        descricao: 'Lata 350ml.',
        preco: 5.00,
        categoria: 'bebida',
        imagem: './img/produtos/guarana-antartica.jpg'
    },

    {
        id: 18,
        nome: 'Guaraná Mineiro 350ml',
        descricao: 'Lata 350ml.',
        preco: 5.00,
        categoria: 'bebida',
        imagem: './img/produtos/guarana-mineiro.jpg'
    },

    {
        id: 30,
        nome: 'Guaraná Mineiro Zero 350ml',
        descricao: 'Lata 350ml.',
        preco: 5.00,
        categoria: 'bebida',
        imagem: './img/produtos/guarana-mineiro-zero.jpg'
    },

    {
        id: 19,
        nome: 'Coca-Cola 350ml',
        descricao: 'Lata 350ml.',
        preco: 5.00,
        categoria: 'bebida',
        imagem: './img/produtos/coca-cola.jpg'
    },

    {
        id: 22,
        nome: 'Sprite 350ml',
        descricao: 'Lata 350ml.',
        preco: 5.00,
        categoria: 'bebida',
        imagem: './img/produtos/sprite.jpg'
    },

    {
        id: 20,
        nome: 'Guaraná Mineiro 1,5L',
        descricao: 'Garrafa 1,5 litros.',
        preco: 8.00,
        categoria: 'bebida',
        imagem: './img/produtos/guarana-mineiro-15.jpg'
    },

    {
        id: 89,
        nome: 'Coca-Cola 1,5L',
        descricao: 'Coca-Cola 1,5 litros.',
        preco: 10.00,
        categoria: 'bebida',
        imagem: './img/produtos/coca-cola-15.jpg'
    },

    {
        id: 90,
        nome: 'Coca-Cola Zero 1,5L',
        descricao: 'Coca-Cola Zero 1,5 litros.',
        preco: 10.00,
        categoria: 'bebida',
        imagem: './img/produtos/coca-cola-zero-15.jpg'
    },


    {
        id: 21,
        nome: 'H2O Limoneto 500ml',
        descricao: 'Garrafa 500ml.',
        preco: 7.00,
        categoria: 'bebida',
        imagem: './img/produtos/h2o.jpg'
    }

];

const opcoesEspetinho = [
    'Barrigada',
    'Contra Filé',
    'Frango com Bacon',
    'Linguiça Mista',
    'Tulipa',
    'Cupim',
    'Coração',
    'Linguiça com Pimenta'
];

const sugestoesUpsell = {
    1: [19, 26, 27],
    2: [19, 26, 27],

    8: [19, 26, 10],
    9: [19, 26, 27],

    10: [26, 27, 11],
    11: [26, 27, 10],
    12: [26, 27, 24],
    13: [26, 27, 25],
    14: [26, 27, 11],
    23: [26, 27, 11],
    24: [26, 27, 12],
    25: [26, 27, 13],

    4: [11, 19, 26],
    5: [11, 19, 26],
    28: [11, 19, 26],

    29: [19, 26, 27],
    88: [19, 26, 27],

    6: [10, 11, 19],
    7: [10, 11, 19],

    15: [26, 27, 10],
    16: [26, 27, 11],
    17: [26, 27, 10],
    18: [26, 27, 11],
    19: [26, 27, 11],
    20: [26, 27, 1],
    21: [26, 27, 10],
    22: [26, 27, 11],
    30: [26, 27, 11],
    89: [26, 27, 1],
    90: [26, 27, 1]
};

const maisPedidos = [
    1, // Contra Filé
    8, // Tulipa
    11,  // Jantinha G
    12,  // Jantinha P
    19  // Pão de Alho
];

function renderizarMaisPedidos(){

    const container =
        document.getElementById('listaMaisPedidos');

    container.innerHTML = '';

    maisPedidos.forEach(id => {

        const produto =
            produtos.find(p => p.id === id);

        container.innerHTML += `
            <div class="produto-card">

                <img
                    src="${produto.imagem}"
                    alt="${produto.nome}"
                >

                <h3>${produto.nome}</h3>

                <span class="preco">
                    R$ ${produto.preco.toFixed(2)}
                </span>

                <button
                    onclick="abrirModal(${produto.id})"
                    class="btn-adicionar">

                    Adicionar

                </button>

            </div>
        `;
    });

}


let carrinho = [];
let produtoSelecionado = null;
let tipoEntrega = "Entrega";

/* ===================================
   BAIRROS + ENTREGA
=================================== */

const bairros = [
{ nome: 'Água Branca I', valor: 10.00 },
{ nome: 'Água Branca II', valor: 9.00 },
{ nome: 'Águas Claras', valor: 8.00 },
{ nome: 'Alvorada', valor: 10.00 },
{ nome: 'Amaral', valor: 9.00 },
{ nome: 'Barroca', valor: 8.00 },
{ nome: 'Bela Serra', valor: 15.00 },
{ nome: 'Bela Vista', valor: 8.00 },
{ nome: 'Cachoeira', valor: 8.00 },
{ nome: 'Canabrava', valor: 8.00 },
{ nome: 'Canaã', valor: 8.00 },
{ nome: 'Capim Branco', valor: 8.00 },
{ nome: 'Capim Branco II', valor: 8.00 },
{ nome: 'Capim Branco III', valor: 8.00 },
{ nome: 'Centro', valor: 8.00 },
{ nome: 'Chácaras Colina', valor: 25.00 },
{ nome: 'Chácaras Monjolos', valor: 15.00 },
{ nome: 'Chácaras Rio Preto', valor: 15.00 },
{ nome: 'Cidade Nova', valor: 8.00 },
{ nome: 'Cruzeiro', valor: 8.00 },
{ nome: 'Curva do Rio', valor: 15.00 },
{ nome: 'De Lourdes', valor: 8.00 },
{ nome: 'Divinéia', valor: 8.00 },
{ nome: 'Dom Bosco', valor: 8.00 },
{ nome: 'Floresta', valor: 8.00 },
{ nome: 'Industrial', valor: 15.00 },
{ nome: 'Itapuã', valor: 8.00 },
{ nome: 'Iúna', valor: 8.00 },
{ nome: 'Jacilândia', valor: 8.00 },
{ nome: 'Jardim', valor: 8.00 },
{ nome: 'Jardim Amaral', valor: 10.00 },
{ nome: 'Jardim América', valor: 8.00 },
{ nome: 'Kamayurã', valor: 10.00 },
{ nome: 'Laguna', valor: 10.00 },
{ nome: 'Loteamento Zé Pedro', valor: 8.00 },
{ nome: 'Mamoeiro', valor: 20.00 },
{ nome: 'Nossa Senhora Aparecida', valor: 8.00 },
{ nome: 'Nossa Senhora do Carmo', valor: 8.00 },
{ nome: 'Nova Divinéia', valor: 8.00 },
{ nome: 'Novo Horizonte', valor: 8.00 },
{ nome: 'Novo Jardim', valor: 8.00 },
{ nome: 'Parque Canabrava', valor: 8.00 },
{ nome: 'Politécnica', valor: 8.00 },
{ nome: 'Posto HP', valor: 20.00 },
{ nome: 'Primavera', valor: 8.00 },
{ nome: 'Primavera V', valor: 8.00 },
{ nome: 'Riviera Park', valor: 12.00 },
{ nome: 'Sagrada Família', valor: 10.00 },
{ nome: 'Sagarana', valor: 8.00 },
{ nome: 'Santa Clara', valor: 20.00 },
{ nome: 'Santa Luzia', valor: 8.00 },
{ nome: 'Serenata', valor: 8.00 },
{ nome: 'Setor de Mansões Sul', valor: 20.00 },
{ nome: 'Terra Nova', valor: 9.00 },
{ nome: 'Vale do Amanhecer', valor: 12.00 },
{ nome: 'Vale Verde', valor: 8.00 },
{ nome: 'Vila do Sol', valor: 10.00 },
{ nome: 'Vila Militar', valor: 8.00 },
{ nome: 'Vila São Sebastião', valor: 8.00 }
];

let taxaEntrega = 0;
let bairroSelecionado = "";

let quantidadeAtual = 1;


/* ===================================
   RENDERIZAR PRODUTOS
=================================== */

function atualizarStatusLoja(){

    const status =
        document.getElementById('statusLoja');

    const agora = new Date();

    const dia = agora.getDay();
    const hora = agora.getHours();
    const minuto = agora.getMinutes();

    const horarioAtual =
        hora * 60 + minuto;

    const abre = 18 * 60;
    const fecha = 22 * 60 + 40;

    const abertoHoje =
        dia >= 0 && dia <= 5;

    const abertoAgora =
        abertoHoje &&
        horarioAtual >= abre &&
        horarioAtual <= fecha;

    if(abertoAgora){

        status.className =
            'status-loja aberto';

        status.innerHTML =
            '🟢 Aberto agora • Até 22:40';

    }else{

        status.className =
            'status-loja fechado';

        status.innerHTML =
            '🔴 Fechado • Atendimento das 18h às 22h40';

    }

}

function renderizarProdutos(lista) {

    const categorias = {
        jantinha: document.getElementById('listaJantinhas'),
        lanche: document.getElementById('listaLanches'),
        espetinho: document.getElementById('listaEspetinhos'),
        porcao: document.getElementById('listaPorcoes'),
        bebida: document.getElementById('listaBebidas')
    };

    Object.values(categorias).forEach(c => {
        if (c) c.innerHTML = '';
    });

    lista.forEach(produto => {

        const card = `
            <div class="produto-card">

                <img src="${produto.imagem}" alt="${produto.nome}">

                <h3>${produto.nome}</h3>

                <p>${produto.descricao}</p>

                <span class="preco">
                    R$ ${produto.preco.toFixed(2)}
                </span>

                <button onclick="abrirModal(${produto.id})" class="btn-adicionar">
                    Adicionar
                </button>

            </div>
        `;

        const cat = produto.categoria;

        if (categorias[cat]) {
            categorias[cat].innerHTML += card;
        }
    });
}

/* ===================================
   TIPO DE ENTREGA OU RETIRADA
=================================== */

document.getElementById('tipoEntrega').addEventListener('change', (e) => {
    tipoEntrega = e.target.value;

    const bairroSelect = document.getElementById('bairroCliente');

    if (tipoEntrega === "Retirada") {
        bairroSelect.disabled = true;
        taxaEntrega = 0;
        bairroSelecionado = "Retirada na loja";
    } else {
        bairroSelect.disabled = false;
    }

    atualizarCarrinho();
});

/* ===================================
   MODAL
=================================== */

function abrirModal(id) {

    produtoSelecionado = produtos.find(p => p.id === id);

    quantidadeAtual = 1;

    document.getElementById('produtoNome').textContent =
        produtoSelecionado.nome;

    document.getElementById('produtoPreco').textContent =
        `R$ ${produtoSelecionado.preco.toFixed(2)}`;

    document.getElementById('quantidadeInput').value = 1;

    const campoEspetinho =
    document.getElementById('campoEspetinho');

const selectEspetinho =
    document.getElementById('selectEspetinho');

selectEspetinho.innerHTML =
    '<option value="">Selecione</option>';

if (produtoSelecionado.precisaEscolherEspetinho) {

    campoEspetinho.style.display = 'block';

    opcoesEspetinho.forEach(espetinho => {

        selectEspetinho.innerHTML += `
            <option value="${espetinho}">
                ${espetinho}
            </option>
        `;

    });

} else {

    campoEspetinho.style.display = 'none';

}

    document.getElementById('observacao').value = '';

    atualizarSubtotalModal();

    document.getElementById('modalProduto')
        .classList.add('ativo');
}

window.abrirModal = abrirModal;

function fecharModal() {
    document.getElementById('modalProduto').classList.remove('ativo');
    document.body.classList.remove('sem-scroll');
}

document.getElementById('fecharModal').addEventListener('click', fecharModal);

document.getElementById('modalProduto').addEventListener('click', (e) => {
    if (e.target.id === 'modalProduto') fecharModal();
});

function atualizarSubtotalModal() {

    if (!produtoSelecionado) return;

    const quantidade = Number(
        document.getElementById('quantidadeInput').value
    );

    const subtotal =
        produtoSelecionado.preco * quantidade;

    document.getElementById('subtotalModal').textContent =
        `Total: R$ ${subtotal.toFixed(2)}`;
}
document
.getElementById('quantidadeInput')
.addEventListener('input', () => {

    atualizarSubtotalModal();

});

function abrirUpsell(produtoId){

    const ids = sugestoesUpsell[produtoId];

    if(!ids) return;

    const lista =
        document.getElementById('listaUpsell');

    lista.innerHTML = '';

    ids.forEach(id => {

        const produto =
            produtos.find(p => p.id === id);

        lista.innerHTML += `
            <div class="upsell-item">

                <img
                    src="${produto.imagem}"
                    alt="${produto.nome}"
                    class="upsell-img"
                >

                <div class="upsell-info">

                    <strong>${produto.nome}</strong>

                    <span>
                        R$ ${produto.preco.toFixed(2)}
                    </span>

                    <small
                        id="upsell-status-${id}"
                        class="upsell-status">
                    </small>

                </div>

                <button
                    class="btn-upsell"
                    onclick="adicionarUpsell(${id})">

                    + Adicionar

                </button>

            </div>
        `;
    });

    document
        .getElementById('modalUpsell')
        .classList.add('ativo');
}

function adicionarUpsell(id){

    const produto =
        produtos.find(p => p.id === id);

    carrinho.push({
        ...produto,
        chave: crypto.randomUUID(),
        quantidade: 1,
        observacao: '',
        espetinho: ''
    });

    atualizarCarrinho();

    const status =
        document.getElementById(`upsell-status-${id}`);

    if(status){

        let quantidadeAtual =
            Number(status.dataset.qtd || 0);

        quantidadeAtual++;

        status.dataset.qtd = quantidadeAtual;

        status.innerHTML =
            `✓ Adicionado ${quantidadeAtual}x`;

        status.style.display = 'block';
    }
}

window.adicionarUpsell = adicionarUpsell;

document
.getElementById('fecharUpsell')
.addEventListener('click', () => {

    document
    .getElementById('modalUpsell')
    .classList.remove('ativo');

});

/* ===================================
   QUANTIDADE
=================================== */

document.getElementById('maisBtn')
.addEventListener('click', () => {

    const input =
        document.getElementById('quantidadeInput');

    input.value = Number(input.value) + 1;

    atualizarSubtotalModal();
});

document.getElementById('menosBtn')
.addEventListener('click', () => {

    const input =
        document.getElementById('quantidadeInput');

    if (Number(input.value) > 1) {

        input.value = Number(input.value) - 1;

        atualizarSubtotalModal();
    }
});

document.getElementById('quantidadeInput')
.addEventListener('input', () => {

    const input =
        document.getElementById('quantidadeInput');

    if (Number(input.value) < 1) {
        input.value = 1;
    }

    atualizarSubtotalModal();
});

/* ===================================
   CARRINHO
=================================== */

document.getElementById('adicionarCarrinho').addEventListener('click', () => {

    let espetinhoSelecionado = '';

    if (produtoSelecionado.precisaEscolherEspetinho) {

        espetinhoSelecionado =
            document.getElementById('selectEspetinho').value;

        if (!espetinhoSelecionado) {

            alert('Selecione um espetinho.');

            return;
        }

    }

    const observacao = document.getElementById('observacao').value;

    const index = carrinho.findIndex(item =>
        item.id === produtoSelecionado.id &&
        item.observacao === observacao &&
        item.espetinho === espetinhoSelecionado
    );

    const quantidade = Number(
        document.getElementById('quantidadeInput').value
    );

    if (index !== -1) {

        carrinho[index].quantidade += quantidade;

    } else {

        carrinho.push({
            ...produtoSelecionado,
            chave: crypto.randomUUID(),
            quantidade: Number(
                document.getElementById('quantidadeInput').value
            ),
            observacao,
            espetinho: espetinhoSelecionado
        });

    }

    atualizarCarrinho();

const idProduto = produtoSelecionado.id;

fecharModal();

setTimeout(() => {
    abrirUpsell(idProduto);
}, 300);

});

function atualizarCarrinho() {

    const container = document.getElementById('itensCarrinho');
    container.innerHTML = '';

    let total = 0;
    

    carrinho.forEach(item => {

        const subtotal = item.preco * item.quantidade;
        total += subtotal;

        container.innerHTML += `
            <div class="carrinho-item">

                <h4>${item.nome}</h4>

                <p>${item.quantidade}x - R$ ${subtotal.toFixed(2)}</p>

                <small>${item.observacao || ''}</small>

                ${item.espetinho
                ? `<small>Espetinho: ${item.espetinho}</small>`
                : ''
                }

                <button
                    onclick="removerItem('${item.chave}')"
                    class="btn-remover">

                    Remover

                </button>

            </div>
        `;
    });

    const totalFinal = total + taxaEntrega;

    document.getElementById('totalCarrinho').textContent =
        `Subtotal: R$ ${total.toFixed(2)} + Entrega: R$ ${taxaEntrega.toFixed(2)} = R$ ${totalFinal.toFixed(2)}`;

    const badge = document.getElementById('badgeCarrinho');

    if (badge) {
        badge.textContent = carrinho.reduce(
            (acc, item) => acc + item.quantidade,
            0
        );
    }
}

function removerItem(chave) {

    carrinho = carrinho.filter(
        item => item.chave !== chave
    );

    atualizarCarrinho();
}

window.removerItem = removerItem;



/* ===================================
   WHATSAPP FINALIZAR PEDIDO
=================================== */
document.getElementById('finalizarPedido').addEventListener('click', () => {

    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    const nome = document.getElementById('nomeCliente').value.trim();
    const celular = document.getElementById('celularCliente').value.trim();
    const endereco = document.getElementById('enderecoCliente').value.trim();
    const pagamento = document.getElementById('pagamentoCliente').value;
    const troco = document.getElementById('trocoCliente').value;

    if (!nome) {
        alert('Informe seu nome.');
        return;
    }

    if (!celular) {
        alert('Informe seu WhatsApp.');
        return;
    }

    if (!pagamento) {
        alert('Selecione a forma de pagamento.');
        return;
    }

    if (tipoEntrega === 'Entrega') {

        if (!endereco) {
            alert('Informe o endereço.');
            return;
        }

        if (!bairroSelecionado) {
            alert('Selecione o bairro.');
            return;
        }
    }

    let total = 0;
    const divisor = `------------------------------\n`;

    let mensagem = `*CHURRASQUINHO DUBOM*\n`;
    mensagem += `*Novo Pedido*\n`;
    mensagem += divisor;

    mensagem += `*ITENS DO PEDIDO*\n\n`;

    carrinho.forEach(item => {

        const subtotal = item.preco * item.quantidade;
        total += subtotal;

        mensagem += ` *${item.nome.toUpperCase()}*\n`;
        mensagem += `   Qtd: ${item.quantidade} | Subtotal: R$ ${subtotal.toFixed(2)}\n`;

        if (item.observacao) {
            mensagem += `   ► *OBSERVACAO:* *${item.observacao.toUpperCase()}*\n`;
        }

        if (item.espetinho) {
            mensagem += `   ► *ESPETINHO:* *${item.espetinho.toUpperCase()}*\n`;
        }

        mensagem += `\n`;
    });

    const totalFinal = total + taxaEntrega;

    mensagem += divisor;
    mensagem += `*RESUMO DO PEDIDO*\n\n`;
    mensagem += `Subtotal: R$ ${total.toFixed(2)}\n`;

    if (tipoEntrega === "Entrega") {
        mensagem += `Taxa de entrega: R$ ${taxaEntrega.toFixed(2)}\n`;
    } else {
        mensagem += `Retirada na loja\n`;
    }

    mensagem += `*TOTAL: R$ ${totalFinal.toFixed(2)}*\n`;
    mensagem += divisor;

    mensagem += `*DADOS DO CLIENTE*\n\n`;
    mensagem += `Nome: ${nome}\n`;
    mensagem += `Celular: ${celular}\n`;

    if (tipoEntrega === "Entrega") {
        mensagem += `Endereco: ${endereco}\n`;
    } else {
        mensagem += `Retirada na loja\n`;
    }

    mensagem += `Bairro: ${bairroSelecionado}\n`;
    mensagem += `Pagamento: ${pagamento}\n`;

    if (pagamento === "Dinheiro" && troco) {

        const valorRecebido = Number(troco);
        const valorTroco = valorRecebido - totalFinal;

        mensagem += divisor;
        mensagem += `*TROCO*\n\n`;
        mensagem += `Cliente paga com: R$ ${valorRecebido.toFixed(2)}\n`;
        mensagem += `Troco: R$ ${valorTroco.toFixed(2)}\n`;
    }

    mensagem += divisor;
    mensagem += `Obrigado pela preferencia!`;

    // LOJA FECHADA
    if (
        document
            .getElementById('statusLoja')
            .classList.contains('fechado')
    ) {

        document
            .getElementById('modalFechado')
            .classList.add('ativo');

        return;
    }

    // WHATSAPP
    const telefone = "5538998993135";

    const url =
        `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");

    carrinho = [];
    atualizarCarrinho();
});

function fecharModalFechado() {
    document
        .getElementById('modalFechado')
        .classList.remove('ativo');
}

document
    .getElementById('fecharModalFechado')
    .addEventListener('click', fecharModalFechado);

document
    .getElementById('modalFechado')
    .addEventListener('click', (e) => {

        if (e.target.id === 'modalFechado') {
            fecharModalFechado();
        }

    });
/* ===================================
   CARRINHO TOGGLE
=================================== */

function toggleTroco(){

    const pagamento = document.getElementById('pagamentoCliente').value;

    const campoTroco = document.getElementById('campoTroco');

    const troco = document.getElementById('trocoCliente');


    if(pagamento === "Dinheiro"){

        campoTroco.style.display = "block";

    }else{

        campoTroco.style.display = "none";

        troco.value = "";

    }

}


document
.getElementById('pagamentoCliente')
.addEventListener('change', toggleTroco);

window.toggleTroco = toggleTroco;

document.getElementById('btnCarrinho').addEventListener('click', () => {
    document.getElementById('carrinho').classList.toggle('aberto');
});

/*==================================
Carregar Bairros
==================================*/

function carregarBairros() {
    const select = document.getElementById('bairroCliente');

    bairros.forEach(b => {
        const option = document.createElement('option');
        option.value = b.nome;
        option.textContent = `${b.nome} - R$ ${b.valor.toFixed(2)}`;
        select.appendChild(option);
    });

    select.addEventListener('change', () => {
    const bairro = bairros.find(b => b.nome === select.value);

    if (tipoEntrega === "Entrega" && bairro) {
        taxaEntrega = bairro.valor;
        bairroSelecionado = bairro.nome;
    } else if (tipoEntrega === "Retirada") {
        taxaEntrega = 0;
        bairroSelecionado = "Retirada na loja";
    } else {
        taxaEntrega = 0;
        bairroSelecionado = "";
    }

    atualizarCarrinho();
});
}

const btnFecharCarrinho = document.getElementById('fecharCarrinho');

if (btnFecharCarrinho) {
    btnFecharCarrinho.addEventListener('click', () => {

        document
            .getElementById('carrinho')
            .classList.remove('aberto');

    });
}

/* ===================================
   INIT
=================================== */

renderizarProdutos(produtos);
carregarBairros();
atualizarCarrinho();
atualizarStatusLoja();
renderizarMaisPedidos();
toggleTroco();