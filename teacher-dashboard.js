function openAttendanceLog() {
    const selectedSubject = document.getElementById("subjectFilter").value;
    const selectedDate = document.getElementById("dateFilter").value;

    if (!selectedSubject || !selectedDate) {
        alert("Please select both subject and date.");
        return;
    }

    localStorage.setItem("selectedSubject", selectedSubject);
    localStorage.setItem("selectedDate", selectedDate);

    window.location.href = "attendance-log.html";
}
