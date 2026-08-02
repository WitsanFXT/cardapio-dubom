// =====================================
// ADMIN DUBOM
// =====================================

let filtroPedidos = "hoje";

// =====================================
// INICIALIZAÇÃO
// =====================================
document.addEventListener("DOMContentLoaded", async () => {
  await verificarLogin();

  iniciarAbas();

  await carregarEntregadores();

  carregarCategorias();

  carregarProdutos();

  carregarConfiguracoes();

  carregarPix();

  carregarHorario();

  carregarPedidos();
});

// =====================================
// VERIFICAR LOGIN
// =====================================

async function verificarLogin() {
  const {
    data: { session },
  } = await window.db.auth.getSession();

  if (!session) {
    window.location.href = "/";

    return;
  }

  console.log("ADMIN LOGADO:", session.user.email);
}

// =====================================
// LOGOUT
// =====================================

const logoutAdmin = document.getElementById("logoutAdmin");

if (logoutAdmin) {
  logoutAdmin.addEventListener("click", sair);
}

async function sair() {
  await window.db.auth.signOut();

  window.location.href = "/";
}

// =====================================
// NAVEGAÇÃO DAS ABAS
// =====================================

function iniciarAbas() {
  const botoes = document.querySelectorAll(".sidebar button[data-tab]");

  const abas = document.querySelectorAll(".aba");

  botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
      const id = botao.dataset.tab;

      abas.forEach((aba) => {
        aba.classList.remove("ativa");
      });

      const aba = document.getElementById(id);

      if (aba) {
        aba.classList.add("ativa");
      }

      botoes.forEach((btn) => {
        btn.classList.remove("ativo");
      });

      botao.classList.add("ativo");
    });
  });
}

async function carregarConfiguracao() {
  const { data, error } = await window.db
    .from("configuracoes")
    .select("*")
    .eq("id", 1)
    .single();

  if (error) {
    console.log(error);

    return;
  }

  document.getElementById("nomeLoja").value = data.nome_loja;

  document.getElementById("whatsappNumero").value = data.whatsapp_numero;

  document.getElementById("statusLoja").value = data.status_manual;
}

carregarConfiguracao();

document
  .getElementById("salvarConfig")
  .addEventListener("click", salvarConfiguracao);

async function salvarConfiguracao() {
  const dados = {
    nome_loja: document.getElementById("nomeLoja").value,

    whatsapp_numero: document.getElementById("whatsappNumero").value,

    status_manual: document.getElementById("statusLoja").value,

    updated_at: new Date(),
  };

  const { error } = await window.db

    .from("configuracoes")

    .update(dados)

    .eq("id", 1);

  if (error) {
    alert("Erro ao salvar");

    console.log(error);

    return;
  }

  alert("Configuração salva!");
}

// =====================================
// CATEGORIAS
// =====================================

carregarCategorias();

async function carregarCategorias() {
  const { data, error } = await window.db

    .from("categorias")

    .select("*")

    .order("ordem", {
      ascending: true,
    });

  if (error) {
    console.log(error);

    return;
  }

  const lista = document.getElementById("listaCategorias");

  lista.innerHTML = "";

  data.forEach((cat) => {
    lista.innerHTML += `

<div class="card-admin">


<h3>
${cat.nome}
</h3>


<p>
Ordem:
${cat.ordem}
</p>


<p>

${cat.ativo ? "Ativa" : "Inativa"}

</p>


</div>

`;
  });

  preencherCategoriasProduto(data);
}

function preencherCategoriasProduto(categorias) {
  const select = document.getElementById("produtoCategoria");

  if (!select) return;

  select.innerHTML = `
<option value="">
Selecione categoria
</option>
`;

  categorias.forEach((cat) => {
    if (cat.ativo) {
      select.innerHTML += `

<option value="${cat.id}">

${cat.nome}

</option>

`;
    }
  });
}

// =====================================
// CATEGORIAS
// =====================================

let categorias = [];

async function carregarCategorias() {
  const { data, error } = await window.db

    .from("categorias")

    .select("*")

    .order("ordem", {
      ascending: true,
    });

  if (error) {
    console.log("Erro categorias:", error);

    return;
  }

  categorias = data;

  mostrarCategorias();

  preencherSelectCategorias();
}

