let input = document.querySelector(".input");
let buttons = document.querySelectorAll(".btn");

let final = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let value = e.target.innerText;
    if (value === "AC") {
      final = "";
      input.value = final;
    } else if (value === "DEL") {
      final = final.slice(0, -1);
      input.value = final;
    } else if (value === "=") {
      final = eval(final);
      input.value = final;
    } else {
      final = final + value;
      input.value = final;
    }
  });
});
