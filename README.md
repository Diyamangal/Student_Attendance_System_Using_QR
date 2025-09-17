:

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
📦 Student-Attendance-System/
├── index.html            # Login page
├── login.html            # Alternative login page
├── attendance.html       # QR generation and scanner
├── attendance-log.html   # View attendance records
├── style.css             # UI styling
├── script.js             # QR scanning & logging logic
├── login.js              # User login logic
├── register.js           # User registration logic
├── attendance.js         # Subject selection & navigation

🧪 How It Works

User Registration/Login

Users register via register.html or login through index.html.

Credentials are saved in LocalStorage.

Subject Selection

After login, users select a subject with scheduled times (attendance.js).

Access is time-gated to class duration.

QR Code Generation

Student enters ID and Name.

A unique QR code is generated (attendance.html using QRCode.toCanvas()).

QR Code Scanning

Webcam scanning using html5-qrcode.

Two scans required:

First scan → records student.

Second scan (after 15 sec) → logs attendance (script.js).

View Attendance

Attendance details displayed in a table (attendance-log.html) from LocalStorage.

🛠️ Tech Stack

Frontend: HTML, CSS, JavaScript

QR Generation: QRCode.js

QR Scanning: html5-qrcode

Data Handling: LocalStorage API

🖼️ Screenshots

(Add screenshots of the login screen, QR generator, scanner, and attendance log here for better presentation)

📌 To Run the Project

Clone or download this repository.

Open index.html in your browser.

Use multiple HTML pages to simulate the flow.

Ensure your device has a working camera for scanning.

🔒 Security Note

This project uses LocalStorage for user and attendance data.
For production, integrate a backend (Node.js, Firebase, etc.) with secure authentication and a database.

📃 License

This project is for educational purposes. Feel free to modify or expand it as needed.

🙋‍♂️ Author
Diya Mangal
📧 diyamangal1807@gmail.com