function mostrarCategorias() {
  const lista = document.getElementById("listaCategorias");

  if (!lista) return;

  lista.innerHTML = "";

  categorias.forEach((cat) => {
    lista.innerHTML += `

<div class="categoria-card">


    <div class="categoria-header">


        <div class="categoria-icon">

            🍖

        </div>


        <div class="categoria-info">

            <h3>
                ${cat.nome}
            </h3>


            <span>
                Ordem ${cat.ordem}
            </span>

        </div>



        <span class="categoria-status 
        ${cat.ativo ? "ativo" : "inativo"}">

            ${cat.ativo ? "Ativa" : "Inativa"}

        </span>


    </div>




    <div class="categoria-footer">


        <button

        class="btn-editar"

        onclick="editarCategoria(${cat.id})">

            ✏️ Editar

        </button>




        <button

        class="btn-status"

        onclick="alterarStatusCategoria(${cat.id}, ${cat.ativo})">

            ${cat.ativo ? "🔴 Desativar" : "🟢 Ativar"}

        </button>



    </div>



</div>


`;
  });
}

function preencherSelectCategorias() {
  const select = document.getElementById("produtoCategoria");

  if (!select) return;

  select.innerHTML = `

<option value="">
Selecione categoria
</option>

`;

  categorias.forEach((cat) => {
    if (cat.ativo) {
      select.innerHTML += `

<option value="${cat.id}">

${cat.nome}

</option>

`;
    }
  });
}

// =====================================
// CADASTRAR CATEGORIA
// =====================================

const btnCategoria = document.getElementById("btnCategoria");

if (btnCategoria) {
  btnCategoria.addEventListener("click", salvarCategoria);
}

async function salvarCategoria() {
  const nome = document.getElementById("novaCategoria").value.trim();

  const ordem = Number(document.getElementById("ordemCategoria").value);

  if (!nome) {
    alert("Digite o nome da categoria");

    return;
  }

  const categoria = {
    nome,

    ordem: ordem || 0,

    ativo: true,
  };

  const { error } = await window.db

    .from("categorias")

    .insert(categoria);

  if (error) {
    console.log(error);

    alert("Erro ao cadastrar categoria");

    return;
  }

  alert("Categoria criada!");

  document.getElementById("novaCategoria").value = "";

  document.getElementById("ordemCategoria").value = "";

  carregarCategorias();
}

async function editarCategoria(id) {
  const categoria = categorias.find((cat) => cat.id === id);

  if (!categoria) return;

  const novoNome = prompt("Novo nome:", categoria.nome);

  if (!novoNome) return;

  const { error } = await window.db

    .from("categorias")

    .update({
      nome: novoNome,
    })

    .eq("id", id);

  if (error) {
    console.log(error);

    alert("Erro ao editar");

    return;
  }

  carregarCategorias();
}

async function alterarStatusCategoria(id, statusAtual) {
  const { error } = await window.db

    .from("categorias")

    .update({
      ativo: !statusAtual,
    })

    .eq("id", id);

  if (error) {
    console.log(error);

    return;
  }

  carregarCategorias();
}

// =====================================
// PRODUTOS
// =====================================

const salvarProduto = document.getElementById("salvarProduto");

if (salvarProduto) {
  salvarProduto.addEventListener("click", cadastrarProduto);
}

async function cadastrarProduto() {
  const nome = document.getElementById("produtoNome").value.trim();

  const descricao = document.getElementById("produtoDescricao").value.trim();

  const preco = Number(document.getElementById("produtoPreco").value);

  const categoria_id = Number(
    document.getElementById("produtoCategoria").value,
  );

  const imagem_url = document.getElementById("produtoImagem").value.trim();

  const precisa_espetinho = document.getElementById("produtoEspetinho").checked;

  const ativo = document.getElementById("produtoAtivo").checked;

  if (!nome || !categoria_id || !preco) {
    alert("Preencha nome, categoria e preço");

    return;
  }

  const produto = {
    nome,

    descricao,

    preco,

    categoria_id,

    imagem_url,

    precisa_espetinho,

    ativo,
  };

  const { error } = await window.db

    .from("produtos")

    .insert(produto);

  if (error) {
    console.log(error);

    alert("Erro ao salvar produto");

    return;
  }

  alert("Produto cadastrado!");

  limparProduto();

  carregarProdutos();
}

