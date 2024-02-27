const buttons = document.querySelectorAll(".button");
// console.log(buttons);

const body = document.querySelector("body");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    // console.log(event);
    // console.log(event.target);
    const targetId = event.target.id;
    if (targetId === "grey") {
      body.style.backgroundColor = "grey";
    } else if (targetId === "yellow") {
      body.style.backgroundColor = "yellow";
    } else if (targetId === "blue") {
      body.style.backgroundColor = "blue";
    } else if (targetId === "white") {
      body.style.backgroundColor = "white";
    }
  });
});
