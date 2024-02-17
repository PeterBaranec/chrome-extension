let myLeads = ["awesome", "epic", "lol"];
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEL = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  console.log(myLeads);
});

for (let i = 0; i < myLeads.length; i++) {
  ulEL.innerHTML += "<li>" + myLeads[i] + "</li>";
}
