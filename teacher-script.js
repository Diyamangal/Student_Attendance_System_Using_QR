function registerTeacher() {
    const username = document.getElementById("teacherUsername").value;
    const password = document.getElementById("teacherPassword").value;

    if (!username || !password) {
        alert("Please fill in all fields.");
        return;
    }

    let teachers = JSON.parse(localStorage.getItem("teachers")) || [];
    teachers.push({ username, password });

    localStorage.setItem("teachers", JSON.stringify(teachers));
    alert("Registration successful! Please log in.");
    window.location.href = "teacher-login.html";
}
function teacherLogin() {
    const username = document.getElementById("teacherLoginUsername").value;
    const password = document.getElementById("teacherLoginPassword").value;

    let teachers = JSON.parse(localStorage.getItem("teachers")) || [];
    let teacher = teachers.find(t => t.username === username && t.password === password);

    if (teacher) {
        localStorage.setItem("currentTeacher", username);
        window.location.href = "teacher-dashboard.html";
    } else {
        alert("Invalid username or password.");
        
    }
   
}
