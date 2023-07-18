document.addEventListener("DOMContentLoaded", function() {
  const modal = document.getElementById("modal");
  const openModalBtn = document.getElementById("openModalBtn");
  const closeModalBtn = document.querySelector(".close");
  const signupForm = document.getElementById("signupForm");
  const counter = document.getElementById("counter");
  let userCount = 0;

  openModalBtn.addEventListener("click", function() {
    modal.style.display = "block";
  });

  closeModalBtn.addEventListener("click", function() {
    modal.style.display = "none";
  });

  window.addEventListener("click", function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  signupForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value;
    const gender = document.getElementById("gender").value;
    const sports = Array.from(document.getElementById("sports").options)
      .filter(option => option.selected)
      .map(option => option.value);

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Phone Number:", phone);
    console.log("Gender:", gender);
    console.log("Sports:", sports);

    userCount++;
    counter.textContent = `Registered Users: ${userCount}`;

    signupForm.reset();
    modal.style.display = "none";
  });

  const themeToggleBtn = document.getElementById("themeToggleBtn");
  themeToggleBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    modal.classList.toggle("dark-mode");
    themeToggleBtn.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      themeToggleBtn.textContent = "Light Mode";
    } else {
      themeToggleBtn.textContent = "Dark Mode";
    }
  });
});

