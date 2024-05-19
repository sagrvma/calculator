const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    if (display.value === "Error" || display.value === "") {
      display.value = "";
    } else {
      display.value = eval(display.value);
    }
  } catch (Error) {
    display.value = "Error";
  }
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

document.addEventListener("keydown", function (event) {
  console.log(event.key);
  if (numOrOpr.indexOf(event.key) >= 0) {
    appendToDisplay(event.key);
  } else if (event.key === "Delete") {
    clearDisplay();
  } else if (event.key === "Backspace") {
    backspace();
  } else if (event.key === "Enter") {
    calculate();
  }
});

const numOrOpr = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "+",
  "-",
  "*",
  "/",
  ".",
];
