document.addEventListener("DOMContentLoaded", () => {
  const btnSalvarEstudo = document.getElementById("btn-salvar-estudo");
  const areaEstudos = document.getElementById("estudos-area");

  btnSalvarEstudo.addEventListener("click", () => {
    const nome = document.getElementById("estudo").value;
    const dataInicio = new Date(document.getElementById("comeco-estudo").value);
    const dataFim = new Date(document.getElementById("final-estudo").value);

    // Permitir salvar se pelo menos um campo tiver valor
    if (!nome && isNaN(dataInicio) && isNaN(dataFim)) {
      alert("Preencha pelo menos um campo para salvar!");
      return;
    }

    const hoje = new Date();
    let diasRestantes = 0;
    if (!isNaN(dataFim)) {
      diasRestantes = Math.max(Math.ceil((dataFim.getTime() - hoje.getTime()) / (1000 * 3600 * 24)), 0);
    }

    const card = document.createElement("div");
    card.classList.add("card-estudo");
    card.innerHTML = `
      <h2>${nome || "Estudo sem título"}</h2>
      ${!isNaN(dataFim) ? `<p class="prazo">📅 Conclusão em: <b>${diasRestantes} dia(s)</b></p>` : ""}
      <div class="diario">
        <p>Você estudou hoje?</p>
        <button class="btn-sim">Sim</button>
        <button class="btn-nao">Não</button>
      </div>
      <div class="historico">
        <h3>📖 Histórico</h3>
        <ul class="lista-historico"></ul>
      </div>
      <div class="acoes">
        <button class="btn-concluido"> Concluído</button>
        <button class="btn-excluir"> Excluir</button>
      </div>
    `;

    const listaHistorico = card.querySelector(".lista-historico");
    const btnSim = card.querySelector(".btn-sim");
    const btnNao = card.querySelector(".btn-nao");
    const btnConcluido = card.querySelector(".btn-concluido");
    const btnExcluir = card.querySelector(".btn-excluir");

    btnSim.addEventListener("click", () => {
      const li = document.createElement("li");
      li.textContent = `✅ Estudou em ${new Date().toLocaleDateString("pt-BR")}`;
      listaHistorico.appendChild(li);
    });

    btnNao.addEventListener("click", () => {
      const li = document.createElement("li");
      li.textContent = `❌ Não estudou em ${new Date().toLocaleDateString("pt-BR")}`;
      listaHistorico.appendChild(li);
    });

    btnConcluido.addEventListener("click", () => {
      const diasEstudados = listaHistorico.querySelectorAll("li").length;
      card.innerHTML = `
        <h2>${nome || "Estudo sem título"}</h2>
        <p>Concluído em: ${hoje.toLocaleDateString("pt-BR")}</p>
        <p>Dias estudados: ${diasEstudados}</p>
        <button class="btn-excluir"> Excluir</button>
      `;
      card.querySelector(".btn-excluir").addEventListener("click", () => card.remove());
    });

    btnExcluir.addEventListener("click", () => card.remove());

    areaEstudos.appendChild(card);

    // Resetar inputs
    document.getElementById("estudo").value = "";
    document.getElementById("comeco-estudo").value = "";
    document.getElementById("final-estudo").value = "";
  });
});
