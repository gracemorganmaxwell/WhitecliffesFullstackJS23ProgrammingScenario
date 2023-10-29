// Import the necessary classes and functions from main.js.
// This is crucial for reusability and modularity of the code.
import { OTP, hashPasscode, otpStorage } from './main.js';

/**
 * This function serves to generate or refresh an OTP (One-Time Password).
 * It takes an identification code and a time duration as parameters.
 * The function returns true if an OTP already exists and is still valid,
 * and false otherwise.
 * 
 * @param {Number} identificationCode - The unique identification code for the OTP
 * @param {Number} timeDuration - The time duration the OTP is valid for, in milliseconds
 * @returns {Boolean} - True if the OTP is refreshed, false if a new OTP is generated
 */
function generateOTP(identificationCode, timeDuration) {
    // Hash the given identification code for security.
    // This step ensures that plain text identification codes are not stored.
    const hashedPasscode = hashPasscode(identificationCode.toString());
  
    // Check if the OTP already exists in our data store.
    // This is necessary to decide whether to create a new OTP or refresh an existing one.
    if (otpStorage.has(hashedPasscode)) {
        const existingOtp = otpStorage.get(hashedPasscode);
  
        // If the OTP is still valid, refresh its expiry time.
        // This is done to extend the OTP's validity without generating a new one.
        if (!existingOtp.isExpired()) {
            existingOtp.refresh(timeDuration);
            return true;
        }
    }
  
    // If we get here, it means either the OTP doesn't exist or it has expired.
    // So, we create a new OTP object and store it in our data store.
    const newOtp = new OTP(identificationCode, timeDuration);
    otpStorage.set(hashedPasscode, newOtp);
    return false;
}

// Add an event listener for when the DOM is fully loaded.
// This ensures that our JavaScript doesn't run before the HTML is rendered.
document.addEventListener("DOMContentLoaded", function () {
    // Grab references to the button and the display area in the HTML.
    // We'll need these to attach event handlers and display the OTP.
    const generateOtpButton = document.getElementById("generate-otp");
    const otpDisplay = document.getElementById("otp-display");

    // Attach an event listener to the "Generate OTP" button.
    // This is where the actual OTP generation or refresh happens upon user action.
    generateOtpButton.addEventListener("click", function() {
        // Generate a random 6-digit identification code and set a 5-minute duration.
        const identificationCode = Math.floor(Math.random() * 1000000);
        const timeDuration = 5 * 60 * 1000;

        // Call our generateOTP function with the generated identification code and time duration.
        const otpGenerated = generateOTP(identificationCode, timeDuration);

        // Display the OTP to the user.
        // In a real-world scenario, this OTP would be sent via email or SMS.
        otpDisplay.textContent = `Your OTP is: ${identificationCode} and it is ${otpGenerated ? "refreshed" : "new"}`;
    });
});
