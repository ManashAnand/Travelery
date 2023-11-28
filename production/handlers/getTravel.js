const AWS = require("aws-sdk");

const getTravel = async () => {
  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  let travels;
  try {
    const results = await dynamoDb
      .scan({ TableName: "TravelryTable" })
      .promise();
    travels = results.Items;
  } catch (error) {
    console.log(error);
  }

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // 
      "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
      "Access-Control-Allow-Headers": "Content-Type",
    },
    body: JSON.stringify(travels),
  };
};

module.exports = {
  handler: getTravel,
};
