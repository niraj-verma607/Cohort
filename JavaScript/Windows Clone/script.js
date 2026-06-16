function windowsBtn() {
  const startBtn = document.getElementById("startBtn");
  const startMenu = document.getElementById("startMenu");
  const desktop = document.querySelector(".desktop");

  // Toggle Menu
  startBtn.addEventListener("click", (e) => {
    startMenu.classList.toggle("active");
  });

  // Close menu when clicking outside (on desktop)
  desktop.addEventListener("click", (e) => {
    if (!startMenu.contains(e.target) && !startBtn.contains(e.target)) {
      startMenu.classList.remove("active");
    }
  });
}

function rightClick() {
  /* --- Context Menu Logic --- */
  const contextMenu = document.getElementById("contextMenu");
  const desktopArea = document.querySelector(".desktop");

  // 1. Listen for Right-Click (contextmenu)
  desktopArea.addEventListener("contextmenu", (e) => {
    e.preventDefault(); // Stop default browser menu

    // Get mouse position
    let x = e.clientX;
    let y = e.clientY;

    // Get window dimensions to prevent menu going off-screen
    const winWidth = window.innerWidth;
    const winHeight = window.innerHeight;
    const menuWidth = 260; // Approximate width from CSS
    const menuHeight = 350; // Approximate height

    // Adjust if clicking near right edge
    if (x + menuWidth > winWidth) {
      x -= menuWidth;
    }

    // Adjust if clicking near bottom edge
    if (y + menuHeight > winHeight) {
      y -= menuHeight;
    }

    // Set Position
    contextMenu.style.left = `${x}px`;
    contextMenu.style.top = `${y}px`;

    // Show Menu
    contextMenu.style.display = "flex";
  });

  // 2. Hide Menu on Left Click (anywhere)
  document.addEventListener("click", () => {
    contextMenu.style.display = "none";
  });

  // 3. Hide Menu on Start Menu Toggle (optional polish)
  const startButton = document.getElementById("startBtn");
  if (startButton) {
    startButton.addEventListener("click", () => {
      contextMenu.style.display = "flex";
    });
  }
}

windowsBtn();
rightClick();

function updateClock() {
  const now = new Date(); // Get current system time

  // --- Format Time (e.g., 06:25 PM) ---
  let hours = now.getHours();
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12; // Convert '0' hour to '12'

  const minutes = now.getMinutes().toString().padStart(2, "0"); // Add '0' if single digit (e.g. 5 -> 05)

  const timeString = `${hours.toString().padStart(2, "0")}:${minutes} ${ampm}`;

  // --- Format Date (e.g., 12-12-2025) ---
  const day = now.getDate().toString().padStart(2, "0");
  const month = (now.getMonth() + 1).toString().padStart(2, "0"); // Month is 0-indexed (Jan=0), so we add 1
  const year = now.getFullYear();

  const dateString = `${day}-${month}-${year}`;

  // --- Push to HTML ---
  // Finds the elements with class="time" and class="date" and updates text
  const timeElement = document.querySelector(".time");
  const dateElement = document.querySelector(".date");

  if (timeElement) timeElement.textContent = timeString;
  if (dateElement) dateElement.textContent = dateString;
}

updateClock();
setInterval(updateClock, 1000);
