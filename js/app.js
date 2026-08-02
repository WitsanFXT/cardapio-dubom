/* ===================================
   PRODUTOS
   Agora vêm do Supabase (tabela `produtos`).
   Este array começa vazio e é preenchido em carregarDadosSupabase().
=================================== */

let produtos = [];

/* Array antigo mantido comentado apenas como referência do que já
   foi migrado para o banco via sql/schema.sql — pode apagar quando
   tiver certeza de que está tudo certo no Supabase.

const produtosAntigos = [
  {
    id: 1,
    nome: "Jantinha Completa G",
    descricao:
      "Arroz, feijão tropeiro, vinagrete, mandioca e espetinho de sua preferência 500g-600g .",
    preco: 25.0,
    categoria: "jantinha",
    imagem: "./img/produtos/jantinha-com-churrasco.jpg",
    precisaEscolherEspetinho: true,
    exigeEspetinho: true,
  },

  {
    id: 2,
    nome: "Jantinha Completa P",
    descricao:
      "Arroz, feijão tropeiro, vinagrete, mandioca e espetinho de sua preferência 200g-300g .",
    preco: 22.0,
    categoria: "jantinha",
    imagem: "./img/produtos/jantinha-com-churrasco.jpg",
    precisaEscolherEspetinho: true,
    exigeEspetinho: true,
  },

  // =========================
  // LANCHES
  // =========================

  {
    id: 8,
    nome: "Pão De Costela Desfiada",
    descricao:
      "Pão Francês, costela desfiada, molho de alho, vinagrete e mussarela.",
    preco: 20.0,
    categoria: "lanche",
    imagem: "./img/produtos/pao-costela.jpg",
  },

  {
    id: 9,
    nome: "Pão com Churrasco",
    descricao:
      "Pão Francês, molho de alho, vinagrete, mussarela e churrasco da sua preferência. ",
    preco: 22.0,
    categoria: "lanche",
    imagem: "./img/produtos/pao-churrasco.jpg",
    precisaEscolherEspetinho: true,
    exigeEspetinho: true,
  },

  // =========================
  // ESPETINHOS
  // =========================

  {
    id: 10,
    nome: "Espetinho Barrigada",
    descricao: "Espetinho de barrigada.",
    preco: 14.0,
    categoria: "espetinho",
    imagem: "./img/produtos/barrigada.jpg",
  },

  {
    id: 11,
    nome: "Espetinho Contra Filé",
    descricao: "Espetinho de contra filé.",
    preco: 14.0,
    categoria: "espetinho",
    imagem: "./img/produtos/contra-file.jpg",
  },

  {
    id: 12,
    nome: "Espetinho Frango com Bacon",
    descricao: "Espetinho de frango com bacon.",
    preco: 14.0,
    categoria: "espetinho",
    imagem: "./img/produtos/frango-bacon.jpg",
  },

  {
    id: 13,
    nome: "Espetinho Linguiça Mista",
    descricao: "Espetinho de linguiça mista.",
    preco: 14.0,
    categoria: "espetinho",
    imagem: "./img/produtos/linguica-mista.jpg",
  },

  {
    id: 14,
    nome: "Espetinho Tulipa",
    descricao: "Espetinho de tulipa de frango.",
    preco: 14.0,
    categoria: "espetinho",
    imagem: "./img/produtos/tulipa.jpg",
  },

  /*{
    id: 23,
    nome: "Espetinho Cupim",
    descricao: "Espetinho de Cupim.",
    preco: 14.0,
    categoria: "espetinho",
    imagem: "./img/produtos/cupim.jpg",
  },

  {
    id: 24,
    nome: "Espetinho Coração",
    descricao: "Espetinho de Coração de frango.",
    preco: 14.0,
    categoria: "espetinho",
    imagem: "./img/produtos/coracao.jpg",
  },

  {
    id: 25,
    nome: "Espetinho Linguiça com Pimenta",
    descricao: "Espetinho de Linguiça com Pimenta.",
    preco: 14.0,
    categoria: "espetinho",
    imagem: "./img/produtos/linguica_pimenta.jpg",
  },

  {
    id: 26,
    nome: "Pão de Alho",
    descricao: "Pão de Alho.",
    preco: 9.0,
    categoria: "espetinho",
    imagem: "./img/produtos/pao.jpg",
  },

  {
    id: 27,
    nome: "Queijo Coalho",
    descricao: "Queijo Coalho.",
    preco: 14.0,
    categoria: "espetinho",
    imagem: "./img/produtos/queijo.jpg",
  },

  // =========================
  // PORÇÕES
  // =========================

  {
    id: 4,
    nome: "Porção de Arroz",
    descricao: "Porção individual de arroz.",
    preco: 15.0,
    categoria: "porcao",
    imagem: "./img/produtos/arroz.jpg",
  },

  {
    id: 5,
    nome: "Porção de Feijão Tropeiro P",
    descricao: "Porção de feijão tropeiro.",
    preco: 18.0,
    categoria: "porcao",
    imagem: "./img/produtos/tropeiroP.jpg",
  },

  {
    id: 28,
    nome: "Porção de Feijão Tropeiro G",
    descricao: "Porção de feijão tropeiro.",
    preco: 20.0,
    categoria: "porcao",
    imagem: "./img/produtos/tropeiroG.jpg",
  },

  {
    id: 29,
    nome: "Porção de Feijão Tropeiro P + Espetinho",
    descricao: "Porção de feijão tropeiro + Espetinho de sua preferência.",
    preco: 22.0,
    categoria: "porcao",
    imagem: "./img/produtos/tropeiroE.jpg",
    precisaEscolherEspetinho: true,
    exigeEspetinho: true,
  },

  {
    id: 88,
    nome: "Porção de Feijão Tropeiro G + Espetinho",
    descricao: "Porção de feijão tropeiro + Espetinho de sua preferência.",
    preco: 25.0,
    categoria: "porcao",
    imagem: "./img/produtos/tropeiroE.jpg",
    precisaEscolherEspetinho: true,
    exigeEspetinho: true,
  },

  {
    id: 6,
    nome: "Porção de Mandioca",
    descricao: "Porção de mandioca cozida.",
    preco: 3.0,
    categoria: "porcao",
    imagem: "./img/produtos/mandioca.jpg",
  },

  {
    id: 7,
    nome: "Porção de Vinagrete",
    descricao: "Porção de vinagrete fresco.",
    preco: 3.0,
    categoria: "porcao",
    imagem: "./img/produtos/vinagrete.jpg",
  },

  // =========================
  // BEBIDAS
  // =========================

  {
    id: 15,
    nome: "Guaraná Zero Antarctica 350ml",
    descricao: "Lata gelada.",
    preco: 5.0,
    categoria: "bebida",
    imagem: "./img/produtos/guarana-zero.jpg",
  },

  {
    id: 16,
    nome: "Coca-Cola Zero 350ml",
    descricao: "Lata 350ml.",
    preco: 5.0,
    categoria: "bebida",
    imagem: "./img/produtos/coca-zero.jpg",
  },

  {
    id: 17,
    nome: "Guaraná Antarctica 350ml",
    descricao: "Lata 350ml.",
    preco: 5.0,
    categoria: "bebida",
    imagem: "./img/produtos/guarana-antartica.jpg",
  },

  {
    id: 18,
    nome: "Guaraná Mineiro 350ml",
    descricao: "Lata 350ml.",
    preco: 5.0,
    categoria: "bebida",
    imagem: "./img/produtos/guarana-mineiro.jpg",
  },

  {
    id: 30,
    nome: "Guaraná Mineiro Zero 350ml",
    descricao: "Lata 350ml.",
    preco: 5.0,
    categoria: "bebida",
    imagem: "./img/produtos/guarana-mineiro-zero.jpg",
  },

  {
    id: 19,
    nome: "Coca-Cola 350ml",
    descricao: "Lata 350ml.",
    preco: 5.0,
    categoria: "bebida",
    imagem: "./img/produtos/coca-cola.jpg",
  },

  {
    id: 22,
    nome: "Sprite 350ml",
    descricao: "Lata 350ml.",
    preco: 5.0,
    categoria: "bebida",
    imagem: "./img/produtos/sprite.jpg",
  },

  {
    id: 20,
    nome: "Guaraná Mineiro 1,5L",
    descricao: "Garrafa 1,5 litros.",
    preco: 8.0,
    categoria: "bebida",
    imagem: "./img/produtos/guarana-mineiro-15.jpg",
  },

  {
    id: 89,
    nome: "Coca-Cola 1,5L",
    descricao: "Coca-Cola 1,5 litros.",
    preco: 10.0,
    categoria: "bebida",
    imagem: "./img/produtos/coca-cola-15.jpg",
  },

  {
    id: 90,
    nome: "Coca-Cola Zero 1,5L",
    descricao: "Coca-Cola Zero 1,5 litros.",
    preco: 10.0,
    categoria: "bebida",
    imagem: "./img/produtos/coca-cola-zero-15.jpg",
  },

  {
    id: 21,
    nome: "H2O Limoneto 500ml",
    descricao: "Garrafa 500ml.",
    preco: 7.0,
    categoria: "bebida",
    imagem: "./img/produtos/h2o.jpg",
  },
];
*/

