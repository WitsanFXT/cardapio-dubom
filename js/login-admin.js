// ======================================
// LOGIN ADMIN OCULTO
// ======================================

let contadorCliquesLogo = 0;

const logoLoja = document.getElementById("logoLoja");

console.log("Logo:", logoLoja);

const modalAdmin = document.getElementById("modalAdmin");

const fecharModalAdmin = document.getElementById("fecharModalAdmin");

const btnLoginAdmin = document.getElementById("btnLoginAdmin");

const erroAdmin = document.getElementById("erroAdmin");

// ======================
// 5 CLIQUES
// ======================

logoLoja.addEventListener("click", () => {
  contadorCliquesLogo++;

  console.log("CLIQUE", contadorCliquesLogo);

  if (contadorCliquesLogo >= 5) {
    console.log("ABRINDO MODAL");

    modalAdmin.classList.add("ativo");

    contadorCliquesLogo = 0;
  }
});

// ======================
// FECHAR
// ======================

fecharModalAdmin.addEventListener("click", () => {
  modalAdmin.classList.remove("ativo");
});

// ======================
// CLICK FORA
// ======================

modalAdmin.addEventListener("click", (e) => {
  if (e.target === modalAdmin) {
    modalAdmin.classList.remove("ativo");
  }
});

// ======================
// LOGIN
// ======================

btnLoginAdmin.addEventListener("click", loginAdmin);

async function loginAdmin() {
  try {
    erroAdmin.textContent = "";

    const email = document.getElementById("adminEmail").value;

    const senha = document.getElementById("adminSenha").value;

    const { data, error } = await window.db.auth.signInWithPassword({
      email,
      password: senha,
    });

    if (error) {
      erroAdmin.textContent = error.message;

      return;
    }

    window.location.href = "/admin.html";
  } catch (err) {
    console.error(err);

    erroAdmin.textContent = "Erro ao realizar login.";
  }
}
