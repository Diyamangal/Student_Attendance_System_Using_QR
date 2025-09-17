// Login functionality
function loginUser() {
    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value.trim();
  
    if (!username || !password) {
      alert("Please fill in both Username and Password.");
      return;
    }
  
    const storedUser = JSON.parse(localStorage.getItem(`user-${username}`));
  
    if (!storedUser) {
      alert("User not found. Please register first.");
      return;
    }
  
    // Check if the password matches
    if (storedUser.password !== password) {
      alert("Incorrect password.");
      return;
    }
  
    // Successful login: Redirect to the attendance page
    alert(`Welcome, ${storedUser.username}!`);
    window.location.href = "attendance.html"; // Redirect to the attendance page (update with your page)
  }
  