const opcoesEspetinho = [
  "Barrigada",
  "Contra Filé",
  "Frango com Bacon",
  "Linguiça Mista",
  "Tulipa",
  "Cupim",
  "Coração",
  "Linguiça com Pimenta",
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
  90: [26, 27, 1],
};

const maisPedidos = [
  1, // Contra Filé
  8, // Tulipa
  11, // Jantinha G
  12, // Jantinha P
  19, // Pão de Alho
];

function salvarCarrinho() {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  tocarSessao();
}

function salvarFormulario() {
  const campo = (id) => document.getElementById(id);

  const formulario = {
    nome: campo("nomeCliente")?.value || "",
    celular: campo("celularCliente")?.value || "",
    endereco: campo("enderecoCliente")?.value || "",
    referencia: campo("referenciaCliente")?.value || "",
    bairro: bairroSelecionado,
    pagamento: campo("pagamentoCliente")?.value || "",
    troco: campo("trocoCliente")?.value || "",
    tipoEntrega,
  };

  localStorage.setItem("checkoutForm", JSON.stringify(formulario));
  tocarSessao();
}

function carregarFormularioSalvo() {
  const salvo = localStorage.getItem("checkoutForm");

  if (!salvo) return;

  try {
    const formulario = JSON.parse(salvo);
    const campo = (id) => document.getElementById(id);

    if (campo("nomeCliente"))
      campo("nomeCliente").value = formulario.nome || "";
    if (campo("celularCliente"))
      campo("celularCliente").value = formulario.celular || "";
    if (campo("enderecoCliente"))
      campo("enderecoCliente").value = formulario.endereco || "";
    if (campo("referenciaCliente"))
      campo("referenciaCliente").value = formulario.referencia || "";
    if (campo("trocoCliente"))
      campo("trocoCliente").value = formulario.troco || "";

    if (formulario.pagamento && campo("pagamentoCliente")) {
      campo("pagamentoCliente").value = formulario.pagamento;
    }

    alternarTipoEntrega(
      formulario.tipoEntrega === "Retirada" ? "Retirada" : "Entrega",
    );

    if (formulario.bairro && formulario.tipoEntrega !== "Retirada") {
      const selectBairro = campo("bairroCliente");

      if (selectBairro) {
        selectBairro.value = formulario.bairro;

        const bairroObj = bairros.find((b) => b.nome === formulario.bairro);

        if (bairroObj) {
          taxaEntrega = bairroObj.valor;
          bairroSelecionado = bairroObj.nome;
        }
      }
    }

    toggleTroco();
  } catch (err) {
    console.error("Erro ao restaurar formulário salvo:", err);
  }
}