function limparProduto() {
  document.getElementById("produtoNome").value = "";

  document.getElementById("produtoDescricao").value = "";

  document.getElementById("produtoPreco").value = "";

  document.getElementById("produtoCategoria").value = "";

  document.getElementById("produtoImagem").value = "";

  document.getElementById("produtoEspetinho").checked = false;

  document.getElementById("produtoAtivo").checked = true;
}

let produtos = [];

async function carregarProdutos() {
  const {
    data,

    error,
  } = await window.db

    .from("produtos")

    .select(
      `
*,
categorias(
nome
)
`,
    )

    .order("id", {
      ascending: false,
    });

  if (error) {
    console.log(error);

    return;
  }

  produtos = data;

  mostrarProdutos();
}

function mostrarProdutos() {
  const lista = document.getElementById("listaProdutos");

  if (!lista) return;

  lista.innerHTML = "";

  produtos.forEach((produto) => {
    lista.innerHTML += `


<div class="produto-card">


<div class="produto-imagem">

<img src="${produto.imagem_url || "./img/sem-imagem.png"}">

</div>



<div class="produto-info">


<h3>
${produto.nome}
</h3>



<p>
${produto.categorias?.nome || ""}
</p>



<strong>
R$ ${produto.preco.toFixed(2)}
</strong>



<span class="categoria-status ${produto.ativo ? "ativo" : "inativo"}">

${produto.ativo ? "Ativo" : "Inativo"}

</span>


</div>



<div class="produto-acoes">


<button
class="btn-editar"
onclick="editarProduto(${produto.id})">

✏️ Editar

</button>



<button
class="btn-status"
onclick="alterarStatusProduto(${produto.id}, ${produto.ativo})">

${produto.ativo ? "🔴 Desativar" : "🟢 Ativar"}

</button>



<button
class="btn-excluir"
onclick="excluirProduto(${produto.id})">

🗑️ Excluir

</button>


</div>



</div>


`;
  });
}

async function editarProduto(id) {
  const produto = produtos.find((p) => p.id === id);

  if (!produto) return;

  const novoNome = prompt("Nome do produto:", produto.nome);

  if (!novoNome) return;

  const novoPreco = prompt("Preço:", produto.preco);

  if (!novoPreco) return;

  const novaDescricao = prompt("Descrição:", produto.descricao || "");

  const { error } = await window.db

    .from("produtos")

    .update({
      nome: novoNome,

      preco: Number(novoPreco),

      descricao: novaDescricao,
    })

    .eq("id", id);

  if (error) {
    console.log(error);

    alert("Erro ao editar produto");

    return;
  }

  alert("Produto atualizado!");

  carregarProdutos();
}

async function alterarStatusProduto(id, statusAtual) {
  const { error } = await window.db

    .from("produtos")

    .update({
      ativo: !statusAtual,
    })

    .eq("id", id);

  if (error) {
    console.log(error);

    alert("Erro ao alterar status");

    return;
  }

  carregarProdutos();
}

async function excluirProduto(id) {
  const confirmar = confirm("Deseja excluir este produto?");

  if (!confirmar) return;

  const { error } = await window.db

    .from("produtos")

    .delete()

    .eq("id", id);

  if (error) {
    console.log(error);

    alert("Erro ao excluir");

    return;
  }

  alert("Produto removido!");

  carregarProdutos();
}

// carrega os campos da aba PIX (essa função antes tinha o mesmo nome de
// carregarConfiguracoes() lá embaixo, então nunca era executada — os campos
// de PIX nunca eram preenchidos ao abrir a aba. Renomeada para não colidir.)
async function carregarPix() {
  const { data, error } = await window.db
    .from("configuracoes")
    .select("*")
    .eq("id", 1)
    .single();

  if (error) {
    console.log(error);
    return;
  }

  document.getElementById("pixChave").value = data.pix_chave || "";
  document.getElementById("pixTitular").value = data.pix_titular || "";
  document.getElementById("pixBanco").value = data.pix_banco || "";
}

