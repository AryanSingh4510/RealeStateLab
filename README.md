# Login System (MERN Stack)

## Overview
This project is a fully functional Login System built using the MERN (MongoDB, Express, React, Node.js) stack. The application includes features like user registration, login, password reset, and a contact form. It also employs authentication mechanisms using JSON Web Tokens (JWT) and email services for password reset notifications.

---

## Features
- **User Registration**: New users can register with their name, email, and password.
- **Login**: Registered users can log in using their email and password.
- **Password Reset**: Users can reset their password via email link.
- **Token-Based Authentication**: Secure user authentication using JWT.
- **Contact Us Form**: Allows users to send feedback or queries.

---
![Screenshot 2024-12-13 194223](https://github.com/user-attachments/assets/15de42f4-0e87-42c2-8ade-c5d9c6c869cf)

## Prerequisites
Ensure you have the following installed on your system:
- Node.js (>=14.x)
- MongoDB (>=4.x)
- npm or yarn

---

## Installation

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory with the following variables:
   ```env
   JWT_SECRET=your_jwt_secret
   mailHost=your_mail_host
   mailPort=your_mail_port
   emailUser=your_email_username
   emailPassword=your_email_password
   ```

4. **Run the Application**:
   ```bash
   npm start
   ```

5. **Access the Application**:
   Open `http://localhost:5000` in your browser.

---

## API Endpoints

### Authentication Routes
1. **User Registration**
   - **Endpoint**: `/api/v1/auth/register`
   - **Method**: POST
   - **Payload**:
     ```json
     {
       "name": "Your Name",
       "email": "example@mail.com",
       "password": "YourPassword"
     }
     ```
   - **Response**:
     ```json
     {
       "success": true,
       "message": "User Register Successfully",
       "user": {
         "_id": "<user_id>",
         "name": "Your Name",
         "email": "example@mail.com"
       }
     }
     ```

2. **User Login**
   - **Endpoint**: `/api/v1/auth/login`
   - **Method**: POST
   - **Payload**:
     ```json
     {
       "email": "example@mail.com",
       "password": "YourPassword"
     }
     ```
   - **Response**:
     ```json
     {
       "success": true,
       "message": "Login successfully",
       "user": {
         "_id": "<user_id>",
         "name": "Your Name",
         "email": "example@mail.com"
       },
       "token": "<jwt_token>"
     }
     ```

3. **Forgot Password**
   - **Endpoint**: `/api/v1/auth/forgot-password`
   - **Method**: POST
   - **Payload**:
     ```json
     {
       "email": "example@mail.com"
     }
     ```
   - **Response**:
     ```json
     {
       "success": true,
       "msg": "Check your email inbox"
     }
     ```

4. **Reset Password**
   - **Endpoint**: `/api/v1/auth/reset-password`
   - **Method**: POST
   - **Payload**:
     ```json
     {
       "password": "NewPassword"
     }
     ```

### Contact Us Route
1. **Submit Contact Form**
   - **Endpoint**: `/api/v1/contact`
   - **Method**: POST
   - **Payload**:
     ```json
     {
       "name": "Your Name",
       "email": "example@mail.com",
       "message": "Your message here."
     }
     ```
   - **Response**:
     ```json
     {
       "success": true,
       "message": "Contact Us information received successfully",
       "contactUsInfo": {
         "_id": "<info_id>",
         "name": "Your Name",
         "email": "example@mail.com",
         "message": "Your message here."
       }
     }
     ```

---

## Technologies Used
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Email Service**: Nodemailer
- **Validation & Security**: bcrypt, randomstring

---

## Project Structure
```
project-folder/
├── models/            # Contains database models
├── routes/            # Contains route definitions
├── controllers/       # Business logic for routes
├── helpers/           # Utility functions (e.g., password hashing)
├── .env               # Environment variables
├── server.js          # Entry point of the application
└── package.json       # Project dependencies
```

---

## Known Issues
- Reset password links may expire based on token expiry settings.
- Email configuration requires valid SMTP credentials.

---

## Future Enhancements
- Implement multi-factor authentication.
- Add social login options (Google, Facebook, etc.).
- Improve email templates and branding.

---

## License
This project is licensed under the MIT License. Feel free to use and modify the code for personal or commercial use.

---

## Contact
For further queries or support, feel free to reach out via the **Contact Us** form or email.

Property Listing and Recommendation System

Overview

This project is a web-based Property Listing and Recommendation System built using the MERN (MongoDB, Express, React, Node.js) stack. The application allows users to browse detailed property listings and provides AI-driven recommendations to enhance user experience.

Features

Property Listing Page

Displays detailed property listings for sale or rent.

Supports filtering by location, type, and price range.

Fetches data dynamically from a database.

AI-Driven Property Recommendations

Recommends properties based on user preferences and browsing history.

Enhances user experience through personalized suggestions.

Uses dummy data or public datasets to simulate recommendations.

Prerequisites

Ensure the following are installed on your system:

Node.js (>=14.x)

MongoDB (>=4.x)

npm or yarn

Installation

Clone the Repository:

git clone <repository-url>
cd <project-folder>

Install Dependencies:

npm install

Set Up Environment Variables:
Create a .env file in the root directory with the following variables:

DB_URI=your_mongodb_connection_string
PORT=5000

Run the Application:

npm start

Access the Application:
Open http://localhost:5000 in your browser.

API Endpoints

Property Listing Routes

Fetch Default Properties

Endpoint: /api/v1/properties/default

Method: GET

Description: Fetches the top 6 properties for default display.

Response:

[
  {
    "_id": "<property_id>",
    "name": "Property Name",
    "location": "Location",
    "type": "Type",
    "price": 100000
  }
]

Fetch Filtered Properties

Endpoint: /api/v1/properties

Method: GET

Query Parameters:

location (optional): Filter by property location.

type (optional): Filter by property type (e.g., sale or rent).

minPrice (optional): Minimum price filter.

maxPrice (optional): Maximum price filter.

![Screenshot 2024-12-13 194204](https://github.com/user-attachments/assets/d4baffa0-2f7b-4b3a-b9e9-0fad967d9484)


Response:

[
  {
    "_id": "<property_id>",
    "name": "Property Name",
    "location": "Location",
    "type": "Type",
    "price": 100000
  }
]

AI-Driven Recommendations

The AI-driven recommendation feature uses simulated user data to suggest properties. To enable recommendations:

Prepare dummy user interaction data such as:

{
  "userId": "<user_id>",
  "preferences": {
    "location": "Location",
    "type": "Rent",
    "priceRange": [50000, 100000]
  }
}

Use a machine learning model or rule-based logic to suggest properties based on preferences. For instance:

function recommendProperties(userPreferences, properties) {
  return properties.filter(property => {
    return (
      property.location === userPreferences.location &&
      property.type === userPreferences.type &&
      property.price >= userPreferences.priceRange[0] &&
      property.price <= userPreferences.priceRange[1]
    );
  });
}

Integrate the recommendation logic into the backend for real-time suggestions.

Technologies Used

Frontend: React.js

Backend: Node.js, Express.js

Database: MongoDB

AI Recommendation: Dummy data and filtering logic

Project Structure

project-folder/
├── models/             # Contains database schemas
├── routes/             # API route definitions
├── controllers/        # Business logic for routes
├── client/             # React frontend source code
├── .env                # Environment variables
├── server.js           # Backend entry point
└── package.json        # Project dependencies

Future Enhancements

Implement advanced AI models for better recommendations.

Add real-time user feedback to refine suggestions.

Include property images and virtual tours.

License

This project is licensed under the MIT License. Feel free to use and modify the code for personal or commercial use.

Contact

For further queries or support, feel free to reach out.


