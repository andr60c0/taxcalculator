document.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("start");

  var monAmount = document.querySelector("#monAmount").value;
  var taxPer = document.querySelector("#taxPer").value / 100;
  console.log("monAmount", monAmount);
  console.log("taxPer", taxPer);
  if (monAmount >= 0) {
    if (taxPer >= 0 && taxPer < 1) {
      var taxAmount = (monAmount * taxPer).toFixed(2);
      var finalAmount = (monAmount - taxAmount).toFixed(2);
      console.log("taxAmount", taxAmount);
      console.log("finalAmount", finalAmount);

      document.querySelector(".tax_amount").textContent = `Tax amount: ${taxAmount}`;
      document.querySelector(".final_amount").textContent = `Final amount: ${finalAmount}`;
    } else {
      alert("Enter a number between 1.00 and 100.00 in Tax Percentage");
    }
  } else {
    alert("Enter any positive in Monetary Amount in Tax Percentage");
  }
}
