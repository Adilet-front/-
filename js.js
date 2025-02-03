const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let prevNum = "";
const arrOper = ["+", "-", "/", "*"];

class Numbers {
  obj(button) {
    if (button.textContent === "=") {
      if (display.value === "") return;
      const lastELement = display.value.slice(-1);
      if (arrOper.includes(lastELement)) {
        alert("You are in shit or you made mistake");
        return;
      }

      display.value = eval(display.value);
      prevNum = display.value;
      return;
    }
    if (button.textContent === "c") {
      display.value = "";
      return;
    }
    if (prevNum !== "") {
      display.value = "";
      display.value += button.textContent;
      prevNum = "";
      return;
    }
    display.value += button.textContent;
  }
}
const obj = new Numbers();
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    obj.obj(button)
  });
});
