import { otpStorage } from './main.js';

// What: Event listener to execute code once the DOM is fully loaded
// Why: Ensures that all HTML elements are fully loaded before attaching event handlers
document.addEventListener("DOMContentLoaded", function () {
  // What: Get form and message elements from the DOM
  // Why: We need to attach event handlers and update the message element
  const form = document.getElementById("otp-form");
  const messageElement = document.getElementById("message");

  // What: Event listener for form submission
  // Why: To validate the OTP when the user submits the form
  form.addEventListener("submit", function (event) {
    // What: Prevent default form submission
    // Why: We are handling form submission via JavaScript
    event.preventDefault();

    // What: Retrieve the entered passcode
    // Why: The entered passcode is used for OTP validation
    const enteredPasscode = document.getElementById("passcode").value;

    // What: Check if a valid OTP exists in otpStorage
    // Why: To validate the user's entered OTP
    if (otpStorage.has(enteredPasscode)) {
      const existingOtp = otpStorage.get(enteredPasscode);

      if (!existingOtp.isExpired()) {
        // What: Update UI to indicate success
        // Why: To inform the user that the OTP is valid
        messageElement.textContent = "OTP is valid!";
        messageElement.className = "success";
        return;
      }
    }

    // What: Update UI to indicate failure
    // Why: To inform the user that the OTP is invalid or has expired
    messageElement.textContent = "Your passcode isn't valid or has expired.";
    messageElement.className = "failure";    
  });
});
