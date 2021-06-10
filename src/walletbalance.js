const { v4: uuidv4 } = require('uuid');

var walletBalance = 100000.23;

exports.handler = async function (event, context, callback) {
  if (event.httpMethod !== 'GET') {
    return callback(null, {
      statusCode: 405,
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
