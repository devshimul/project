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
