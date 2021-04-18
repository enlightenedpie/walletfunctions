const crypto = require("crypto");

var transactionHistory = {};

if (transactionHistory.length < 1) [...30].map((ind) => {
  let tID = crypto.randomBytes(16).toString(36);

  transactionHistory[tID] = {
    type: (ind+1 % 2) ? 'withdrawal' : 'deposit',
    amount: 39900,
    timestamp: new Date('2019-10-10'),
    to: 'Jack',
    from: 'Diane'
  };
});

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

  const { max, page = 1 } = event.queryStringParameters,
    returnObj = {};

  let maxAmount = max || 10,
    startIndex = ((page-1) * maxAmount),
    endIndex = startIndex + maxAmount;

  Object.keys(transactionHistory).slice([startIndex], [endIndex]).map((item, i) => {
    returnObj[item] = transactionHistory[item];
  });

  return callback(null, {
    statusCode: 200,
    body: JSON.stringify(returnObj),
  });
};