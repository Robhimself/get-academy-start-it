let text = "Robert";

function reverseText(text) {
  let newText = "";
  for (let i = 0; i < text.length; i++) {
    newText = text.charAt(i) + newText;
  }
  return newText;
}
