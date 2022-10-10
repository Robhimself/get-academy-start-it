let colorInput = document.getElementById("colorInput");
let paintSelect = document.getElementById("paintSelect");
let listingArea = document.getElementById("listingArea");

let selectedColor;
let selectedAmountTxt;
let selectedAmount;

const modals = document.querySelectorAll("[data-modal]");

modals.forEach(function (trigger) {
  trigger.addEventListener("click", function (event) {
    event.preventDefault();
    const modal = document.getElementById(trigger.dataset.modal);
    modal.classList.add("open");
    const exits = modal.querySelectorAll(".modal-exit");
    exits.forEach(function (exit) {
      exit.addEventListener("click", function (event) {
        event.preventDefault();
        modal.classList.remove("open");
      });
    });
  });
});

function handleColorChange() {
  selectedColor = colorInput.value;
  selectedAmountTxt = paintSelect.options[paintSelect.selectedIndex].text;
  selectedAmount = paintSelect.options[paintSelect.selectedIndex].value;
  addListItem(selectedColor, selectedAmount, selectedAmountTxt);
}

function addListItem(color, amount, amountTxt) {
  let setFontFamily;
  let setFontSize;
  let setColor = color;
  if (color == "red") {
    setFontFamily = "sans-serif";
  } else if (color == "green") {
    setFontFamily = "arial";
  } else if (color == "blue") {
    setFontFamily = "Courier New";
  } else if (color == "") {
    setColor = "white";
  }

  if (amount == 1) {
    setFontSize = "small";
  } else if (amount == 5) {
    setFontSize = "medium";
  } else if (amount == 10) {
    setFontSize = "large";
  } else if (amount == 20) {
    setFontSize = "x-large";
  }

  return (listingArea.innerHTML += /*HTML*/ `
  <div data-hover="Trykk for å fjerne" 
  onclick="removeListItem(this)"
  class="hovertext"
  id="item${amount}"
  style="background-color: ${setColor}; font-family: ${setFontFamily}"
  >
    ${amountTxt}
  </div>
  
`);
}

function removeListItem(element) {
  element.remove();
}
function removeEveryListItem() {
  listingArea.innerHTML = "";
}
