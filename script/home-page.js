const output = document.querySelector(".loader-output");
const bodyContent = document.querySelector(".body-content");

function printTerminalLines() {
  // Clear the output
  output.textContent = "";
  output.innerHTML += "Khwaish Agarwal :- ";

  // Add a delay before typing the initial message
  setTimeout(() => {
    typeWriterEffect("Portfolio Website", output, () => {
      setTimeout(() => {
        output.textContent = "";
            printThreeDots(() => {
              setTimeout(() => {
                output.textContent = "";
                typeWriterEffect("Welcome to my Protfolio Website.", output, () => {
                  document.querySelector(".loader").style.display = "none";
                  bodyContent.style.display = "block";
                });
              }, 500); // Adjust delay before "Welcome" here (milliseconds)
            });
      }, 500); // Adjust delay before random terminal stuff here (milliseconds)
    });
  }, 1000); // Adjust delay before initial message here (milliseconds)
}

function printThreeDots(callback) {
  typeWriterEffect(". . .", output, () => {
    setTimeout(() => {
      output.textContent = "";
      typeWriterEffect(". . .", output, () => {
        setTimeout(() => {
          output.textContent = "";
          typeWriterEffect(". . .", output, () => {
            if (callback) {
              callback();
            }
          });
        }, 150); // Adjust delay between each set of dots here (milliseconds)
      });
    }, 150); // Adjust delay before the first set of dots here (milliseconds)
  });
}

function getRandomTerminalLine() {
  const characters =
    "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?";
  let line = "";
  const lineLength = Math.floor(Math.random() * 80) + 20;
  for (let i = 0; i < lineLength; i++) {
    line += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return line;
}

function typeWriterEffect(text, element, callback) {
  let i = 0;
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, 50); // Adjust typing speed here (milliseconds)
    } else {
      if (callback) {
        setTimeout(() => {
          element.textContent = ""; // Clear the output before executing callback
          callback();
        }, 250); // Delay before executing callback (milliseconds)
      }
    }
  }
  type();
}

printTerminalLines();

function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark-mode");
  const themeStyle = document.getElementById("theme-style");
  const isDarkMode = body.classList.contains("dark-mode");

  const iconToggle = document.getElementById("icon-toggle");
  const sunIcon = iconToggle.querySelector(".lucide-sun");
  const moonIcon = iconToggle.querySelector(".lucide-moon");
  sunIcon.style.display = isDarkMode ? "none" : "inline-block";
  moonIcon.style.display = isDarkMode ? "inline-block" : "none";

  localStorage.setItem("dark-mode", isDarkMode);

  themeStyle.href = `../css/home-page${isDarkMode ? "-dark" : ""}.css`;
}

const prefersDarkMode = localStorage.getItem("dark-mode") === "true";

if (prefersDarkMode) {
  document.body.classList.add("dark-mode");
  toggleTheme();
}

// Date and Time for iPhone Function
function updateDateTime() {
  const now = new Date();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayOfWeek = daysOfWeek[now.getDay()];
  const dayOfMonth = now.getDate();
  const month = months[now.getMonth()];
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");

  const datetimeString = `<span class="date">${dayOfWeek}, ${dayOfMonth} ${month}</span><br><span class="time">${hours}:${minutes}</span>`;
  document.getElementById("datetime").innerHTML = datetimeString;
}

// Update date and time every second
setInterval(updateDateTime, 1000);

// Initial call to display date and time immediately
updateDateTime();