async function salvarPix() {
  const pix_chave = document.getElementById("pixChave").value;

  const pix_titular = document.getElementById("pixTitular").value;

  const pix_banco = document.getElementById("pixBanco").value;

  const { error } = await window.db
    .from("configuracoes")
    .update({
      pix_chave,
      pix_titular,
      pix_banco,
      updated_at: new Date(),
    })
    .eq("id", 1);

  if (error) {
    alert("Erro ao salvar");

    console.log(error);

    return;
  }

  alert("PIX atualizado com sucesso");
}

document.getElementById("salvarPix").addEventListener("click", salvarPix);

async function carregarConfiguracoes() {
  const { data, error } = await window.db
    .from("configuracoes")
    .select("*")
    .eq("id", 1)
    .single();

  if (error) {
    console.log(error);
    return;
  }

  document.getElementById("nomeLoja").value = data.nome_loja || "";

  document.getElementById("whatsappNumero").value = data.whatsapp_numero || "";

  document.getElementById("enderecoLoja").value = data.endereco || "";

  document.getElementById("statusLoja").value = data.status_manual || "auto";
}

document
  .getElementById("salvarConfig")
  .addEventListener("click", salvarConfiguracoes);

async function salvarConfiguracoes() {
  const nomeLoja = document.getElementById("nomeLoja").value;

  const whatsappNumero = document.getElementById("whatsappNumero").value;

  const enderecoLoja = document.getElementById("enderecoLoja").value;

  const statusLoja = document.getElementById("statusLoja").value;

  // ==========================
  // CONFIGURAÇÕES
  // ==========================

  const { error: erroConfig } = await window.db
    .from("configuracoes")
    .update({
      nome_loja: nomeLoja,
      whatsapp_numero: whatsappNumero,
      endereco_loja: enderecoLoja,
      status_manual: statusLoja,
    })
    .eq("id", 1);

  if (erroConfig) {
    console.error(erroConfig);
    alert("Erro ao salvar configurações");
    return;
  }

  // ==========================
  // HORÁRIOS
  // (salvarHorarios já lê os inputs abre-X/fecha-X/ativo-X de cada
  // linha renderizada em #listaHorarios — reaproveitado aqui em vez de
  // duplicar a lógica com variáveis que não existiam)
  // ==========================

  const erroHorario = await salvarHorarios();

  if (erroHorario) {
    alert("Configurações salvas, mas houve erro ao salvar horários");
    return;
  }

  alert("Configurações salvas com sucesso");
}

async function carregarHorario() {
  const { data, error } = await window.db
    .from("horarios_funcionamento")
    .select("*")
    .order("dia_semana");

  if (error) {
    console.log(error);
    return;
  }

  const dias = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];

  const lista = document.getElementById("listaHorarios");

  lista.innerHTML = "";

  data.forEach((dia) => {
    lista.innerHTML += `

    <div class="horario-card">

      <h3>${dias[dia.dia_semana]}</h3>

      <input
        type="time"
        id="abre-${dia.dia_semana}"
        value="${dia.hora_abertura.substring(0, 5)}"
      >

      <input
        type="time"
        id="fecha-${dia.dia_semana}"
        value="${dia.hora_fechamento.substring(0, 5)}"
      >

      <label>

        <input
          type="checkbox"
          id="ativo-${dia.dia_semana}"
          ${dia.ativo ? "checked" : ""}
        >

        Aberto

      </label>

    </div>

    `;
  });
}

async function salvarHorarios() {
  for (let dia = 0; dia <= 6; dia++) {
    const campoAbre = document.getElementById(`abre-${dia}`);
    const campoFecha = document.getElementById(`fecha-${dia}`);
    const campoAtivo = document.getElementById(`ativo-${dia}`);

    if (!campoAbre || !campoFecha || !campoAtivo) continue;

    const { error } = await window.db
      .from("horarios_funcionamento")
      .update({
        hora_abertura: campoAbre.value,
        hora_fechamento: campoFecha.value,
        ativo: campoAtivo.checked,
      })
      .eq("dia_semana", dia);

    if (error) {
      console.error(error);
      return error;
    }
  }

  return null;
}

let entregadores = [];

