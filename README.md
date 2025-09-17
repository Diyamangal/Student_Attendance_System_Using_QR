🎓 Student Attendance System Using QR Code
A modern and user-friendly web application to automate student attendance using QR code technology. This system allows students to register and generate QR codes, which can be scanned during class to log attendance in real time.

🚀 Features
🔐 User Authentication (Login/Register)
📋 Subject-wise attendance sessions
🧾 QR Code generation for each student
📷 QR Code scanning using device camera
📊 Attendance log with date and time stamps
💾 LocalStorage-based data persistence
🎨 Responsive UI with animated glassmorphism design
📁 Project Structure
📦 Student-Attendance-System/ ├── index.html # Login page ├── login.html # Alternative login page ├── attendance.html # QR generation and scanner ├── attendance-log.html # View attendance records ├── style.css # UI styling ├── script.js # QR scanning & logging logic ├── login.js # User login logic ├── register.js # User registration logic ├── attendance.js # Subject selection & navigation

🧪 How It Works
1. User Registration/Login
Users register via register.html or login through index.html.
Credentials are saved in localStorage.
2. Subject Selection
After login, users are shown a list of predefined subjects with scheduled times (attendance.js).
Access to attendance is time-gated to class duration.
3. QR Code Generation
Student enters ID and Name.
A unique QR code is generated and displayed (attendance.html using QRCode.toCanvas()).
4. QR Code Scanning
HTML5 webcam scanning using html5-qrcode.
Requires two scans:
First scan: records the student and waits.
Second scan (after 15 sec): logs attendance (script.js).
5. View Attendance
Attendance details are shown in a table (attendance-log.html) from localStorage.
🛠️ Tech Stack
HTML, CSS, JavaScript
QRCode.js (for QR generation)
html5-qrcode (for webcam scanning)
LocalStorage API (data handling)
🖼️ Screenshots
✅ Include screenshots of the login screen, QR generator, scanner, and attendance log for better presentation.

📌 To Run the Project
Clone or download this repository.
Open index.html in your browser.
Use multiple HTML pages to simulate the flow.
Make sure your device has a working camera to scan QR codes.
🔒 Security Note
This project uses localStorage for user and attendance data. In production, a proper backend (Node.js, Firebase, etc.) with secure authentication and a database is recommended.

📃 License
This project is for educational purposes. Feel free to modify or expand it as needed.

🙋‍♂️ Author
Diya Mangal
📧 diyamangal1807@gmail.com
