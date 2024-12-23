const btn = document.getElementById("btn-withdraw");

btn.addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const fieldValueStr = withdrawField.value;
  const fieldValue = parseInt(fieldValueStr);
  //   console.log(typeof fieldValue);

  const totalWithdraw = document.getElementById("total-withdraw");
  const withdrawValueStr = totalWithdraw.innerText;
  const withdrawValue = parseInt(withdrawValueStr);

  const totalWithdrawAmount = fieldValue + withdrawValue;
  totalWithdraw.innerText = totalWithdrawAmount;

  const mainBalance = document.getElementById("main-balance");
  const mainBlncStr = mainBalance.innerText;
  const mainBlnc = parseInt(mainBlncStr);

  const newMainBlnc = mainBlnc - totalWithdrawAmount;
  mainBalance.innerText = newMainBlnc;

  withdrawField.value = "";
});

document.getElementById("btn-deposit").addEventListener("click", function () {
  const depositField = document.getElementById("deposit-field");
  const depositValueStr = depositField.value;
  const depositValue = parseInt(depositValueStr);
  console.log(depositValue);
  const depositTotal = document.getElementById("deposit-total");
  const depositBlncStr = depositTotal.innerText;
  const depositBlnc = parseInt(depositBlncStr);
  console.log(depositBlnc);

  const depositTotalAmount = depositBlnc + depositValue;
  depositTotal.innerText = depositTotalAmount;

  const mainBlnc = document.getElementById("main-balance");
  const totalBlncStr = mainBlnc.innerText;
  const totalBlnc = parseInt(totalBlncStr);

  const totalMainBlnc = totalBlnc + depositValue;
  mainBlnc.innerText = totalMainBlnc;

  depositField.value = "";
});
