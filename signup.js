document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signup-form");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
  
      // Store in localStorage
      localStorage.setItem("username", username);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
  
      // Navigate to login page
      window.location.href = "login.html";
    });
  });
  