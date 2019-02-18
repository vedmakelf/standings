onload = () => {};

function addRow() {
  tr = document.createElement("tr");
  tr.appendChild(addTD());
  tr.appendChild(addTD());
  tr.appendChild(addTD());
  document.getElementById("standings").appendChild(tr);
  function addTD() {
    div = document.createElement("div");
    div.setAttribute("contenteditable", "true");
    td = document.createElement("td");
    td.appendChild(div);
    return td;
  }
}
