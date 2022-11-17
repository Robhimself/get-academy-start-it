let blocks = "";
let totalBlocks = 0;

view();
function view() {
  const html = document.getElementById("app");
  html.innerHTML = "";

  html.innerHTML = /*HTML*/ `
<div class="main">
    <div class="container">
        <button onclick="addBlock(blocks,5)">+ 5</button>
        <button onclick="addBlock(blocks,10)">+ 10</button>
        <button onclick="removeBlock(blocks,5)">- 5</button>
        <button onclick="removeBlock(blocks,10)">- 10</button>
    </div>
    <div class="counter"><div>Total Blocks: </div><div class="cbcount">${totalBlocks}</div></div>
    <div class="cbc">
        <div class="block-container">
            ${blocks}
        </div>
    </div>
    
</div>
    `;
}

function addBlock(output, n) {
  if (n < 1) {
    view();
  } else {
    totalBlocks++;
    let htmlBlock = `<div class="block">${totalBlocks}</div>`;
    blocks = output;
    blocks = blocks + htmlBlock;
    return addBlock(blocks, n - 1);
  }
}

function removeBlock(output, n) {
  if (totalBlocks == 0) {
    view();
    return;
  }
  if (n < 1) {
    view();
  } else {
    let t = totalBlocks;
    totalBlocks--;
    let htmlBlock = `<div class="block">${t}</div>`;
    blocks = output;
    blocks = blocks.slice(0, blocks.length - htmlBlock.length);

    return removeBlock(blocks, n - 1);
  }
}
