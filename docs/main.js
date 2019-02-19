onload = () => {
  addRow();
  $("table").tablesorter();
  // $("#headline th").click(() => {
  //   return false;
  // });
  $("th").unbind("click");
};

function addRow() {
  tr = document.createElement("tr");
  tr.appendChild(addTD());
  tr.appendChild(addTD());
  tr.appendChild(addTD());
  // document.getElementById("standingsTB").appendChild(tr);
  $("#standingsTB").append(tr);
  function addTD() {
    // div = document.createElement("div");
    // div.setAttribute("contenteditable", "true");
    td = document.createElement("td");
    td.setAttribute("contenteditable", "true");
    td.setAttribute("onblur", "sort()");
    // td.appendChild(div);
    return td;
  }
}

function sort() {
  $("#standings").trigger("update");
  // $("#standings").tablesorter({ sortList: [[2, 0]] });
  var sorting = [[2, 0]];
  // сортируем по первой колонке
  $("table").trigger("sorton", [sorting]);
}
