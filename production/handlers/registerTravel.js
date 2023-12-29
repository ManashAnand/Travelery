const { v4 } = require("uuid");
const bcrypt = require("bcryptjs");
const AWS = require("aws-sdk");
const jwt = require('jsonwebtoken');
require('dotenv').config()

const RegisterTraveler = async (event) => {
  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  var salt = bcrypt.genSaltSync(10);
  const { name,email, pass,imageUrl } = JSON.parse(event.body);
  const createdAt = new Date().toISOString();
  const id = v4();
  console.log(process.env.SECRET_KEY);
  const accessToken = jwt.sign(id, process.env.SECRET_KEY);

  const hashPass = bcrypt.hashSync(pass, salt);
  const LoginDetails = {
    email,
    hashPass,
    createdAt,
    name,
    imageUrl,
    id,
    accessToken
  };
  try {
      await dynamoDb
        .put({
          TableName: "TravelryTable",
          Item: LoginDetails,
        })
        .promise();
    
      return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*", //
          "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
          "Access-Control-Allow-Headers": "Content-Type",
        },
        body: JSON.stringify(LoginDetails),
      };
    
  } catch (error) {
    
    console.error('Error putting item in DynamoDB:', error);
    return {
        statusCode: 500,
        headers: {
          "Access-Control-Allow-Origin": "*", //
          "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
          "Access-Control-Allow-Headers": "Content-Type",
        },
        body: JSON.stringify(LoginDetails),
      };
  }
};

module.exports = {
  handler: RegisterTraveler,
};
