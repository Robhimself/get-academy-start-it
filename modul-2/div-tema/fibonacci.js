let renders;

view();
function view() {
  let html = document.getElementById("app");
  html.innerHTML = "";

  html.innerHTML = /*HTML*/ `
    <div class="main hl">
              <div>
                <p>
                    Fibonacci-sekvensen:
                </p>
              </div>

              <div class="line-container hl">
                  <div>text</div>
                  <input type="number" onchange="renders = this.value" placeholder="number of renders">
                  <button onclick="fibo(renders)">button</button>
              </div>

              <div class="line-container">
                <div>text</div>
                <input></input>
                <button>button2</button>   
              </div>

              <div class="line-container">
                <div>text</div>
                <input></input>
                <button>button3</button>   
              </div>

              <div class="line-container">
                <div>text</div>
                <input></input>
                <button>button4</button>   
              </div>

        </div>
        <div class="canvas">
        <canvas></canvas>
        </div>
              
          `;
}

// fibo(10);
function fibo(n) {
  let a = 0;
  let b = 1;
  let c = 0;
  // 1,1,2,3,5,8,13,21,34,55,89,144..., n

  for (let i = 0; i < n; i++) {
    c = a + b; // 0 + 1 = 1    // 1 + 1 = 2    // 1 + 2 = 3    // 2 + 3 = 5    // 3 + 5 = 8
    a = b; // 1            // 1            // 2            // 3            // 5
    b = c; // 1            // 2            // 3            // 5            // 8
    // console.log(a, i + 1);
    return a;
  }
  view();
}
