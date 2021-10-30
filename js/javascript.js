// Add Class Active And Remove Class Active
let allList = document.querySelectorAll(".navbar-nav .nav-item .nav-link");
allList.forEach(function (el) {
  el.onclick = function () {
    allList.forEach(function (el) {
      el.classList.remove("active");
    });
    this.classList.add("active");
  };
});

// Focus On Input Form
document.getElementById("load-form").addEventListener("submit", computeResults);
function computeResults(e) {
  let amount = document.getElementById("amount").value;
  let rate = document.getElementById("rate").value;
  let price = document.getElementById("price").value;
  let resulte = ((amount - price) * (rate.slice(0,2) / 100)).toFixed(2);

  if(rate === "30") {
    document.getElementById("month-content").innerText = `انت الان على نظام الـ12 شهر`;
  }
  if(rate === "25") {
    document.getElementById("month-content").innerText = `انت الان على نظام الـ6 شهور`;
  }
  if(rate === "20") {
    document.getElementById("month-content").innerText = `انت الان على نظام الـ4 شهور`;
  }

  document.getElementById("text").innerText = `القسط كل شهر : ${resulte} جنيه`;
  if (resulte === "NaN" || resulte === "" || resulte === "0.00" || resulte === "Infinity" || resulte === "%") {
    document.getElementById("text").innerText = `يجب عليك إدخال بيانات`;
  }
  e.preventDefault();
}