'use strict';

const AWS = require('aws-sdk');
const bcrypt = require('bcryptjs');

// Configure AWS SDK
const dynamoDB = new AWS.DynamoDB.DocumentClient();


const getUserByEmailAndPassword = async (email, password) => {
  const params = {
    TableName: 'TravelryTable',
    IndexName: 'email-index',
    KeyConditionExpression: 'email = :email',
    ExpressionAttributeValues: {
      ':email': email,
    },
  };

  try {
    const result = await dynamoDB.query(params).promise();

    if (result.Items.length === 0) {
      // Email not found
      return null;
    }

    // Log the retrieved item and hashed password
    console.log('Retrieved item:', result.Items[0]);
    const storedHashedPassword = result.Items[0].hashPass;
    console.log('Stored hashed password:', storedHashedPassword);

    // Perform password check
    // const passwordMatch = await comparePasswordsAsync(password, storedHashedPassword);

    if (password) {
      console.log("User's entered password: " + password);
    } else {
      console.log("User's entered password is undefined");
    }

    const passwordMatch = bcrypt.compareSync(password,storedHashedPassword);

    console.log("user se jo password liye hai "+password);

    
    console.log("Password match is "+passwordMatch);


    if (passwordMatch) {
      // Passwords match, return the item
      return result.Items[0];
    } else {
      // Passwords do not match
      return null;
    }
  } catch (error) {
    console.error('Error querying DynamoDB:', error);
  }
};


const LoginTraveler = async (event) => {
  try {
    const { email, password } = JSON.parse(event.body);
    
    // Retrieve user from DynamoDB based on email and perform password check
    const user = await getUserByEmailAndPassword(email, password);
    console.log("user is "+user);
    if (user) {
      // User found, perform further actions if needed
      return {
        statusCode: 200,
        body: JSON.stringify({ user }),
      };
    } else {
      // User not found or password does not match
      return {
        statusCode: 401,
        body: JSON.stringify({ error: 'Invalid email or password' }),
      };
    }
  } catch (error) {
    console.error('Error in LoginTraveler:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};

module.exports = {
  handler: LoginTraveler,
};
