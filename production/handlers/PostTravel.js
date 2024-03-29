const { v4 } = require("uuid");
const AWS = require("aws-sdk");

const PostTravel = async (event) => {
  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  const {
    descp,
    location,
    numberOfPerson,
    dateOfTravel,
    timeOfTravel,
    preferredVehicle,
    name,
    role,
    email
  } = JSON.parse(event.body);
  const createdAt = new Date().toISOString();
  const id = v4();

  const TravelDetails = {
    id,
    descp,
    location,
    numberOfPerson,
    dateOfTravel,
    timeOfTravel,
    preferredVehicle,
    createdAt,
    name,
    role,
    email
  };

  await dynamoDb
    .put({
      TableName: "TravelryTable",
      Item: TravelDetails,
    })
    .promise();

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // 
      "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
      "Access-Control-Allow-Headers": "Content-Type",
    },
    body: JSON.stringify(TravelDetails),
  };
};

module.exports = {
  handler: PostTravel,
};
