// Catch add money
document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = document.getElementById("Amount-number").value;
    const convertedAmount = parseInt(amount);
    const pin = document.getElementById("pin").value;
    const convertedPin = parseInt(pin);
    const mainBalance = document.getElementById("up-amount").innerText;
    const convertedMainBalance = parseInt(mainBalance);
    if (convertedPin === 1234) {
      const sum = convertedAmount + convertedMainBalance;
      document.getElementById("up-amount").innerText = sum;
    } else {
    }
  });
