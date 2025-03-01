document.getElementById("cashout").style.display = "none";
document.getElementById("transection-history").style.display = "none";
document.getElementById("add-money-box").addEventListener("click", function () {
  handleToggle("addmoney", "block");
  handleToggle("cashout", "none");
  handleToggle("transection-history", "none");
});
document.getElementById("cash-out-box").addEventListener("click", function () {
  handleToggle("cashout", "block");
  handleToggle("addmoney", "none");
  handleToggle("transection-history", "none");
});

document.getElementById("tra-box").addEventListener("click", function () {
  handleToggle("transection-history", "block");
  handleToggle("addmoney", "none");
  handleToggle("cashout", "none");
});
