const calculator = {
  display: document.querySelector("#display"),
  buttons: document.querySelector(".buttons"),
  clear: document.querySelector("#clear"),
  displayValue: 0,
  clickedNumber: "",
  firstValue: undefined,
  secondValue: undefined,
  numbers: [],
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
        this.numbers.push(parseInt(this.display.value));
        this.mathClicked = true;
        this.math(this.clickedMathMark);
      } else if (e.target.classList.contains("math")) {
        this.numbers.push(parseInt(this.display.value));
        this.mathClicked = true;
        this.firstValue = parseInt(e.target.innerText);
        this.displayValue = this.numbers[this.numbers.length - 1];
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
      case "-":
        this.subtract();
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
    for (let i = 0; i < this.numbers.length; i++) {
      this.displayValue += this.numbers[i];
    }
    this.updateDisplay();
  },
  subtract() {
    let result = this.numbers[0];
    for (let i = 1; i < this.numbers.length; i++) {
      result -= this.numbers[i];
    }
    this.displayValue = result;
    this.updateDisplay();
  },

  init() {
    this.initEventListeners();
    this.updateDisplay();
  },
};

calculator.init();
