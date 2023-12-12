const calculator = {
  display: document.querySelector("#display"),
  buttons: document.querySelector(".buttons"),
  clear: document.querySelector("#clear"),
  displayValue: 0,
  firstNumber: 0,
  secondNumber: 0,
  clickedMathMark: undefined,
  mathClicked: false,
  dotaAdded: false,

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
      } else if (e.target.classList.contains("remove")) {
        if (this.firstNumber.slice(-1) == ".") {
          this.dotaAdded = false;
        }
        if (!this.mathClicked) {
          this.firstNumber == 0
            ? (this.firstNumber = 0)
            : (this.firstNumber = this.firstNumber.slice(0, -1));
          this.displayValue = this.firstNumber;
        } else {
          this.secondNumber == 0
            ? (this.secondNumber = 0)
            : (this.secondNumber = this.secondNumber.slice(0, -1));
          this.displayValue = this.secondNumber;
        }
        if (this.displayValue == "") {
          this.displayValue = 0;
        }
        this.updateDisplay();
      } else if (e.target.innerText == "=") {
        this.mathClicked = false;
        this.math(this.clickedMathMark);
        this.firstNumber = this.displayValue;
        this.secondNumber = 0;
      } else if (e.target.innerText == "C") {
        this.displayValue = 0;
        this.firstNumber = 0;
        this.secondNumber = 0;
        this.clickedMathMark = undefined;
        this.mathClicked = false;
        this.dotaAdded = false;
        this.updateDisplay();
      } else if (e.target.innerText == ".") {
        if (!this.dotaAdded) {
          if (!this.mathClicked) {
            this.dotaAdded = true;
            this.firstNumber == 0
              ? (this.firstNumber = e.target.innerText)
              : (this.firstNumber += e.target.innerText);

            this.displayValue = this.firstNumber;
          } else {
            this.dotaAdded = true;
            this.secondNumber == 0
              ? (this.secondNumber = e.target.innerText)
              : (this.secondNumber += e.target.innerText);
            this.displayValue = this.secondNumber;
          }
        }
        this.updateDisplay();
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
      case "x":
        this.multiplication();
        break;
      case "/":
        this.division();
        break;
      case "%":
        this.procent();
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
      parseFloat(this.firstNumber) + parseFloat(this.secondNumber);
    this.updateDisplay();
  },

  subtract() {
    this.display.value = this.displayValue =
      parseFloat(this.firstNumber) - parseFloat(this.secondNumber);
    this.updateDisplay();
  },

  multiplication() {
    this.display.value = this.displayValue =
      parseFloat(this.firstNumber) * parseFloat(this.secondNumber);
    this.updateDisplay();
  },
  division() {
    this.display.value = this.displayValue =
      parseFloat(this.firstNumber) / parseFloat(this.secondNumber);
    this.updateDisplay();
  },
  procent() {
    this.display.value = this.displayValue =
      (parseFloat(this.firstNumber) * parseFloat(this.secondNumber)) / 100;
    this.updateDisplay();
  },

  init() {
    this.initEventListeners();
    this.updateDisplay();
  },
};

calculator.init();
