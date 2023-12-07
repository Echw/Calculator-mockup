const calculator = {
  numbers: Array.from(document.querySelectorAll(".number")),
  display: document.querySelector("#display"),
  clear: document.querySelector("#clear"),

  clickedNumber: 0,

  initEventListeners() {
    this.numbers.forEach((number) => {
      number.addEventListener("click", (e) => {
        console.log(e.target.innerText);
        this.clickedNumber = parseInt(e.target.innerText);
        this.updateDisplay();
      });
    });
  },

  updateDisplay() {
    this.display.value += this.clickedNumber;
  },

  init() {
    console.log(this.numbers);
    this.initEventListeners();
    this.updateDisplay();
  },
};

calculator.init();
