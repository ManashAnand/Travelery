// Assuming you're using Node.js for the AWS Lambda function
const AWS = require("aws-sdk");


const getTravelByEmail = async (event) => {
    const dynamoDB = new AWS.DynamoDB.DocumentClient();
    try {
        // const email = event.queryStringParameters.email;
        const {
            
            email
          } = JSON.parse(event.body);


          console.log(email);
        if (!email) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: 'Email is required in the query parameters' })
            };
        }

        const params = {
            TableName: 'TravelryTable', // Replace with your DynamoDB table name
            IndexName: 'email-index', // Replace with the name of the index on the email attribute
            KeyConditionExpression: 'email = :email',
            ExpressionAttributeValues: {
                ':email': email
            }
        };

        const result = await dynamoDB.query(params).promise();
        console.log(result);
        return {
            statusCode: 200,
            body: JSON.stringify(result.Items)
        };
    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal server error' })
        };
    }
};

module.exports = {
    handler: getTravelByEmail,
  };
  