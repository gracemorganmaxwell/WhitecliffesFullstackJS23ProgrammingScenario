


// What: Define the OTP class to encapsulate OTP properties and methods
// Why: Eases the storage and manipulation of OTPs, and allows for future extensibility
export class OTP {
  // What: Constructor initializes each OTP object with an identification code and expiry time
  // Why: To set the initial state of the OTP, ensuring it will expire after the specified duration
  constructor(identificationCode, timeDuration) {
    this.identificationCode = identificationCode;
    this.expiryTime = Date.now() + timeDuration;
  }

  // What: Method to check if the OTP has expired
  // Why: Provides a reusable way to validate the OTP's expiry, central to the OTP's functionality
  isExpired() {
    return Date.now() > this.expiryTime;
  }

  // What: Method to refresh the expiry time of the OTP
  // Why: Allows extending the validity of an existing OTP, if needed
  refresh(timeDuration) {
    this.expiryTime = Date.now() + timeDuration;
  }
}

// What: Hash function to hash the entered passcode
// Why: For a demonstration of how to add a layer of security by not storing the plain passcode
// Note: This is not a secure method for production
export function hashPasscode(identificationCode) {
  let hash = 0;
  for (let i = 0; i < identificationCode.length; i++) {
    const char = identificationCode.charCodeAt(i);
    hash = (hash << 5) - hash + char;
  }
  return hash;
}

// What: Data store to hold OTPs using a Map data structure
// Why: Map allows efficient key-value pair storage and retrieval, essential for managing multiple OTPs
export const otpStorage = new Map();