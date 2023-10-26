# Programming Scenario
Whitecliffes College NZ, 
Full-stack JavaScript Development(Micro-Credential), 
Assignment 1 [Due Oct 29th, 2023]. 


## Analyze the Client's Requirements based on the given 'Scenario'

1. A function that accepts an integer passcode and a duration in milliseconds.

2. The function should manage the passcodes and their expiration times.

3. If the passcode already exists and hasn't expired, the function should return true and update the expiration time.

4. If the passcode doesn't exist or has expired, the function should return false and (re)create the passcode with a new expiration time.

## Choose the Right Data Structure
Whether to use an object or a Map to store the passcodes and their expiration times as key-value pairs. Object seems appropriate for the giv en requirements.

## Define the Function
Create a function called 'generateOTP'. The function should accept the 'passcode' and 'duration' as parameters. 

## Implement the Logic

Retrieve the current time using 'Date.now()'. Then check if the passedcode exists within the data structure defined within the object.

a. if it does, check whether itr has expired. 

b. if not expired, update its expiration time and return 'true'.

c. if expired, overwrite it with a new expiration time and return 'false'.

d. if the passcode doesn't exist, add it to the data structure with an expirsation time and return 'false'.

<br>

# Copied from the Assignment Outline: 

## The 'Scenario'

You work at Kiwi Sports Apparel, an online shopping store, as part of the IT team for your skills in JavaScript. Recently, there have been issues with the security of the users’ login feature of the Kiwi Sports web application. A solution is needed and then coded in JavaScript to be part of the current web application.

Working with your Delivery Manager, you both recall one effective means to ensure the safety of user data and that is through multi-authentication. This feature adds an extra layer of protection by requiring users to provide multiple forms of identification before accessing certain features or information on the App. By implementing multi-authentication, users can rest assured that their data is secure and protected from unauthorised access.
As a result, the Delivery Manager has given you a task to create a function that generates key-value pairs.

This function can act as an additional layer of protection to strengthen security for the login process. These pairs will consist of a passcode and its corresponding duration. The passcode is a one-time code necessary for logging in, and the duration of 5 minutes to indicate how long the passcode will remain valid. Therefore, these key-value pairs will act as an additional authentication layer, addressing the login security issue faced by the web application.

## Instructions  
Read the scenario carefully.
1.	Write a code applying JavaScript programming skills to meet the conditions of the scenario below.
1.	Construct one time passcode necessary for a logging in function described in the scenario with the following rules or constraints.
1.	The code must utilise function that accepts an integer passcode and a duration in milliseconds that meets the client's requirements.
2.	The integer passcode key should a limited to a 5-minute duration of usage.
3.	If the duration has elapsed, the passcode key should be inaccessible.
4.	The function should return a true if the same unexpired passcode key already existed and false otherwise.
5.	The duration should be overwritten if the key already existed.
2.	Analyse the clients’ requirements and construct the appropriate functions, class, and other programming considerations to generate the necessary program.
2.	Document your completed code.
1.	Ensure the documented code are uploaded and accessible on GitHub repository.
3.	A short summary explaining how the program met the clients’ requirements (100 words maximum).

