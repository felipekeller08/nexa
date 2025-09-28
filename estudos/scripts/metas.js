document.addEventListener("DOMContentLoaded", () => {
  const btnSalvarMeta = document.getElementById("btn-salvar-meta");
  const areaMetas = document.getElementById("metas-area");

  btnSalvarMeta.addEventListener("click", () => {
    const nomeMeta = document.getElementById("meta").value;
    const dataInicio = new Date(document.getElementById("comeco-meta").value);
    const dataFim = new Date(document.getElementById("final-meta").value);

    // Permitir salvar se pelo menos um campo tiver valor
    if (!nomeMeta && isNaN(dataInicio) && isNaN(dataFim)) {
      alert("Preencha pelo menos um campo para salvar!");
      return;
    }

    const diffTime = !isNaN(dataFim) && !isNaN(dataInicio) ? Math.max(Math.ceil((dataFim.getTime() - dataInicio.getTime()) / (1000*3600*24)), 0) : 0;

    const card = document.createElement("div");
    card.classList.add("card-meta");
    card.innerHTML = `
      <h2>${nomeMeta || "Meta sem título"}</h2>
      <p>Deseja marcar esta meta como concluída?</p>
      <button class="btn-sim-meta">Sim</button>
      <button class="btn-nao-meta">Não</button>
    `;

    const btnSimMeta = card.querySelector(".btn-sim-meta");
    const btnNaoMeta = card.querySelector(".btn-nao-meta");

    btnSimMeta.addEventListener("click", () => {
      const hoje = new Date();
      const diffDias = !isNaN(dataInicio) ? Math.max(Math.ceil((hoje.getTime() - dataInicio.getTime()) / (1000 * 3600 * 24)), 0) : 0;
      card.innerHTML = `
        <h2>${nomeMeta || "Meta sem título"} ✅</h2>
        <p>Concluído em ${diffDias} dia(s)</p>
      `;
    });

    btnNaoMeta.addEventListener("click", () => card.remove());

    areaMetas.appendChild(card);

    // Resetar inputs
    document.getElementById("meta").value = "";
    document.getElementById("comeco-meta").value = "";
    document.getElementById("final-meta").value = "";
  });
});
