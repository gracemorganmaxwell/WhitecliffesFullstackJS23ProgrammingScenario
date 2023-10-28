// What: Data store to hold the OTPs 
// Why: To keep track of all OTPs for validation 
const otpStorage = new Map();

// The OTP class encapsulates the behaviour and data for a single OTP, acting as blueprtint for the OTP object itself 
// This is useful for keeping track of each OTP's expiry time and allows for easier future extensions
class OTP {
    // What: Initialize the OTP with a passcode and calculate its expiry time
    // Why: To set the initial state of the OTP and ensure it expires after the specified duration
    constructor(identificationCode, timeDuration){
        this.identificationCode = identificationCode;
        this.expiryTime = Date.now() + timeDuration;
    }
    // What: Check if the OTP is expired
    // Why: To ensure that each OTP can only be used within its valid duration
    isExpired() {
        return Date.now()> this.expiryTime;
    }
    // What: Refresh the expiry time of the OTP
    // Why: To extend the OTP's validity when reused, as per client requirements for users when logging into the Kiwi Sports Apparel website
    refresh(timeDuration){
        this.expiryTime = Date.now() + timeDuration;    
    }
}

/**
 * What: Generate or refresh an OTP.
 * Why: To provide multi-authentication as an additional layer of security during the login process for users when logging into the Kiwi Sports Apparel website.
 * 
 * @param {Number} identificationCode - The OTP passcode
 * @param {Number} timeDuration - The duration the OTP is valid for in milliseconds
 * @returns {Boolean} - Returns true if the OTP already exists and has not expired, false otherwise
 */

function generateOTP(identificationCode, timeDuration) {
    // What: Find any existing OTP object with the given passcode
    // Why: To determine whether to create a new OTP or refresh an existing one
    

    // What: Check if an OTP with the given passcode already exists and has not expired
    // Why: To update its expiry time if it's still valid, as per client requirements
    if (otpStorage.has(identificationCode)) {
        const existingOtp = otpStorage.get(identificationCode);

        if (!existingOtp.isExpired()) {
            existingOtp.refresh(timeDuration);
            return true;
        }
    }

    // What: Create a new OTP object and store it in the Map
    // Why: Either no OTP with the given passcode exists, or it has expired. A new OTP is therefore needed.
    const newOtp = new OTP(identificationCode, timeDuration);
    otpStorage.set(identificationCode, newOtp);
    return false;
}

// Test the function
// These tests demonstrate that the function works as expected and satisfies the client's and the scenarios requirements
console.log(generateOTP(12345, 300000)); // Should print false (new OTP)
console.log(generateOTP(12345, 300000)); // Should print true (existing OTP)





