// Mock Database for Login (Sample data)
const users = [
  { username: "student1", password: "password123" },
  { username: "student2", password: "password456" },
];

// Mock Subject Data with Timings
const subjects = [
  { name: "Artificial Intelligence and Machine Learning", startTime: "11:00", endTime: "12:50" },
  { name: "IOT System Design", startTime: "15:15", endTime: "17:15" },
  { name: "IPR", startTime: "22:30", endTime: "23:30" },
];

// Login Functionality
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    alert("Login successful!");
    // Redirect to the subject selection page
    window.location.href = "subjects.html";
  } else {
    const errorContainer = document.getElementById("loginError");
    errorContainer.innerHTML = `
      <p style="color: red;">Invalid username or password.</p>
      <button id="registerButton" onclick="redirectToRegister()">Register Here</button>
    `;
  }
}

// Redirect to Registration Page
function redirectToRegister() {
  window.location.href = "register.html";
}

// Display Subjects on the Subject Selection Page
function displaySubjects() {
  const subjectList = document.getElementById("subjectList");

  subjects.forEach((subject) => {
    const button = document.createElement("button");
    button.innerText = `${subject.name} (${subject.startTime} - ${subject.endTime})`;
    button.className = "subject-btn";
    button.onclick = () => openSubject(subject);
    subjectList.appendChild(button);
  });
}

// Open Subject Based on Timing
function openSubject(subject) {
  const currentTime = new Date();
  const currentHours = currentTime.getHours();
  const currentMinutes = currentTime.getMinutes();

  const [startHours, startMinutes] = subject.startTime.split(":").map(Number);
  const [endHours, endMinutes] = subject.endTime.split(":").map(Number);

  const currentTimeInMinutes = currentHours * 60 + currentMinutes;
  const startTimeInMinutes = startHours * 60 + startMinutes;
  const endTimeInMinutes = endHours * 60 + endMinutes;

  if (currentTimeInMinutes >= startTimeInMinutes && currentTimeInMinutes <= endTimeInMinutes) {
    alert(`Welcome to ${subject.name} class!`);
    // Redirect to the attendance page
    window.location.href = "attendance.html";
  } else {
    alert(`The ${subject.name} class is not available at this time. Please check the schedule.`);
  }
}
