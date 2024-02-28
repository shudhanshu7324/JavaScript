const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let heightValue = document.querySelector("#height").value / 100;
  let weightValue = document.querySelector("#weight").value;

  const bmi = calculateBMI(heightValue, weightValue);
  //   console.log(bmi);

  document.querySelector("button").innerText = `${bmi}`;

  if (bmi < 18.6) {
    document.querySelector("#results").innerText = "Under Weight";
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    document.querySelector("#results").innerText = "Normal Range";
  } else {
    document.querySelector("#results").innerText = "Over Weight";
  }
});

function calculateBMI(num1, num2) {
  const bmiValue = (num2 / (num1 * num1)).toFixed(1);
  return bmiValue;
}
