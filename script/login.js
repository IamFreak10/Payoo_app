// Catch id
document.getElementById("login-btn").addEventListener(
  "click",

  function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById("Account-number").value;
    const pin = document.getElementById("pin").value;
    if (accountNumber.length == 11) {
      if (parseInt(pin) === 1234) {
        window.location.href = "./main.html";
      } else {
        alert("Pin thik nai");
      }
    } else {
      alert("need valid number");
    }
  }
);
