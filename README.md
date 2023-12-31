# Project: Simulated Multi-Authentication for User Login with JavaScript functionality

### Assignment 1, Due Oct 29th, 2023

### Course: Full-stack JavaScript Development(Micro-Credential)

### Tertiary Insitute: Whitecliffes College NZ

### By Grace Morgan-Maxwell

# Contents of ReadMe documentation:

## Section 1: OPT breakdown

## Section 2: Supporting documentation for the project

# Section 1:

## Breakdown of the OTP Functionality Based on the Project Requirements Given in the 'Scenario':

The function, named `generateOTP`, accepts an integer passcode (`identificationCode`) and a duration in milliseconds (`timeDuration`).

The function internally manages these passcodes and their corresponding expiration times using a Map data structure.

If a passcode already exists and has not expired, the function will return true and update the expiration time for that passcode.

If the passcode does not exist or has expired, the function will return false and either create a new passcode or update the existing one with a new expiration time.

## Data Structure

The JavaScript OTP class serves as a blueprint for creating `OTP` objects, each consisting of two properties— `identificationCode` and `expiryTime` and two methods `isExpired` and `refresh`.

`identificationCode`: Represents the unique passcode.

`expiryTime`: Indicates the time (in milliseconds since epoch) until which the passcode is valid.

## Methods:

`isExpired`: Checks if the passcode has expired by comparing expiryTime with the current time (Date.now()).

`refresh`: Updates the expiryTime based on a new duration, extending the validity of the passcode.

## OTP Storage:

The Map data structure (`otpStorage`) acts as the storage medium for each OTP object. This allows for efficient retrieval, updating, and management of OTPs, fulfilling the project requirements more robustly than a plain object.

## Define the Function:

The function is defined as `generateOTP`(`identificationCode`, `timeDuration`).

Which takes two arguments:

`identificationCode`: The unique passcode for the OTP.

`timeDuration`: The duration (in milliseconds) that the OTP will remain valid.

## Implement the Logic

The OTP validation logic is executed within an event listener attached to a form.

1. Retrieve the current time using Date.now().

2. Hash the entered identificationCode for added security.

3. Check if the hashed identificationCode already exists in the otpStorage Map.

   a. If it does, verify if it has expired.

   b. If not expired, update its expiration time (expiryTime) and display a success message.

   c. If expired, overwrite it with a new expiration time and display a failure message.

4. If the identificationCode does not exist, display a failure message.
   <br>

# Section 2:

## The given client 'Scenario':

You work at Kiwi Sports Apparel, an online shopping store, as part of the IT team for your skills in JavaScript. Recently, there have been issues with the security of the users’ login feature of the Kiwi Sports web application. A solution is needed and then coded in JavaScript to be part of the current web application.

Working with your Delivery Manager, you both recall one effective means to ensure the safety of user data and that is through multi-authentication. This feature adds an extra layer of protection by requiring users to provide multiple forms of identification before accessing certain features or information on the App. By implementing multi-authentication, users can rest assured that their data is secure and protected from unauthorised access.

As a result, the Delivery Manager has given you a task to create a function that generates key-value pairs. This function can act as an additional layer of protection to strengthen security for the login process. These pairs will consist of a passcode and its corresponding duration. The passcode is a one-time code necessary for logging in, and the duration of 5 minutes to indicate how long the passcode will remain valid. Therefore, these key-value pairs will act as an additional authentication layer, addressing the login security issue faced by the web application.

## Given instructions in the project outline:

    1.	Write a code applying JavaScript programming skills to meet the conditions of the scenario below.

    2.	Construct one time passcode necessary for a logging in function described in the scenario with the following rules or constraints.

    3.	The code must utilise function that accepts an integer passcode and a duration in milliseconds that meets the client's requirements.

    4.	The integer passcode key should a limited to a 5-minute duration of usage.

    5.	If the duration has elapsed, the passcode key should be inaccessible.

    6.	The function should return a true if the same unexpired passcode key already existed and false otherwise.

    7.	The duration should be overwritten if the key already existed.

    8.	Analyse the clients’ requirements and construct the appropriate functions, class, and other programming considerations to generate the necessary program.

    9.	Document your completed code.

    10.	Ensure the documented code are uploaded and accessible on GitHub repository.

    11.	A short summary explaining how the program met the clients’ requirements (100 words maximum).

<br>

# Section 3: Roadmap for Project in full (while underway)

## Breakdown of logic

Create Login and Signup Forms:
HTML forms for login and signup with fields like username, email, and password.

User Registration Logic:
JavaScript logic to capture the signup form data and store it locally (localStorage can be used for simulation).

User Login Logic:
Logic to validate the user against the stored data.

OTP Generation:
Once the user is validated, generate an OTP.

OTP Sending Simulation:
For local simulation, we will simply display the OTP on the in a browser tab.

OTP Verification:
A separate form to enter the received OTP.

Final Authentication:
Logic to verify the OTP. If it's correct and hasn't expired, the user is granted access (simulated by displaying a "Logged In Successfully" message).

## File Structure

HTML Files:

signup.html
login.html
otpGeneration.html
otpVerification.html

JavaScript Files:

main.js (common functions and data store)
signup.js (signup logic)
login.js (login logic)
otpGeneration.js (OTP generation logic)
otpVerification.js (OTP verification logic)

## Important Points:

Local Storage: Use localStorage to simulate a database. You can store the user details and OTPs here for validation.

State Management: Since you're working with multiple pages, you'll need a way to maintain state. This can be done using localStorage or passing data through URLs.

Security: Since this is a simulation, you don't have to worry about security. However, in a production environment, never store sensitive information like passwords or OTPs in localStorage, and never perform security-sensitive operations on the client-side.
