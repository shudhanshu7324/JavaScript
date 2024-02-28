const clock = document.getElementById("clock");

setInterval(() => {
  const time = new Date();
  //   console.log(time.toLocaleTimeString());
  clock.innerHTML = time.toLocaleTimeString();
}, 1000);
