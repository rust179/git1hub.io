function showAdvice() {
  let advice = [
    "Пей достаточно воды.",
    "Ешь больше овощей и фруктов.",
    "Старайся соблюдать режим питания.",
    "Ограничивай количество сладкого."
  ];
  let random = Math.floor(Math.random() * advice.length);
  document.getElementById("advice").innerHTML = advice[random];
}