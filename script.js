document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-item");

  function onScroll() {
    let scrollPos = window.scrollY + 120; // ajuste para header fixo
    sections.forEach((section) => {
      if (
        scrollPos >= section.offsetTop &&
        scrollPos < section.offsetTop + section.offsetHeight
      ) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === "#" + section.id) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", onScroll);
});

// Exemplo de como chamar a API (dentro de uma função no seu script.js)
async function realizarSimulacao(dadosFormulario) {
  try {
    const response = await fetch("/simular-creditos", {
      // URL do seu endpoint Flask/Node
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dadosFormulario),
    });

    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }

    const resultado = await response.json();

    // Atualizar a UI com os resultados:
    // Ex: document.getElementById('resultadoMin').textContent = resultado.estimativaCreditoMin;
    // Ex: document.getElementById('resultadoMax').textContent = resultado.estimativaCreditoMax;
    // Ex: document.getElementById('mensagemSimulacao').textContent = resultado.mensagemInformativa;
    console.log(resultado); // Para depuração
  } catch (error) {
    console.error("Falha ao realizar simulação:", error);
    // Exibir mensagem de erro na UI
  }
}

// Exemplo de como pegar dados do formulário e chamar a função:
// const form = document.getElementById('formSimulacao');
// form.addEventListener('submit', event => {
//   event.preventDefault();
//   const dados = {
//     regimeFiscal: document.getElementById('regime').value,
//     porteEmpresa: document.getElementById('porte').value,
//     faturamentoAnual: parseFloat(document.getElementById('faturamento').value)
//   };
//   realizarSimulacao(dados);
// });
