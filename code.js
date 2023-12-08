const calculator = {
  display: document.querySelector("#display"),
  buttons: document.querySelector(".buttons"),
  clear: document.querySelector("#clear"),
  displayValue: 0,
  clickedNumber: "",
  firstValue: undefined,
  secondValue: undefined,
  clickedMathMark: undefined,
  mathClicked: false,

  initEventListeners() {
    this.buttons.addEventListener("click", (e) => {
      if (e.target.classList.contains("number")) {
        this.mathClicked = false;
        this.firstValue = parseInt(e.target.innerText);
        this.displayValue = this.firstValue;
        this.updateDisplay();
      } else if (e.target.innerText == "=") {
        this.mathClicked = true;
        this.math(this.clickedMathMark);
      } else if (e.target.classList.contains("math")) {
        this.mathClicked = true;
        this.secondValue = this.firstValue;
        this.clickedMathMark = e.target.innerText;
        this.firstValue = this.displayValue = 0;
        this.updateDisplay();
      }
    });
  },

  math(operation) {
    switch (operation) {
      case "+":
        this.addition();
        break;

      default:
        break;
    }
  },

  updateDisplay() {
    if (!this.mathClicked) {
      this.display.value == 0
        ? (this.display.value = this.displayValue)
        : (this.display.value += this.displayValue);
    } else {
      this.display.value = this.displayValue;
    }
  },

  addition() {
    this.displayValue = this.firstValue + this.secondValue;
    this.updateDisplay();
    console.log(this.displayValue, this.firstValue, this.secondValue);
  },

  init() {
    this.initEventListeners();
    this.updateDisplay();
  },
};

calculator.init();