function renderizarMaisPedidos() {
  const container = document.getElementById("listaMaisPedidos");

  container.innerHTML = "";

  maisPedidos.forEach((id) => {
    const produto = produtos.find((p) => Number(p.id) === Number(id));

    if (!produto) {
      console.warn("Produto não encontrado:", id);
      return;
    }
    console.log(id, produto);
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

// Agora vem do Supabase (tabela `bairros`) — populado em carregarDadosSupabase()
let bairros = [];

// Configurações da loja (tabela `configuracoes`) e horários (tabela
// `horarios_funcionamento`) — também populados em carregarDadosSupabase()
let configuracoes = {
  nome_loja: "Churrasquinho Dubom",
  whatsapp_numero: "5538998993135",
  pix_chave: "",
  pix_titular: "",
  pix_banco: "",
  status_manual: "auto",
};
let horariosFuncionamento = [];

/* ===================================
   CARREGAR TUDO DO SUPABASE
=================================== */

async function carregarDadosSupabase() {
  const [
    { data: produtosData, error: erroProdutos },
    { data: bairrosData, error: erroBairros },
    { data: configData, error: erroConfig },
    { data: horariosData, error: erroHorarios },
  ] = await Promise.all([
    window.db
      .from("produtos")
      .select(
        `
      *,
      categorias(nome)
    `,
      )
      .eq("ativo", true)
      .order("ordem", { ascending: true }),
    window.db
      .from("bairros")
      .select("*")
      .eq("ativo", true)
      .order("ordem", { ascending: true }),
    window.db.from("configuracoes").select("*").eq("id", 1).single(),
    window.db
      .from("horarios_funcionamento")
      .select("*")
      .order("dia_semana", { ascending: true }),
  ]);

  if (erroProdutos || erroBairros || erroConfig || erroHorarios) {
    console.error(
      "Erro ao carregar dados do Supabase:",
      erroProdutos || erroBairros || erroConfig || erroHorarios,
    );
    return;
  }

  produtos = produtosData.map((p) => ({
    id: p.id,
    nome: p.nome,
    descricao: p.descricao,
    preco: Number(p.preco),

    categoria: p.categorias?.nome
      ?.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace("ç", "c"),

    imagem: p.imagem_url,

    precisaEscolherEspetinho: p.precisa_espetinho,
    exigeEspetinho: p.precisa_espetinho,
  }));

  console.log("Produtos carregados:");
  console.table(produtos);

  bairros = bairrosData.map((b) => ({ nome: b.nome, valor: Number(b.valor) }));

  configuracoes = configData;

  horariosFuncionamento = horariosData;
}

function aplicarConfiguracoesNaUI() {
  const nomeTitulo = document.getElementById("nomeLojaTitulo");
  if (nomeTitulo) nomeTitulo.textContent = configuracoes.nome_loja;

  const chavePix = document.getElementById("chavePix");
  if (chavePix) chavePix.value = configuracoes.pix_chave;

  const pixTitular = document.getElementById("pixTitular");
  if (pixTitular) pixTitular.textContent = configuracoes.pix_titular;

  const pixBanco = document.getElementById("pixBanco");
  if (pixBanco) pixBanco.textContent = configuracoes.pix_banco;

  const horarioModalFechado = document.getElementById("horarioModalFechado");
  if (horarioModalFechado) {
    const hoje = horarioDeHoje();
    if (hoje) {
      horarioModalFechado.textContent = `${formatarHora(hoje.hora_abertura)} às ${formatarHora(hoje.hora_fechamento)}`;
    }
  }

  document.documentElement.style.setProperty(
    "--cor-principal",
    configuracoes.cor_principal || "#ff6b00",
  );

  document.documentElement.style.setProperty(
    "--cor-secundaria",
    configuracoes.cor_secundaria || "#111111",
  );
}

let taxaEntrega = 0;
let bairroSelecionado = "";

let quantidadeAtual = 1;

/* ===================================
   RENDERIZAR PRODUTOS
=================================== */

function formatarHora(horaStr) {
  // horaStr vem do Supabase como "18:00:00" -> exibe "18:00"
  if (!horaStr) return "";
  return horaStr.slice(0, 5);
}

function horarioDeHoje() {
  const dia = new Date().getDay();
  return horariosFuncionamento.find((h) => h.dia_semana === dia) || null;
}

function atualizarStatusLoja() {
  const status = document.getElementById("statusLoja");

  // Override manual definido no painel admin tem prioridade total
  if (configuracoes.status_manual === "aberto") {
    status.className = "status-loja aberto";
    status.innerHTML = "🟢 Aberto agora";
    return;
  }

  if (configuracoes.status_manual === "fechado") {
    status.className = "status-loja fechado";
    status.innerHTML = "🔴 Fechado no momento";
    return;
  }

  // Modo automático: segue o horário de funcionamento cadastrado
  const hoje = horarioDeHoje();

  if (!hoje) {
    status.className = "status-loja fechado";
    status.innerHTML = "🔴 Fechado no momento";
    return;
  }

  const agora = new Date();
  const horarioAtual = agora.getHours() * 60 + agora.getMinutes();

  const [horaAbreH, horaAbreM] = hoje.hora_abertura.split(":").map(Number);
  const [horaFechaH, horaFechaM] = hoje.hora_fechamento.split(":").map(Number);
  const abre = horaAbreH * 60 + horaAbreM;
  const fecha = horaFechaH * 60 + horaFechaM;

  const abertoAgora =
    hoje.ativo && horarioAtual >= abre && horarioAtual <= fecha;

  if (abertoAgora) {
    status.className = "status-loja aberto";
    status.innerHTML = `🟢 Aberto agora • Até ${formatarHora(hoje.hora_fechamento)}`;
  } else {
    status.className = "status-loja fechado";
    status.innerHTML = `🔴 Fechado • Atendimento das ${formatarHora(hoje.hora_abertura)} às ${formatarHora(hoje.hora_fechamento)}`;
  }
}

function renderizarProdutos(lista) {
  const categorias = {
    jantinha: document.getElementById("listaJantinhas"),
    lanche: document.getElementById("listaLanches"),
    espetinho: document.getElementById("listaEspetinhos"),
    porcao: document.getElementById("listaPorcoes"),
    bebida: document.getElementById("listaBebidas"),
  };

  Object.values(categorias).forEach((c) => {
    if (c) c.innerHTML = "";
  });

  lista.forEach((produto) => {
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

// ================== CONTROLE DE ENTREGA COM BOTÕES ==================
const btnEntrega = document.getElementById("btnEntrega");
const btnRetirada = document.getElementById("btnRetirada");
const camposEntrega = document.getElementById("camposEntrega");
const avisoRetirada = document.getElementById("avisoRetirada");

function alternarTipoEntrega(tipo) {
  tipoEntrega = tipo;

  if (tipo === "Entrega") {
    btnEntrega.classList.add("ativo");
    btnRetirada.classList.remove("ativo");
    camposEntrega.style.display = "flex";
    avisoRetirada.style.display = "none";
  } else {
    btnRetirada.classList.add("ativo");
    btnEntrega.classList.remove("ativo");
    camposEntrega.style.display = "none";
    avisoRetirada.style.display = "block";
    taxaEntrega = 0;
    bairroSelecionado = "Retirada na loja";
  }
  atualizarCarrinho();
  salvarFormulario();
}

// Inicialização
if (btnEntrega && btnRetirada) {
  btnEntrega.addEventListener("click", () => alternarTipoEntrega("Entrega"));
  btnRetirada.addEventListener("click", () => alternarTipoEntrega("Retirada"));
  alternarTipoEntrega("Entrega"); // padrão
}

/* ===================================
   MODAL
=================================== */

function abrirModal(id) {
  produtoSelecionado = produtos.find((p) => p.id === id);

  quantidadeAtual = 1;

  document.getElementById("produtoNome").textContent = produtoSelecionado.nome;

  document.getElementById("produtoPreco").textContent =
    `R$ ${produtoSelecionado.preco.toFixed(2)}`;

  document.getElementById("quantidadeInput").value = 1;

  const campoEspetinho = document.getElementById("campoEspetinho");

  const selectEspetinho = document.getElementById("selectEspetinho");

  selectEspetinho.innerHTML = '<option value="">Selecione</option>';

  if (produtoSelecionado.precisaEscolherEspetinho) {
    campoEspetinho.style.display = "block";

    opcoesEspetinho.forEach((espetinho) => {
      selectEspetinho.innerHTML += `
            <option value="${espetinho}">
                ${espetinho}
            </option>
        `;
    });
  } else {
    campoEspetinho.style.display = "none";
  }

  document.getElementById("observacao").value = "";

  atualizarSubtotalModal();

  document.getElementById("modalProduto").classList.add("ativo");
}

window.abrirModal = abrirModal;

function fecharModal() {
  document.getElementById("modalProduto").classList.remove("ativo");
  document.body.classList.remove("sem-scroll");
}

document.getElementById("fecharModal").addEventListener("click", fecharModal);

document.getElementById("modalProduto").addEventListener("click", (e) => {
  if (e.target.id === "modalProduto") fecharModal();
});

function atualizarSubtotalModal() {
  if (!produtoSelecionado) return;

  const quantidade = Number(document.getElementById("quantidadeInput").value);

  const subtotal = produtoSelecionado.preco * quantidade;

  document.getElementById("subtotalModal").textContent =
    `Total: R$ ${subtotal.toFixed(2)}`;
}
document.getElementById("quantidadeInput").addEventListener("input", () => {
  atualizarSubtotalModal();
});

function abrirUpsell(produtoId) {
  const ids = sugestoesUpsell[produtoId];

  if (!ids) return;

  const lista = document.getElementById("listaUpsell");

  lista.innerHTML = "";

  ids.forEach((id) => {
    const produto = produtos.find((p) => p.id === id);

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

  document.getElementById("modalUpsell").classList.add("ativo");
}

function adicionarUpsell(id) {
  const produto = produtos.find((p) => p.id === id);

  carrinho.push({
    ...produto,
    chave: crypto.randomUUID(),
    quantidade: 1,
    observacao: "",
    espetinho: "",
  });

  salvarCarrinho();

  atualizarCarrinho();

  const status = document.getElementById(`upsell-status-${id}`);

  if (status) {
    let quantidadeAtual = Number(status.dataset.qtd || 0);

    quantidadeAtual++;

    status.dataset.qtd = quantidadeAtual;

    status.innerHTML = `✓ Adicionado ${quantidadeAtual}x`;

    status.style.display = "block";
  }
}

window.adicionarUpsell = adicionarUpsell;

document.getElementById("fecharUpsell").addEventListener("click", () => {
  document.getElementById("modalUpsell").classList.remove("ativo");
});

/* ===================================
   QUANTIDADE
=================================== */

document.getElementById("maisBtn").addEventListener("click", () => {
  const input = document.getElementById("quantidadeInput");

  input.value = Number(input.value) + 1;

  atualizarSubtotalModal();
});

document.getElementById("menosBtn").addEventListener("click", () => {
  const input = document.getElementById("quantidadeInput");

  if (Number(input.value) > 1) {
    input.value = Number(input.value) - 1;

    atualizarSubtotalModal();
  }
});

document.getElementById("quantidadeInput").addEventListener("input", () => {
  const input = document.getElementById("quantidadeInput");

  if (Number(input.value) < 1) {
    input.value = 1;
  }

  atualizarSubtotalModal();
});

/* ===================================
   CARRINHO
=================================== */

document.getElementById("adicionarCarrinho").addEventListener("click", () => {
  let espetinhoSelecionado = "";

  if (produtoSelecionado.precisaEscolherEspetinho) {
    espetinhoSelecionado = document.getElementById("selectEspetinho").value;

    if (!espetinhoSelecionado) {
      alert("Selecione um espetinho.");

      return;
    }
  }

  const observacao = document.getElementById("observacao").value;

  const index = carrinho.findIndex(
    (item) =>
      item.id === produtoSelecionado.id &&
      item.observacao === observacao &&
      item.espetinho === espetinhoSelecionado,
  );

  const quantidade = Number(document.getElementById("quantidadeInput").value);

  if (index !== -1) {
    carrinho[index].quantidade += quantidade;
  } else {
    carrinho.push({
      ...produtoSelecionado,
      chave: crypto.randomUUID(),
      quantidade: Number(document.getElementById("quantidadeInput").value),
      observacao,
      espetinho: espetinhoSelecionado,
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
  const container = document.getElementById("itensCarrinho");
  container.innerHTML = "";

  let total = 0;

  carrinho.forEach((item) => {
    const subtotal = item.preco * item.quantidade;
    total += subtotal;

    container.innerHTML += `
            <div class="carrinho-item">

                <h4>${item.nome}</h4>

                <p>${item.quantidade}x - R$ ${subtotal.toFixed(2)}</p>

                <small>${item.observacao || ""}</small>

                ${
                  item.espetinho
                    ? `<small>Espetinho: ${item.espetinho}</small>`
                    : ""
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

  document.getElementById("totalCarrinho").textContent =
    `Subtotal: R$ ${total.toFixed(2)} + Entrega: R$ ${taxaEntrega.toFixed(2)} = R$ ${totalFinal.toFixed(2)}`;

  const badge = document.getElementById("badgeCarrinho");

  if (badge) {
    badge.textContent = carrinho.reduce(
      (acc, item) => acc + item.quantidade,
      0,
    );
  }

  // Sempre que o carrinho é re-renderizado, ele também é persistido —
  // garante que qualquer alteração (adicionar, remover, trocar
  // quantidade) sobreviva a um reload/fechamento da página.
  salvarCarrinho();
}

function removerItem(chave) {
  carrinho = carrinho.filter((item) => item.chave !== chave);

  atualizarCarrinho();
  salvarCarrinho();
}

window.removerItem = removerItem;

/* ===================================
   WHATSAPP FINALIZAR PEDIDO
=================================== */

let pixConfirmado = false;

/* ===================================
   PIX
=================================== */

function atualizarResumoPix() {
  let total = 0;
  let html = "";

  carrinho.forEach((item) => {
    const subtotal = item.preco * item.quantidade;

    total += subtotal;

    html += `
            <p>
                ${item.quantidade}x ${item.nome}
            </p>
        `;
  });

  total += taxaEntrega;

  html += `
        <hr>
        <strong>
            Total: R$ ${total.toFixed(2)}
        </strong>
    `;

  document.getElementById("resumoPix").innerHTML = html;
}

/* ===================================
   SALVAR / ATUALIZAR PEDIDO NO SUPABASE
   Usada tanto para gravar o pedido cedo (assim que o
   cliente abre o PIX, antes de pagar) quanto para
   atualizá-lo quando ele finaliza. Isso garante que o
   pedido apareça no painel admin mesmo que o cliente
   pague e não volte a finalizar pelo WhatsApp.
=================================== */

async function salvarOuAtualizarPedido(status, pago) {
  if (carrinho.length === 0) return null;

  const nome = document.getElementById("nomeCliente").value.trim();
  const celular = document.getElementById("celularCliente").value.trim();
  const endereco = document.getElementById("enderecoCliente").value.trim();
  const referencia = document.getElementById("referenciaCliente").value.trim();
  const pagamento = document.getElementById("pagamentoCliente").value;

  if (!nome || !celular) return null;

  let total = 0;
  carrinho.forEach((item) => {
    total += item.preco * item.quantidade;
  });
  const totalFinal = total + taxaEntrega;

  const ehPix = pagamento === "Pix";

  const dadosPedido = {
    cliente_nome: nome,
    cliente_whatsapp: celular,
    endereco,
    referencia,
    bairro: bairroSelecionado,
    tipo_entrega: tipoEntrega,
    forma_pagamento: pagamento,
    subtotal: total,
    taxa_entrega: taxaEntrega,
    total: totalFinal,

    status: ehPix ? "aguardando_pagamento" : "aguardando_entregador",

    pago: false,

    pix_confirmado: false,
  };

  let pendente = null;
  try {
    pendente = JSON.parse(localStorage.getItem("pedidoPendenteId") || "null");
  } catch (e) {
    pendente = null;
  }

  try {
    let pedidoId;

    if (pendente && pendente.id) {
      const { error: erroUpdate } = await window.db
        .from("pedidos")
        .update(dadosPedido)
        .eq("id", pendente.id);

      if (erroUpdate) throw erroUpdate;

      pedidoId = pendente.id;

      // Itens podem ter mudado desde o último salvamento
      // (ex: cliente voltou e editou o carrinho) — recria a lista.
      await window.db.from("itens_pedido").delete().eq("pedido_id", pedidoId);
    } else {
      dadosPedido.codigo = "PED-" + Date.now();

      const { data: pedidoCriado, error: erroInsert } = await window.db
        .from("pedidos")
        .insert(dadosPedido)
        .select()
        .single();

      if (erroInsert) throw erroInsert;

      pedidoId = pedidoCriado.id;

      localStorage.setItem(
        "pedidoPendenteId",
        JSON.stringify({ id: pedidoId, codigo: dadosPedido.codigo }),
      );
    }

    for (const item of carrinho) {
      await window.db.from("itens_pedido").insert({
        pedido_id: pedidoId,
        produto_id: item.id,
        produto_nome: item.nome,
        preco: item.preco,
        quantidade: item.quantidade,
        observacao: item.observacao,
        espetinho: item.espetinho,
      });
    }

    return pedidoId;
  } catch (err) {
    console.error("Erro ao salvar/atualizar pedido:", err);
    return null;
  }
}

async function abrirModalPix() {
  atualizarResumoPix();

  document.getElementById("modalPix").classList.add("ativo");

  localStorage.setItem("pixPendente", "true");

  salvarFormulario();

  // Grava o pedido no banco AGORA, antes do pagamento, para que
  // apareça no painel admin mesmo se o cliente pagar e sumir.
  await salvarOuAtualizarPedido("aguardando_pagamento", false);
}

function fecharModalPix() {
  document.getElementById("modalPix").classList.remove("ativo");
}

document.getElementById("fecharPix").addEventListener("click", fecharModalPix);

document.getElementById("modalPix").addEventListener("click", (e) => {
  if (e.target.id === "modalPix") {
    fecharModalPix();
  }
});

function verificarPixPendente() {
  const pixPendente = localStorage.getItem("pixPendente");

  if (pixPendente === "true" && carrinho.length > 0) {
    abrirModalPix();
  }
}

/* ===================================
   COPIAR CHAVE PIX
=================================== */

document.getElementById("copiarPix").addEventListener("click", async () => {
  const chave = document.getElementById("chavePix").value;

  await navigator.clipboard.writeText(chave);

  alert("Chave PIX copiada!");
});

/* ===================================
   CONFIRMAR PIX
=================================== */

document.getElementById("btnFinalizarPix").addEventListener("click", () => {
  if (!document.getElementById("pixPago").checked) {
    alert("Confirme que realizou o pagamento.");

    return;
  }

  pixConfirmado = true;

  fecharModalPix();

  document.getElementById("finalizarPedido").click();
});

/* ===================================
   FINALIZAR PEDIDO
=================================== */

document
  .getElementById("finalizarPedido")
  .addEventListener("click", async () => {
    if (carrinho.length === 0) {
      alert("Seu carrinho está vazio!");
      return;
    }

    const nome = document.getElementById("nomeCliente").value.trim();
    const celular = document.getElementById("celularCliente").value.trim();
    const endereco = document.getElementById("enderecoCliente").value.trim();
    const referencia = document
      .getElementById("referenciaCliente")
      .value.trim();
    const pagamento = document.getElementById("pagamentoCliente").value;
    const troco = document.getElementById("trocoCliente").value;

    if (!nome) {
      alert("Informe seu nome.");
      return;
    }

    if (!celular) {
      alert("Informe seu WhatsApp.");
      return;
    }

    if (!pagamento) {
      alert("Selecione a forma de pagamento.");
      return;
    }

    if (tipoEntrega === "Entrega") {
      if (!endereco) {
        alert("Informe o endereço completo (rua e número).");
        return;
      }
      if (!bairroSelecionado || bairroSelecionado === "") {
        alert("Selecione o bairro.");
        return;
      }
    }

    if (pagamento === "Pix" && !pixConfirmado) {
      abrirModalPix();
      return;
    }

    let total = 0;
    const divisor = `------------------------------\n`;

    let mensagem = `*${configuracoes.nome_loja.toUpperCase()}*\n`;
    mensagem += `*Novo Pedido*\n`;
    mensagem += divisor;

    mensagem += `*ITENS DO PEDIDO*\n\n`;

    carrinho.forEach((item) => {
      const subtotal = item.preco * item.quantidade;
      total += subtotal;

      mensagem += ` *${item.nome.toUpperCase()}*\n`;
      mensagem += `   Qtd: ${item.quantidade} | Subtotal: R$ ${subtotal.toFixed(2)}\n`;

      if (item.observacao) {
        mensagem += `   ► *OBSERVAÇÃO:* ${item.observacao}\n`;
      }
      if (item.espetinho) {
        mensagem += `   ► *ESPETINHO:* ${item.espetinho}\n`;
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
      mensagem += `Endereço: ${endereco}\n`;
      if (referencia) mensagem += `Referência: ${referencia}\n`;
      mensagem += `Bairro: ${bairroSelecionado}\n`;
    } else {
      mensagem += `Retirada na loja\n`;
    }

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
    mensagem += `Obrigado pela preferência!`;

    // Verifica se loja está fechada
    if (document.getElementById("statusLoja").classList.contains("fechado")) {
      document.getElementById("modalFechado").classList.add("ativo");
      return;
    }

    const telefone = configuracoes.whatsapp_numero;
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

    // Se veio de um PIX (pedido já foi gravado como "aguardando_pagamento"
    // quando o modal PIX abriu), aqui apenas atualizamos o mesmo registro.
    // Se não for PIX, cria o pedido agora (comportamento original).
    const statusFinal =
      pagamento === "Pix" ? "aguardando_pagamento" : "aguardando_entregador";

    const pedidoSalvo = await salvarOuAtualizarPedido(statusFinal, false);

    if (!pedidoSalvo) {
      alert(
        "Não foi possível registrar seu pedido no sistema. Verifique sua internet e tente novamente. Se o problema continuar, chame no WhatsApp diretamente.",
      );
      return;
    }

    window.open(url, "_blank");

    // Limpeza
    pixConfirmado = false;
    localStorage.removeItem("carrinho");
    localStorage.removeItem("pixPendente");
    localStorage.removeItem("pedidoPendenteId");
    localStorage.removeItem("checkoutForm");

    carrinho = [];
    atualizarCarrinho();
  });

/* ===================================
   MODAL FECHADO
=================================== */

function fecharModalFechado() {
  document.getElementById("modalFechado").classList.remove("ativo");
}

document
  .getElementById("fecharModalFechado")
  .addEventListener("click", fecharModalFechado);

document.getElementById("modalFechado").addEventListener("click", (e) => {
  if (e.target.id === "modalFechado") {
    fecharModalFechado();
  }
});

/* ===================================
   CARRINHO TOGGLE
=================================== */

function toggleTroco() {
  const pagamento = document.getElementById("pagamentoCliente").value;

  const campoTroco = document.getElementById("campoTroco");

  const troco = document.getElementById("trocoCliente");

  if (pagamento === "Dinheiro") {
    campoTroco.style.display = "block";
  } else {
    campoTroco.style.display = "none";

    troco.value = "";
  }
}

document
  .getElementById("pagamentoCliente")
  .addEventListener("change", toggleTroco);

window.toggleTroco = toggleTroco;

/* ===================================
   AUTOSAVE DO FORMULÁRIO DE CHECKOUT
   Garante que, se a página recarregar (ou o app for
   fechado/reaberto), os dados digitados pelo cliente
   não se percam.
=================================== */

[
  "nomeCliente",
  "celularCliente",
  "enderecoCliente",
  "referenciaCliente",
  "trocoCliente",
].forEach((id) => {
  const el = document.getElementById(id);
  if (el) el.addEventListener("input", salvarFormulario);
});

document
  .getElementById("pagamentoCliente")
  .addEventListener("change", salvarFormulario);

document.getElementById("btnCarrinho").addEventListener("click", () => {
  document.getElementById("carrinho").classList.toggle("aberto");
});

/*==================================
Carregar Bairros
==================================*/

function carregarBairros() {
  const select = document.getElementById("bairroCliente");

  select.innerHTML = '<option value="">Selecione o bairro</option>';

  bairros.forEach((b) => {
    const option = document.createElement("option");
    option.value = b.nome;
    option.textContent = `${b.nome} - R$ ${b.valor.toFixed(2)}`;
    select.appendChild(option);
  });

  select.addEventListener("change", () => {
    const bairro = bairros.find((b) => b.nome === select.value);

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
    salvarFormulario();
  });
}

const btnFecharCarrinho = document.getElementById("fecharCarrinho");

if (btnFecharCarrinho) {
  btnFecharCarrinho.addEventListener("click", () => {
    document.getElementById("carrinho").classList.remove("aberto");
  });
}

function carregarCarrinhoSalvo() {
  const carrinhoSalvo = localStorage.getItem("carrinho");

  if (carrinhoSalvo) {
    carrinho = JSON.parse(carrinhoSalvo);
  }
}

/* ===================================
   SESSÃO DO PEDIDO (validade de 3 horas)

   Cada vez que salvamos carrinho ou formulário, também gravamos
   "sessaoAtualizadaEm" com o horário atual. Ao abrir a página,
   comparamos com agora: se já se passaram mais de 3h desde a
   última atividade, descartamos tudo (carrinho, formulário, PIX
   pendente) e o cliente começa do zero — evita reabrir, por
   exemplo, um pedido de 2 dias atrás com preços desatualizados.
   Dentro da janela de 3h, ele pode fechar o site, voltar depois
   e continuar exatamente de onde parou.
=================================== */

const SESSAO_VALIDADE_MS = 3 * 60 * 60 * 1000; // 3 horas

function tocarSessao() {
  localStorage.setItem("sessaoAtualizadaEm", Date.now().toString());
}

function limparSessaoStorage() {
  localStorage.removeItem("carrinho");
  localStorage.removeItem("checkoutForm");
  localStorage.removeItem("pixPendente");
  localStorage.removeItem("pedidoPendenteId");
  localStorage.removeItem("sessaoAtualizadaEm");
}

function limparSessaoSeExpirada() {
  const ultimaAtividade = Number(
    localStorage.getItem("sessaoAtualizadaEm") || 0,
  );

  // Sem marca de sessão (cliente novo, ou já limpo antes) — nada a fazer.
  if (!ultimaAtividade) return;

  if (Date.now() - ultimaAtividade > SESSAO_VALIDADE_MS) {
    limparSessaoStorage();
    console.log(
      "Sessão anterior expirada (mais de 3h sem atividade) — carrinho reiniciado.",
    );
  }
}

// Salvamento de segurança: garante que carrinho e formulário fiquem
// gravados mesmo se o cliente sair da página (trocar de app, fechar
// aba, dar reload) no meio de uma ação que ainda não disparou o
// autosave normal. "pagehide" é mais confiável que "beforeunload"
// em navegadores mobile/PWA.
window.addEventListener("pagehide", () => {
  salvarCarrinho();
  salvarFormulario();
});

/* ===================================
   INIT
=================================== */

async function init() {
  // Primeiro de tudo: decide se a sessão salva ainda vale ou se
  // já passou das 3h e deve ser descartada.
  limparSessaoSeExpirada();

  await carregarDadosSupabase();

  aplicarConfiguracoesNaUI();

  carregarCarrinhoSalvo();

  renderizarProdutos(produtos);
  carregarBairros();

  // Restaura o que o cliente já tinha digitado (nome, endereço,
  // bairro, forma de pagamento...) antes de qualquer reload/queda.
  carregarFormularioSalvo();

  atualizarCarrinho();
  atualizarStatusLoja();

  renderizarMaisPedidos();
  toggleTroco();

  // Por último: se havia um PIX pendente, reabre o modal
  // (o pedido correspondente já foi salvo no Supabase quando
  // o modal PIX foi aberto pela primeira vez).
  verificarPixPendente();
}

init();
