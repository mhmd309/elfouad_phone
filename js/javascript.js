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
  let price = document.getElementById("price").value;
  let month = document.getElementById("month").value;
  let rate = document.getElementById("rate");

  if(month === "4") {
    rate.value = 20;
    rate.setAttribute("value", "20");
    document.getElementById("rate-content").innerText = "انت الان على نظام فائدة الـ 20%";
  }
  if(month === "6") {
    rate.value = 25;
    rate.setAttribute("value", "25");
    document.getElementById("rate-content").innerText = "انت الان على نظام فائدة الـ 25%";
  }
  if(month === "12") {
    rate.value = 30;
    rate.setAttribute("value", "30");
    document.getElementById("rate-content").innerText = "انت الان على نظام فائدة الـ 30%";
  }

  let calc = amount - price;
  let calcX = calc * (rate.value / 100);
  let resulte = ((calcX + calc) / month).toFixed(2);
  document.getElementById("msguser").innerText = `القسط كل شهر : ${resulte} جنيه`;
  if(
    resulte === "NaN" ||
    resulte === "" ||
    resulte === "0.00" ||
    resulte === "Infinity"
    ){document.getElementById("msguser").innerText = `يجب عليك إدخال البيانات بشكل صحيح`;}
  e.preventDefault();
}
