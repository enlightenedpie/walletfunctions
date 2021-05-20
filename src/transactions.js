var transactionHistory = {};

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

  let i = 0;

  if (Object.keys(transactionHistory).length < 1)
    do {
      let tID = (Math.floor(Math.random() * Date.now()) + Date.now()).toString(36).toUpperCase();
  
      transactionHistory[tID] = {
        type: (i % 2) ? 'withdrawal' : 'deposit',
        amount: 39900,
        timestamp: Date.parse('2019-10-10'),
        to: 'Jack',
        from: 'Diane'
      };

      i++;
    } while (i < 30);

  const { max = 10, page = 1 } = event.queryStringParameters,
    returnObj = [];

  let maxAmount = max,
    startIndex = ((page-1) * maxAmount);

  startIndex = (startIndex - maxAmount > Object.keys(transactionHistory).length) ? 0 : startIndex;

  let endIndex = startIndex + maxAmount;

  Object.keys(transactionHistory).slice([startIndex], [endIndex]).map((item) => {
    returnObj.push({
      id: item,
      ...transactionHistory[item]
    });
  });

  return callback(null, {
    statusCode: 200,
    body: JSON.stringify(returnObj),
  });
};