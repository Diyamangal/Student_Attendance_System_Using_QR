// Registration functionality
function registerUser() {
    const username = document.getElementById("registerUsername").value.trim();
    const password = document.getElementById("registerPassword").value.trim();
    const email = document.getElementById("registerEmail").value.trim();
  
    if (!username || !password || !email) {
      alert("Please fill in all fields.");
      return;
    }
  
    // Check if user already exists
    const existingUser = localStorage.getItem(`user-${username}`);
    if (existingUser) {
      alert("Username already exists. Please choose a different one.");
      return;
    }
  
    // Store user information in localStorage
    const user = { username, password, email };
    
  
    alert("Registration successful! You can now log in.");
    window.location.href = "login.html"; // Redirect to login page
  }
  