// model
let chatMessage = "";
// view
andyView();
function andyView() {
  let html = "";
  html += `
  <div class="cryptoBot"><h2>Hei, mitt navn er CryptoBot  </h2></div>
  <div class>${chatMessage}</div>
  <label for= "input">CryptoBot</label>
  <input class="inputBox" onchange="handleBotMessage(this.value)" type="text" placeholder="Skriv Hei!">
`;
  document.getElementById("andyChat").innerHTML = html;
}

// controller

function handleBotMessage(reply) {
  let message = reply.toLowerCase();
  chatMessage += `<div class="minBox">${reply}</div>`;
  if (message.includes("hei")) {
    chatMessage += `<div class="botBox">Hei jeg er CryptoBot, vil du vite mer om crypto?</div>`;
  } else if (message.includes("ja")) {
    chatMessage += `<div class="botBox">Vil du vite mer om Ethereum eller Bitcoin?</div>`;
  } else if (message.includes("nei")) {
    chatMessage += `<div class="errorBox"> Stay broke</div>`;
  } else if (message.includes("ethereum")) {
    chatMessage += `<div class="botBox"> Ethereum er en desentralisert blokkjedeplattform som etablerer et peer-to-peer-nettverk som sikkert utfører og verifiserer applikasjonskode, kalt smarte kontrakter. Smarte kontrakter lar deltakerne handle med hverandre uten en pålitelig sentral myndighet.</div>`;
  } else if (message.includes("/clear")) {
    chatMessage = "";
  } else if (message.includes("bitcoin")) {
    chatMessage += `<div class="botBox"> Bitcoin er først og fremst designet for å være et alternativ til tradisjonelle valutaer og dermed et byttemiddel og verdilagring.</div>`;
  } else {
    chatMessage += `<div class="errorBox"> ERROR ERROR ERROR </div>`;
  }

  andyView();
}
