document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    const cashOut = getInputValueByID("cashout-amount-number");
    const pin = getInputValueByID("cashout-pin");
    const mainBalance = getInnerTextByID("up-amount");
    const account = document.getElementById("Account-number").value;
    // Check PIN validity
    if (pin === 1234) {
      if (cashOut <= mainBalance) {
        const sum = mainBalance - cashOut;
        setInnerTextByIDandValue("up-amount", sum); // Update the balance

        const container = document.getElementById("tra-container");
        const p = document.createElement("p");
        p.innerText = `
      cashout ${cashOut} from ${account} account
      `;

        container.appendChild(p);
      } else {
        alert("Insufficient funds");
      }
    } else {
      alert("Invalid PIN");
    }
  });
