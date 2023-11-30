const AWS = require('aws-sdk');

const deleteTravel = async (event) => {

    const dynamoDb = new AWS.DynamoDB.DocumentClient();

    const {id} = JSON.parse(event.body);
    await dynamoDb.delete({
        TableName:"TravelryTable",
        Key: {id},
    }).promise();

    return{
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*', 
            'Access-Control-Allow-Methods': 'OPTIONS, POST, GET,DELETE',
            'Access-Control-Allow-Headers': 'Content-Type',
          },
        body: JSON.stringify({
            msg: "Travel deleted"
        })
    }

}

module.exports = {
    handler: deleteTravel
};