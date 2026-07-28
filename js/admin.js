// =====================================
// ADMIN DUBOM
// =====================================

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

async function carregarConfiguracoesHorario() {
  const { data: horarios } = await window.db
    .from("horarios_funcionamento")
    .select("*")
    .order("dia_semana");

  const lista = document.getElementById("listaHorarios");

  lista.innerHTML = "";

  const dias = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];

  horarios.forEach((h) => {
    lista.innerHTML += `
      <div class="card-admin horario-item">

        <h3>${dias[h.dia_semana]}</h3>

        <label>
          <input
            type="checkbox"
            ${h.ativo ? "checked" : ""}
            onchange="alterarDia(${h.dia_semana}, this.checked)"
          >
          Aberto
        </label>

        <input
          type="time"
          value="${h.hora_abertura.substring(0, 5)}"
          onchange="alterarHoraAbertura(${h.dia_semana}, this.value)"
        >

        <input
          type="time"
          value="${h.hora_fechamento.substring(0, 5)}"
          onchange="alterarHoraFechamento(${h.dia_semana}, this.value)"
        >

      </div>
    `;
  });
}

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

  document.getElementById("pixChave").value = data.pix_chave || "";

  document.getElementById("pixTitular").value = data.pix_titular || "";

  document.getElementById("pixBanco").value = data.pix_banco || "";

  document.getElementById("corPrincipal").value =
    data.cor_principal || "#ff6b00";

  document.getElementById("corSecundaria").value =
    data.cor_secundaria || "#111111";
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

async function carregarHorario() {
  const { data, error } = await window.db
    .from("horarios_funcionamento")
    .select("*")
    .eq("id", 1)
    .single();

  if (error) {
    console.log(error);
    return;
  }
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
  // ==========================

  const horarios = [];

  for (let dia = 0; dia <= 6; dia++) {
    horarios.push({
      dia_semana: dia,
      ativo: true,
      hora_abertura: horaAbre,
      hora_fechamento: horaFecha,
    });
  }

  const { error: erroHorario } = await window.db
    .from("horarios_funcionamento")
    .upsert(horarios);

  if (erroHorario) {
    console.error(erroHorario);
    alert("Erro ao salvar horários");
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
    const hora_abertura = document.getElementById(`abre-${dia}`).value;

    const hora_fechamento = document.getElementById(`fecha-${dia}`).value;

    const ativo = document.getElementById(`ativo-${dia}`).checked;

    await window.db
      .from("horarios_funcionamento")
      .update({
        hora_abertura,
        hora_fechamento,
        ativo,
      })
      .eq("dia_semana", dia);
  }
}

let entregadores = [];

async function carregarPedidos() {
  const { data: pedidos, error } = await window.db
    .from("pedidos")
    .select("*")
    .order("id", { ascending: false });

  if (error) {
    console.error(error);
    return;
  }

  const container = document.getElementById("listaPedidos");

  container.innerHTML = "";

  pedidos.forEach((pedido) => {
    const opcoes = entregadores
      .map(
        (ent) => `
      <option
        value="${ent.nome}"
        ${pedido.entregador === ent.nome ? "selected" : ""}
      >
        ${ent.nome}
      </option>
    `,
      )
      .join("");
    container.innerHTML += `
        
        <div class="pedido-card">

            <div class="pedido-topo">

                <h3>
                    Pedido #${pedido.id}
                </h3>

                <span class="status ${pedido.status}">
                    ${pedido.status}
                </span>

            </div>

            <p>
                <strong>Cliente:</strong>
                ${pedido.cliente_nome}
            </p>

            <p>
                <strong>WhatsApp:</strong>
                ${pedido.cliente_whatsapp}
            </p>

            <p>
                <strong>Total:</strong>
                R$ ${Number(pedido.total).toFixed(2)}
            </p>

            <p>
                <strong>Entregador:</strong>
                ${pedido.entregador || "Não definido"}
            </p>

            <p>
                <strong>Pagamento:</strong>
                ${pedido.pago ? "✅ Pago" : "❌ Pendente"}
            </p>

            <div class="acoes-pedido">

                <select
  onchange="atribuirEntregador(${pedido.id}, this.value)"
>
  <option value="">
    Selecione
  </option>

  ${opcoes}
</select>

                <button
                    onclick="marcarPago(${pedido.id})"
                >
                    Marcar Pago
                </button>

            </div>

        </div>

        `;
  });
}

async function atribuirEntregador(pedidoId, entregador) {
  await window.db
    .from("pedidos")
    .update({
      entregador,
    })
    .eq("id", pedidoId);

  carregarPedidos();
}

window.atribuirEntregador = atribuirEntregador;

async function marcarPago(pedidoId) {
  await window.db
    .from("pedidos")
    .update({
      pago: true,
    })
    .eq("id", pedidoId);

  carregarPedidos();
}

window.marcarPago = marcarPago;

function mostrarPedidos(pedidos) {
  const lista = document.getElementById("listaPedidos");

  lista.innerHTML = "";

  pedidos.forEach((pedido) => {
    lista.innerHTML += `

   <div class="card-admin pedido-card">

      <h3>

      #${pedido.codigo}

      </h3>

      <p>

      Cliente:
      ${pedido.cliente_nome}

      </p>

      <p>

      WhatsApp:
      ${pedido.cliente_whatsapp}

      </p>

      <p>

      Total:
      R$ ${Number(pedido.total).toFixed(2)}

      </p>

      <p>

      Status:
      ${pedido.status}

      </p>

      <button
       onclick="
       verPedido(
       ${pedido.id}
       )">

       Ver Pedido

      </button>

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

window.addEventListener("DOMContentLoaded", () => {
  carregarConfiguracoesHorario();
});

carregarPedidos();

setInterval(carregarPedidos, 5000);
