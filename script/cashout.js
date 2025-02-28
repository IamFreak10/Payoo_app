document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    

    // Get PIN and amount values
    const pin = document.getElementById("cashout-pin").value;
    const convertedPin = parseInt(pin);
    const amount = document.getElementById("cashout-Amount-number").value; // Corrected ID
    const convertedAmount = parseInt(amount);

    // Get current balance
    const mainBalance = document.getElementById("up-amount").innerText;
    const convertedMainBalance = parseInt(mainBalance);

    // Check PIN validity
    if (convertedPin === 1234) {
      if (convertedAmount <= convertedMainBalance) {
        const sum = convertedMainBalance - convertedAmount;
        document.getElementById("up-amount").innerText = sum; // Update the balance
      } else {
        alert("Insufficient funds");
      }
    } else {
      alert("Invalid PIN");
    }
  });
