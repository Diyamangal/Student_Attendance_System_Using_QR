const attendanceKey = "attendanceLog"; // LocalStorage key
const lastScanTimeKey = "lastScanTime"; // Store last scan time per student
const firstScanDataKey = "firstScanData"; // Store the first scan data of student
let scannerInstance; // Scanner instance

// Function to register a student and generate QR code
function registerStudent() {
  const studentId = document.getElementById("studentId").value.trim();
  const studentName = document.getElementById("studentName").value.trim();

  if (!studentId || !studentName) {
    alert("Please fill in both Student ID and Name.");
    return;
  }

  const qrCodeDiv = document.getElementById("qrCode");
  qrCodeDiv.innerHTML = ""; // Clear previous QR code

  // Generate QR Code Data
  const qrData = JSON.stringify({
    studentId,
    studentName
  });

  // Generate QR Code
  QRCode.toCanvas(qrData, { width: 200, height: 200 }, (error, canvas) => {
    if (error) {
      console.error("QR Code generation error:", error);
      return;
    }
    qrCodeDiv.appendChild(canvas);
    alert("QR Code generated successfully!");
  });
}

// Start the QR scanner
function startScanner() {
  const scannerDiv = document.getElementById("scanner");
  scannerDiv.innerHTML = ""; // Clear previous scanner
  scannerInstance = new Html5Qrcode("scanner");

  scannerInstance.start(
    { facingMode: "environment" }, // Use back camera
    { fps: 10, qrbox: 250 },
    (decodedText) => {
      // Handle successful QR code scan
      processScannedData(decodedText);
      stopScanner(); // Stop the scanner after successful scan
    },
    (error) => {
      console.warn("QR Code scanning error:", error);
    }
  );
}

// Stop the QR scanner
function stopScanner() {
  if (scannerInstance) {
    scannerInstance.stop().then(() => {
      console.log("Scanner stopped.");
    });
  }
}

// Process the scanned QR code data
function processScannedData(decodedText) {
  try {
    const qrData = JSON.parse(decodedText); // Parse the QR data
    if (!qrData.studentId || !qrData.studentName) {
      alert("Invalid QR Code data.");
      return;
    }

    const currentTime = Date.now();
    const firstScanData = localStorage.getItem(`${firstScanDataKey}-${qrData.studentId}`);
    const lastScanTime = localStorage.getItem(`${lastScanTimeKey}-${qrData.studentId}`);

    if (!firstScanData) {
      // First scan: Store the first scan data with timestamp
      localStorage.setItem(`${firstScanDataKey}-${qrData.studentId}`, JSON.stringify({
        studentId: qrData.studentId,
        studentName: qrData.studentName,
        timestamp: currentTime
      }));
      alert("First scan recorded. Please scan again to log attendance.");
      return;
    }

    // If first scan exists, check time difference
    const timeSinceFirstScan = currentTime - JSON.parse(firstScanData).timestamp;

    // Only accept second scan if it's at least 15 seconds apart from the first scan
    if (timeSinceFirstScan < 15000) {
      alert("You need to wait 15 seconds between scans.");
      return;
    }

    // Second scan: Log attendance and clear the first scan data
    logAttendance(qrData.studentId, qrData.studentName);
    localStorage.removeItem(`${firstScanDataKey}-${qrData.studentId}`); // Clear first scan data
    alert(`Attendance successfully marked for ${qrData.studentName}`);
    
  } catch (error) {
    console.error("Error processing QR data:", error);
    alert("Invalid QR Code.");
  }
}

// Function to log attendance
function logAttendance(studentId, studentName) {
  const now = new Date();
  const attendanceEntry = {
    studentId,
    studentName,
    date: now.toLocaleDateString(),
    time: now.toLocaleTimeString()
  };

  // Save to localStorage
  const attendanceLog = JSON.parse(localStorage.getItem(attendanceKey)) || [];
  attendanceLog.push(attendanceEntry);
  localStorage.setItem(attendanceKey, JSON.stringify(attendanceLog));
}

// Function to view attendance
function viewAttendance() {
  const attendanceLog = JSON.parse(localStorage.getItem(attendanceKey)) || [];
  const tableBody = document.querySelector("#attendanceTable tbody");

  // Clear existing rows
  tableBody.innerHTML = "";

  // Populate table with attendance data
  attendanceLog.forEach((entry) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${entry.studentId}</td>
      <td>${entry.studentName}</td>
      <td>${entry.date}</td>
      <td>${entry.time}</td>
    `;
    tableBody.appendChild(row);
  });
}
