// Import or include the OTP class definition, hash function, and otpStorage from main.js
import {OTP, hashPasscode, otpStorage} from './main.js';

/**
 * Generate or refresh an OTP.
 * 
 * @param {Number} identificationCode - The OTP passcode
 * @param {Number} timeDuration - The duration the OTP is valid for in milliseconds
 * @returns {Boolean} - Returns true if the OTP already exists and has not expired, false otherwise
 */

function generateOTP(identificationCode, timeDuration) {
    // Hash the passcode for added security
    const hashedPasscode = hashPasscode(identificationCode.toString());
  
    // Check if the OTP already exists in otpStorage
    if (otpStorage.has(hashedPasscode)) {
      const existingOtp = otpStorage.get(hashedPasscode);
  
      // If the OTP has not expired, refresh it
      if (!existingOtp.isExpired()) {
        existingOtp.refresh(duration);
        return true;
      }
    }
  
    // Create a new OTP and add or replace it in otpStorage
    const newOtp = new OTP(hashedPasscode, timeDuration);
    otpStorage.set(hashedPasscode, newOtp);
    return false;
  }
  