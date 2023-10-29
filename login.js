document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("login-form");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
  
      // Validate user
      if (email === localStorage.getItem("email") && password === localStorage.getItem("password")) {
        // Navigate to OTP generation
        window.location.href = "otpGeneration.html";
      } else {
        alert("Invalid credentials");
      }
    });
  });
  