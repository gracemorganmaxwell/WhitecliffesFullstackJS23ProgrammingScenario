// Import the OTP class and otpStorage Map from main.js.
// This ensures that we're reusing existing code and centralizing the OTP logic.
import { OTP, otpStorage } from './main.js';

/**
 * This function is responsible for generating or refreshing an OTP (One-Time Password).
 * It takes two parameters: the identification code and the time duration for which the OTP is valid.
 * The function returns true if an existing OTP is refreshed, and false if a new OTP is generated.
 * 
 * @param {Number} identificationCode - The unique identification code for generating or refreshing an OTP.
 * @param {Number} timeDuration - The duration for which the OTP is valid, in milliseconds.
 * @returns {Boolean} - True if an existing OTP is refreshed, false otherwise.
 */
function generateOTP(identificationCode, timeDuration) {
  
    // What: Check if an OTP already exists for the given identification code.
    // Why: To decide whether we need to create a new OTP or refresh an existing one.
    if (otpStorage.has(identificationCode)) {
        const existingOtp = otpStorage.get(identificationCode);
  
        // What: Check if the existing OTP is still valid.
        // Why: If it is, we'll simply refresh its expiry time instead of creating a new OTP.
        if (!existingOtp.isExpired()) {
            existingOtp.refresh(timeDuration);
            return true;
        }
    }
  
    // What: Create a new OTP object.
    // Why: Either no OTP exists for the given identification code, or the existing OTP has expired.
    const newOtp = new OTP(identificationCode, timeDuration);
    otpStorage.set(identificationCode, newOtp);
    return false;
}

// What: Add an event listener to wait for the DOM to be fully loaded.
// Why: We want to ensure that our JavaScript code runs only after all HTML elements are available.
document.addEventListener("DOMContentLoaded", function () {

    // What: Get references to the 'Generate OTP' button and the area where the OTP will be displayed.
    // Why: We need these references to attach event listeners and display the generated or refreshed OTP.
    const generateOtpButton = document.getElementById("generate-otp");
    const otpDisplay = document.getElementById("otp-display");

    // What: Attach a click event listener to the 'Generate OTP' button.
    // Why: This is the user's entry point to generate or refresh an OTP.
    generateOtpButton.addEventListener("click", function() {

        // What: Generate a random 6-digit identification code and set a 5-minute duration for the OTP.
        // Why: These are the parameters we'll use to either generate a new OTP or refresh an existing one.
        const identificationCode = Math.floor(Math.random() * 1000000);
        const timeDuration = 5 * 60 * 1000; // 5 minutes in milliseconds

        // What: Call the generateOTP function to create or refresh an OTP.
        // Why: This function handles all the OTP logic, making our event listener clean and focused.
        const otpGenerated = generateOTP(identificationCode, timeDuration);

        // What: Display the OTP and its status to the user.
        // Why: In a real-world application, this information might be sent via email or SMS.
        otpDisplay.textContent = `Your OTP is: ${identificationCode} and it is ${otpGenerated ? "refreshed" : "new"}`;
    });
});
