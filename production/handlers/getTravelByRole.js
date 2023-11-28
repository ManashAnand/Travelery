const AWS = require("aws-sdk");

const getTravelByRole = async (event) => {
  const dynamoDb = new AWS.DynamoDB.DocumentClient();

    const { role } = JSON.parse(event.body);

  const params = {
    TableName: "TravelryTable",
    IndexName: 'RoleIndex',
    FilterExpression: "#role = :role",
    ExpressionAttributeNames: {
      "#role": "role",
    },
    ExpressionAttributeValues: {
      ":role": role,
    },
  };

  try {
    const results = await dynamoDb.query(params).promise();
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", //
        "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify(results.Items),
    };
  } catch (error) {
    console.error("Error scanning DynamoDB:", error);

    return {
        statusCode: 501,
        body: JSON.stringify({ error: 'Internal Server Error found in error block' }),
      };
  }
};

module.exports = {
  handler: getTravelByRole,
};
