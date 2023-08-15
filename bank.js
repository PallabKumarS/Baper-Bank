// bank deposit here
document.getElementById("deposit-btn").addEventListener("click", function () {
  const depositAmount = document.getElementById("deposit-amount");
  const deposit = depositAmount.value;
  const currentDeposit = parseFloat(deposit);
  if (isNaN(currentDeposit)) {
    alert("Please enter a valid deposit");
    depositAmount.value = " ";
    return;
  }
  const depositDisplay = document.getElementById("deposit-amount-display");
  const previousDeposit = parseFloat(depositDisplay.innerText);
  const currentDepositTotal = currentDeposit + previousDeposit;
  depositDisplay.innerText = currentDepositTotal;
  const balanceDisplay = document.getElementById("balance-amount-display");
  const previousBalance = parseFloat(balanceDisplay.innerText);
  const currentBalance = previousBalance + currentDeposit;
  balanceDisplay.innerText = currentBalance;
  depositAmount.value = " ";
});

// bank withdraw here
document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawAmount = document.getElementById("withdraw-amount");
  const withdraw = withdrawAmount.value;
  const currentWithdraw = parseFloat(withdraw);
  if (isNaN(currentWithdraw)) {
    alert("Please enter a valid withdraw");
    withdrawAmount.value = " ";
    return;
  }
  const withdrawDisplay = document.getElementById("withdraw-amount-display");
  const previousWithdraw = parseFloat(withdrawDisplay.innerText);
  const balanceDisplay = document.getElementById("balance-amount-display");
  const previousBalance = parseFloat(balanceDisplay.innerText);
  if (currentWithdraw <= previousBalance) {
    const currentWithdrawTotal = currentWithdraw + previousWithdraw;
    withdrawDisplay.innerText = currentWithdrawTotal;
    const currentBalance = previousBalance - currentWithdraw;
    balanceDisplay.innerText = currentBalance;
  } else {
    alert("You Do Not Have Sufficient Balance");
  }
  withdrawAmount.value = " ";
});
