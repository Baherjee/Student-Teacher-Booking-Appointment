// Select form and table body
const form = document.getElementById("appointmentForm");
const tableBody = document.querySelector("#appointmentsTable tbody");

// Store appointments in memory
let appointments = [];

// Handle form submission
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const student = document.getElementById("studentName").value.trim();
  const teacher = document.getElementById("teacherName").value.trim();
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  if (!student || !teacher || !date || !time) return;

  const newAppointment = { student, teacher, date, time };
  appointments.push(newAppointment);

  renderAppointments();
  form.reset();
});

// Render appointments in table
function renderAppointments() {
  tableBody.innerHTML = "";

  appointments.forEach((appt, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${appt.student}</td>
      <td>${appt.teacher}</td>
      <td>${appt.date}</td>
      <td>${appt.time}</td>
      <td>
        <button class="btn delete-btn" onclick="deleteAppointment(${index})">❌ Cancel</button>
      </td>
    `;

    tableBody.appendChild(row);
  });
}

// Delete appointment
function deleteAppointment(index) {
  appointments.splice(index, 1);
  renderAppointments();
}
