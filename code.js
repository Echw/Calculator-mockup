const calculator = {
  display: document.querySelector("#display"),
  buttons: document.querySelector(".buttons"),
  clear: document.querySelector("#clear"),
  displayValue: 0,
  firstNumber: 0,
  secondNumber: 0,
  clickedMathMark: undefined,
  mathClicked: false,

  initEventListeners() {
    this.buttons.addEventListener("click", (e) => {
      if (e.target.classList.contains("number")) {
        if (!this.mathClicked) {
          this.firstNumber == 0
            ? (this.firstNumber = e.target.innerText)
            : (this.firstNumber += e.target.innerText);

          this.displayValue = this.firstNumber;
        } else {
          this.secondNumber == 0
            ? (this.secondNumber = e.target.innerText)
            : (this.secondNumber += e.target.innerText);
          this.displayValue = this.secondNumber;
        }
        this.updateDisplay();
      } else if (e.target.innerText == "=") {
        this.mathClicked = false;
        this.math(this.clickedMathMark);
      } else if (e.target.classList.contains("math")) {
        if (this.mathClicked) {
          this.math(this.clickedMathMark);
          this.firstNumber = this.displayValue;
          this.secondNumber = 0;
        }
        this.mathClicked = true;
        this.clickedMathMark = e.target.innerText;
        this.displayValue = 0;
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
      this.display.value = this.displayValue;
    } else {
      this.display.value = this.displayValue;
    }
  },

  addition() {
    this.display.value = this.displayValue =
      parseInt(this.firstNumber) + parseInt(this.secondNumber);
    this.updateDisplay();
  },

  subtract() {
    this.display.value = this.displayValue =
      parseInt(this.firstNumber) - parseInt(this.secondNumber);
    this.updateDisplay();
    this.updateDisplay();
  },

  init() {
    this.initEventListeners();
    this.updateDisplay();
  },
};

calculator.init();