// Mapeia o status interno do pedido para um texto amigável — inclui os
// status "aguardando pagamento" e "aguardando confirmação PIX" gravados
// pelo cardápio antes mesmo do cliente terminar de enviar o pedido pelo
// WhatsApp. A cor de cada status é definida no CSS (classe .status.<status>).
function textoStatusPedido(status) {
  const mapa = {
    aguardando_pagamento: "💳 Aguardando PIX",

    aguardando_entregador: "🛵 Aguardando Entregador",

    em_preparo: "👨‍🍳 Em Preparo",

    saiu_para_entrega: "🚚 Saiu para Entrega",

    entregue: "✅ Entregue",

    cancelado: "❌ Cancelado",
  };

  return mapa[status] || status;
}

// Monta um link direto pro WhatsApp do cliente (assume DDI 55 quando
// o número não veio com ele) para o admin conseguir chamar mesmo que
// o pedido nunca tenha sido enviado pelo cliente.
function linkWhatsappCliente(numero) {
  const digitos = (numero || "").replace(/\D/g, "");
  if (!digitos) return null;
  const comDDI = digitos.startsWith("55") ? digitos : `55${digitos}`;
  return `https://wa.me/${comDDI}`;
}

function escapeHtml(texto) {
  if (texto === null || texto === undefined) return "";
  return String(texto)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function filtrarPedidos(filtro) {
  filtroPedidos = filtro;

  document
    .querySelectorAll(".filtros-pedidos button")
    .forEach((btn) => btn.classList.remove("ativo"));

  event.target.classList.add("ativo");

  carregarPedidos();
}

window.filtrarPedidos = filtrarPedidos;

async function carregarPedidos() {
  // Busca os pedidos junto com os itens de cada um (join pela FK
  // pedido_id em itens_pedido), assim o admin vê exatamente o que o
  // cliente montou no carrinho — mesmo que ele nunca tenha finalizado.
  const { data: pedidos, error } = await window.db
    .from("pedidos")
    .select("*, itens_pedido(*)")
    .order("id", { ascending: false });

  if (error) {
    console.error(error);
    return;
  }

  const container = document.getElementById("listaPedidos");

  let pedidosFiltrados = pedidos;

  console.log("Filtro:", filtroPedidos, "Pedidos:", pedidos.length);

  if (filtroPedidos === "hoje") {
    const hoje = new Date();

    pedidosFiltrados = pedidos.filter((p) => {
      const data = new Date(p.created_at);

      return (
        data.getDate() === hoje.getDate() &&
        data.getMonth() === hoje.getMonth() &&
        data.getFullYear() === hoje.getFullYear()
      );
    });
  }

  if (filtroPedidos === "semana") {
    const hoje = new Date();

    const inicioSemana = new Date(hoje);

    const dia = hoje.getDay();

    const diferenca = dia === 0 ? 6 : dia - 1;

    inicioSemana.setDate(hoje.getDate() - diferenca);

    inicioSemana.setHours(0, 0, 0, 0);

    pedidosFiltrados = pedidos.filter((p) => {
      const dataPedido = new Date(p.created_at);

      return dataPedido >= inicioSemana;
    });
  }

  if (filtroPedidos === "mes") {
    const hoje = new Date();

    const trintaDiasAtras = new Date();

    trintaDiasAtras.setDate(hoje.getDate() - 30);

    pedidosFiltrados = pedidos.filter((p) => {
      const dataPedido = new Date(p.created_at);

      return dataPedido >= trintaDiasAtras;
    });
  }

  container.innerHTML = "";

  pedidosFiltrados.forEach((pedido) => {
    const statusTexto = textoStatusPedido(pedido.status);

    const itens = pedido.itens_pedido || [];

    const listaItensHtml = itens.length
      ? `
        <ul class="itens-pedido">
          ${itens
            .map(
              (item) => `
            <li>
              ${item.quantidade}x ${escapeHtml(item.produto_nome)}
              ${item.espetinho ? ` — Espetinho: ${escapeHtml(item.espetinho)}` : ""}
              ${item.observacao ? ` — Obs: ${escapeHtml(item.observacao)}` : ""}
            </li>
          `,
            )
            .join("")}
        </ul>
      `
      : `<p class="itens-pedido-vazio">Nenhum item registrado.</p>`;

    const linkWhats = linkWhatsappCliente(pedido.cliente_whatsapp);

    // "pago" continua sendo o pagamento recebido NA ENTREGA (dinheiro
    // ou cartão, coletado pelo entregador). "pix_confirmado" é um campo
    // separado — só existe pra pedidos pagos via PIX, e é o admin quem
    // confirma olhando o extrato do banco. São coisas diferentes: um
    // pedido no PIX não tem nada pro entregador cobrar, e um pedido em
    // dinheiro não passa pelo banco.

    container.innerHTML += `
        
        <div class="pedido-card">

            <div class="pedido-topo">

                <h3>
                    Pedido #${pedido.id}${pedido.codigo ? ` <span class="pedido-codigo">(${escapeHtml(pedido.codigo)})</span>` : ""}
                </h3>

                

            </div>


            <p>
                <strong>WhatsApp:</strong>
                <span>
                    ${escapeHtml(pedido.cliente_whatsapp)}
                    ${linkWhats ? `<a class="link-whatsapp" href="${linkWhats}" target="_blank" rel="noopener">💬 Chamar no WhatsApp</a>` : ""}
                </span>
            </p>

            <div class="pedido-comanda">

    <div class="comanda-topo">

        <h2>PEDIDO #${pedido.id}</h2>

        <span>
            ${new Date(pedido.created_at).toLocaleString("pt-BR")}
        </span>

    </div>

    <div class="linha"></div>

    <div class="cliente">

        <h4>DADOS DO CLIENTE</h4>

        <p>
            <strong>Nome:</strong>
            ${pedido.cliente_nome || "-"}
        </p>

        <p>
            <strong>Telefone:</strong>
            ${pedido.cliente_whatsapp || "-"}
        </p>

        <p>
            <strong>Endereço:</strong>
            ${pedido.endereco || "-"}
        </p>

        <p>
            <strong>Bairro:</strong>
            ${pedido.bairro || "-"}
        </p>

    </div>

    <div class="linha"></div>

    <div class="itens">

        <h4>ITENS DO PEDIDO</h4>

        ${listaItensHtml}

    </div>

    <div class="linha"></div>

    <div class="resumo">

        <p>
            Subtotal:
            <strong>
                R$ ${Number(pedido.subtotal || 0).toFixed(2)}
            </strong>
        </p>

        <p>
            Entrega:
            <strong>
                R$ ${Number(pedido.taxa_entrega || 0).toFixed(2)}
            </strong>
        </p>

        <p class="total">

            TOTAL

            <strong>
                R$ ${Number(pedido.total || 0).toFixed(2)}
            </strong>

        </p>

    </div>

    <div class="linha"></div>

    <div class="pagamento">

        <h4>PAGAMENTO</h4>

        <p>
            ${pedido.forma_pagamento || "-"}
        </p>

    </div>

</div>

        </div>

        `;
  });
}

document
  .getElementById("btnNovoEntregador")
  .addEventListener("click", criarEntregador);

async function criarEntregador() {
  const nome = document.getElementById("novoEntregador").value.trim();

  if (!nome) {
    alert("Digite o nome");
    return;
  }

  const { error } = await window.db.from("entregadores").insert({
    nome,
  });

  if (error) {
    console.error(error);
    return;
  }

  document.getElementById("novoEntregador").value = "";

  carregarPedidos();
}

async function carregarEntregadores() {
  const { data, error } = await window.db
    .from("entregadores")
    .select("*")
    .order("nome");

  if (error) {
    console.error(error);
    return;
  }

  entregadores = data;

  mostrarEntregadores();
}

function mostrarEntregadores() {
  const lista = document.getElementById("listaEntregadores");

  if (!lista) return;

  lista.innerHTML = "";

  entregadores.forEach((ent) => {
    lista.innerHTML += `
      <div class="entregador-item">
        <span>${ent.nome}</span>
      </div>
    `;
  });
}

document.getElementById("salvarTema")?.addEventListener("click", salvarTema);

async function salvarTema() {
  const cor_principal = document.getElementById("corPrincipal").value;

  const cor_secundaria = document.getElementById("corSecundaria").value;

  const { error } = await window.db
    .from("configuracoes")
    .update({
      cor_principal,
      cor_secundaria,
    })
    .eq("id", 1);

  if (error) {
    console.error(error);
    alert("Erro ao salvar tema");
    return;
  }

  alert("Tema salvo com sucesso!");
}

carregarPedidos();

setInterval(carregarPedidos, 5000);
