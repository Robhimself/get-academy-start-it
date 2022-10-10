//Model
let writtenChat = "";
let robertChatMsg = "";
let robertChatreplies = [
  "Hei, og velkommen til en halvferdig ChatBot. Vil du høre en vits? 'ja/nei'",
  "Hyggelig at du tester meg. Vil du høre en vits? svar 'ja/nei'",
  "Katta til Fritz...",
  "Jeg regnet ut oddsen for ditt svar, og jeg kan bekrefte at du er klassifisert som 'kjedelig'.",
  "Humor er ikke for alle",
  "Er du ferdig alt?",
  "Hva er det du skriver?",
];

//View
robertView();
function robertView() {
  let html = "";
  html += /*HTML*/ `
    
        <div style="display: flex;
          flex-direction: column;
          justify-content: flex-end;
          overflow: 0;
          min-height: 580px;
          width: 90%;
          background: linear-gradient(0.25turn, #cbb26a, white, #cbb26a);
          border-radius: 5px;
          margin: 10px;
          padding: 5px;">${robertChatMsg}
        </div>

        <div  style="height: 25px;
          width: 90%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          margin: 0;
          padding: 0;">

          <div style="
          display: flex;
          justify-content: center;
          height: 20px;
          width: 99%;
          margin: 0;
          padding: 0;">
          <input type="text" placeholder="Skriv hei for å starte..." class="robertChatInput" onchange="robertInput(this.value)"></input></div>
        </div>
        


    `;
  document.getElementById("robertChat").innerHTML = html;
}

//Controller

function robertInput(robertText) {
  //skrive noe, sende til writtenchat, sanitere, .includes deretter writtenChat = robertRobotReply
  writeToChat(robertText);
  if (robertText.toLowerCase().includes("hei", "hallo")) {
    robertRobotReply(robertChatreplies[0]);
    //setInterval(robertRobotReply(robertChatreplies[5]), 3000);
    //clearInterval();
  } else if (robertText.toLowerCase().includes("takk", "thanks")) {
    robertRobotReply(robertChatreplies[1]);
  } else if (robertText.toLowerCase().includes("ja", "yes")) {
    robertRobotReply(robertChatreplies[2]);
  } else if (robertText.toLowerCase().includes("nei", "no")) {
    robertRobotReply(robertChatreplies[3]);
  } else if (
    robertText.toLowerCase().includes("dårlig") //, "dust", "suger", "mora", "ræva", "dritt")
  ) {
    robertRobotReply(robertChatreplies[4]);
    // } else if (robertText.toLowerCase().includes("hei" || "hallo")) {
    //   robertRobotReply(robertChatreplies[5]);
    // } else if (robertText.toLowerCase().includes("hei" || "hallo")) {
    //   robertRobotReply(robertChatreplies[6]);
    // } else if (robertText.toLowerCase().includes("hei" || "hallo")) {
    //   robertRobotReply(robertChatreplies[7]);
    // } else if (robertText.toLowerCase().includes("hei" || "hallo")) {
    //   robertRobotReply(robertChatreplies[8]);
    // } else if (robertText.toLowerCase().includes("hei" || "hallo")) {
    //   robertRobotReply(robertChatreplies[9]);
    // } else if (robertText.toLowerCase().includes("hei" || "hallo")) {
    //   robertRobotReply(robertChatreplies[10]);
  } else {
    robertRobotReply(robertChatreplies[6]);
  }
}
function writeToChat(words) {
  robertChatMsg += `<div class="userReplies">${words}</div>`;
  robertView();
}

function robertRobotReply(arrayReply) {
  robertChatMsg += `<div class="robotReplies">${arrayReply}</div>`;
  robertView();
}
