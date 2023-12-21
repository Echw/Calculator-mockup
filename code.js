const calculator = {
  display: document.querySelector("#display"),
  buttons: document.querySelector(".buttons"),
  clear: document.querySelector("#clear"),
  displayValue: "0",
  firstNumber: "0",
  secondNumber: "0",
  clickedMathMark: undefined,
  dotAdded: false,
  dotFirstAdded: false,
  dotSecondAdded: false,

  init() {
    this.initEventListeners();
    this.updateDisplay();
  },

  initEventListeners() {
    this.buttons.addEventListener("click", (event) => {
      this.clickedButton(event.target);
    });
  },

  handleButtonClick(button) {
    const clicked = button.dataset.button;

    switch (clicked) {
      case "number":
        if (!this.clickedMathMark) {
          this.firstNumber == "0"
            ? (this.firstNumber = button.innerText)
            : (this.firstNumber += button.innerText);

          this.displayValue = this.firstNumber;
        } else {
          this.secondNumber == "0"
            ? (this.secondNumber = button.innerText)
            : (this.secondNumber += button.innerText);
          this.displayValue = this.secondNumber;
        }
        this.updateDisplay();
        break;

      case "remove":
        if (this.firstNumber.slice(-1) == ".") {
          this.dotFirstAdded = false;
        } else if (this.secondNumber.slice(-1) == ".") {
          this.dotSecondAdded = false;
        }

        if (!this.clickedMathMark) {
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
        break;

      case "equal":
        this.calculate(this.clickedMathMark);
        this.firstNumber = this.displayValue;
        this.secondNumber = 0;
        break;
      case "clear":
        this.displayValue = 0;
        this.firstNumber = 0;
        this.secondNumber = 0;
        this.clickedMathMark = undefined;
        this.dotAdded = false;
        this.updateDisplay();
        break;

      case "dot":
        if (!this.clickedMathMark && !this.dotFirstAdded) {
          this.dotFirstAdded = true;
          this.firstNumber += button.innerText;
          this.displayValue = this.firstNumber;
        } else if (!this.dotSecondAdded) {
          this.dotSecondAdded = true;
          this.secondNumber += button.innerText;
          this.displayValue = this.secondNumber;
        }
        this.updateDisplay();
        break;

      case "math":
        if (this.clickedMathMark) {
          this.calculate(this.clickedMathMark);
          this.firstNumber = this.displayValue;
          this.secondNumber = 0;
          this.dotFirstAdded = false;
          this.dotSecondAdded = false;
        }
        this.clickedMathMark = button.innerText;
        this.displayValue = 0;
        this.updateDisplay();
        break;

      default:
        break;
    }
  },

  calculate(operation) {
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
        this.percent();
        break;
      default:
        break;
    }
  },

  updateDisplay() {
    this.display.value = this.displayValue;
  },

  addition() {
    this.displayValue =
      parseFloat(this.firstNumber) + parseFloat(this.secondNumber);
    this.updateDisplay();
  },

  subtract() {
    this.displayValue =
      parseFloat(this.firstNumber) - parseFloat(this.secondNumber);
    this.updateDisplay();
  },

  multiplication() {
    this.displayValue =
      parseFloat(this.firstNumber) * parseFloat(this.secondNumber);
    this.updateDisplay();
  },

  division() {
    this.displayValue =
      parseFloat(this.firstNumber) / parseFloat(this.secondNumber);
    this.updateDisplay();
  },

  percent() {
    this.displayValue =
      (parseFloat(this.firstNumber) * parseFloat(this.secondNumber)) / 100;
    this.updateDisplay();
  },
};

calculator.init();
