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
