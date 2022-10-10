//Model
let chatAddMessage = '';
let bgColor = 'white';
let chatInputDisabled = '';
let jokes = [
  'How does a samurai kill nonbinary people? They/them',
  'Why did the chicken cross the road? To get to the other side.',
];

let insults = [
  'Your birth certificate is an appology from the abortion clinic',
  'You are as usefull as a mesh condom',
  'If I wanted to kill myself, Ill climb up to your ego - and jump to your IQ',
  'Id like to help you out. Which way did you come in?',
];

//View
view();
function view() {
  let html = '';
  html += /*html*/ `
    <div class="oscar-container">
      <input 
        onchange="chatHandler(this.value)"
        type="text" 
        placeholder="Enter your message...." 
        class="chatInput"
        ${chatInputDisabled}>
      </input>
      
      <div class="oscar-chatWrapper" style="background-color: ${bgColor}">
        ${chatAddMessage}
      </div>
    </div>
  `;
  document.getElementById('oscarChat').innerHTML = html;
}

//Controller
function chatHandler(text) {
  let chat = text.toLowerCase();
  chatAddMessage += `<div class="userChatBoubble">${text}</div>`;

  if (chat.includes('hi')) {
    chatAddMessage += `<div class="botChatBoubble">Hey, My name is Lana. How can I help you? Try /help for a list of my commands</div>`;
  } else if (chat.includes('how are you')) {
    chatAddMessage += `<div class="botChatBoubble">I'm good, how are you ?</div>`;
  } else if (chat.includes('you suck')) {
    chatInputDisabled = 'disabled';
    chatAddMessage += `<div class="botChatBoubble">You know what, you suck!</div>`;
  } else if (chat.includes('mom')) {
    chatAddMessage += `<div class="botChatBoubble">I’ve been called worse things by better men.</div>`;
  } else if (chat.includes('/help')) {
    chatAddMessage += ` 
    <div class="botChatBoubble">
      <ul>
        <li>To get a random generated joke use - /joke</li>
        <li>To get a random generated insult use - /insult</li>
        <li>To change the backgroundcolor use - /bg color</li>
        <li>To flip a text use - /flip (text) </li>
        <li>To see the purpose behind my existance - /purpose</li>
        <li>To clear the chat window use - /clear</li>
      </ul>
    </div>`;
  } else if (chat.includes('/clear')) {
    bgColor = 'white';
    chatAddMessage = '';
  } else if (chat.includes('/purpose')) {
    chatAddMessage += `<div class="botChatBoubble">There is no purpose with my existance. Im simply just a Team oppgave</div>`;
  } else if (chat.includes('/bg')) {
    changeBackground(chat);
    chatAddMessage += `<div class="botChatBoubble">I changed the background color to ${changeBackground(
      chat
    )}</div>`;
  } else if (chat.includes('/insult')) {
    chatAddMessage += `<div class="botChatBoubble">${randomInsult(
      insults
    )}</div>`;
  } else if (chat.includes('/joke')) {
    chatAddMessage += `<div class="botChatBoubble">${randomJoke(jokes)}</div>`;
  } else if (chat.includes('/flip')) {
    chatAddMessage += `<div class="botChatBoubble">${flipText(text)}</div>`;
  } else {
    chatAddMessage += `<div class="botChatBoubble">I dont understand what you want from me. Try /help</div>`;
  }

  view();
}

function randomJoke(jokes) {
  return jokes[Math.floor(Math.random() * jokes.length)];
}

function randomInsult(insult) {
  return insults[Math.floor(Math.random() * insults.length)];
}

function flipText(text) {
  return text.replace('/flip', '').split('').reverse().join('');
}

function changeBackground(color) {
  let fixedColor = color.replace('/bg', '');
  bgColor = fixedColor;
  return fixedColor;
}
