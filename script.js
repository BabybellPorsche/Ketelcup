const form = document.querySelector("form");
const table = document.querySelector("table");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const name = formData.get("name");
  const lapTime = formData.get("lap-time");

  const newRow = document.createElement("tr");
  const positionCell = document.createElement("td");
  const nameCell = document.createElement("td");
  const lapTimeCell = document.createElement("td");

  positionCell.textContent = table.rows.length;
  nameCell.textContent = name;
  lapTimeCell.textContent = lapTime;

  newRow.appendChild(positionCell);
  newRow.appendChild(nameCell);
  newRow.appendChild(lapTimeCell);
  table.appendChild(newRow);

  form.reset();
});
