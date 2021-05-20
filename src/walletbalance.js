const { v4: uuidv4 } = require('uuid');

var walletBalance = 10000000;

exports.handler = async function (event, context, callback) {
  if (event.httpMethod !== 'GET') {
    return callback(null, {
      statusCode: 403,
      body: JSON.stringify({
        error: 'RESTVerbError',
        message: 'Only GET requests allowed, you cheeky monkey!!',
      }),
    });
  }

  let returnObj = {
    walletId: uuidv4(),
    balance: walletBalance,
  };

  return callback(null, {
    statusCode: 200,
    body: JSON.stringify(returnObj),
  });
};
