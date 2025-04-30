
const form = document.getElementById("inscricao");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Impede que a página recarregue ao envia

  const nome = document.getElementById("nome").value.trim();
  const idade = parseInt(document.getElementById("idade").value);

  const diasSelecionados = Array.from(
    form.querySelectorAll('input[type="checkbox"]:checked')
  ).map((cb) => cb.value);

  if (!nome || isNaN(idade) || idade < 16) {
    mensagem.textContent =
      "Preencha o nome corretamente e insira uma idade valida (minimo 16 anos).";
    mensagem.className = "mensagem mensagem-erro";
    return;
  }

  mensagem.className = "mensagem mensagem-sucesso";
  mensagem.textContent = `Obrigado, ${nome}! Você foi inscrito(a) com sucesso para os dias: ${diasSelecionados.join(
    ", "
  )}.`;
});
