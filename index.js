let myLeads = [];
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEL = document.getElementById("ul-el");

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  console.log(leadsFromLocalStorage);
  renderLeads();
}

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  const stringifyMyLeads = JSON.stringify(myLeads);
  localStorage.setItem("myLeads", stringifyMyLeads);
  renderLeads();
  console.log(localStorage.getItem("myLeads"));
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
    <li>
      <a target='_blank' href='https://${myLeads[i]}'>${myLeads[i]}</a>
    </li>`;

    console.log(listItems);
  }

  ulEL.innerHTML = listItems;
}
