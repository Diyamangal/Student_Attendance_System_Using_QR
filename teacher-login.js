function teacherLogin() {
    const username = document.getElementById("teacher-username").value;
    const password = document.getElementById("teacher-password").value;

    fetch("data/teachers.json")
        .then(response => response.json())
        .then(teachers => {
            const teacher = teachers.find(t => t.username === username && t.password === password);
            if (teacher) {
                localStorage.setItem("currentTeacher", username);
                window.location.href = "teacher-dashboard.html";
            } else {
                alert("Invalid Teacher Credentials.");
            }
        });
        
}
