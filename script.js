let aulaAtual = "Hoje vamos aprender o básico de Inteligência Artificial de forma simples e prática.";

function iniciarCurso() {
  document.getElementById("textoAula").innerText = aulaAtual;
  window.scrollTo({ top: 600, behavior: "smooth" });
}

function falarAula() {
  let msg = new SpeechSynthesisUtterance(aulaAtual);

  msg.lang = "pt-BR";
  msg.rate = 0.95; // mais natural
  msg.pitch = 1;

  // tentar voz mais natural disponível
  let vozes = speechSynthesis.getVoices();
  let vozBR = vozes.find(v => v.lang.includes("pt"));

  if (vozBR) msg.voice = vozBR;

  speechSynthesis.speak(msg);
}

function enviarMensagem() {
  let input = document.getElementById("inputChat");
  let msg = input.value;

  if (!msg) return;

  let div = document.createElement("div");
  div.innerText = "Você: " + msg;

  document.getElementById("mensagens").appendChild(div);

  let resposta = document.createElement("div");
  resposta.innerText = "Professor IA: Essa é uma ótima pergunta! Vou te explicar isso de forma simples.";
  
  document.getElementById("mensagens").appendChild(resposta);

  input.value = "";
}
