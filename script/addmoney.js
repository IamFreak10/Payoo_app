// Catch add money
document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = getInputValueByID("Amount-number");
    const pin = getInputValueByID("pin");
    const upAmount = getInnerTextByID("up-amount");
    const account = document.getElementById("Account-number").value;
    console.log(upAmount);
    if (pin === 1234) {
      const sum = amount + upAmount;
      setInnerTextByIDandValue("up-amount", sum);

      const container = document.getElementById("tra-container");
      const p = document.createElement("p");
      p.innerText = `
      added ${amount} from ${account} account
      `;

      container.appendChild(p);
    } else {
      console.log("pin thik nai");
    }
  });
