var fundingSources = [
  {
    plaidName: 'Wells Fargo Checking',
    nickName: "Frank's bank account",
    last4: '1111',
    plaidToken: 'bs8632bsukysu6gskubl32bliblsjks',
  },
  {
    plaidName: 'Wells Fargo Savings',
    nickName: "Frank's savings",
    last4: '2222',
    plaidToken: 'i6723u4vkut2vdktuvdkuy2vdkuyj2yx',
  },
  {
    plaidName: 'Grand Cayman Private Client Checking',
    nickName: "Patty's money laundering funnel",
    last4: '3333',
    plaidToken: 'nedi7d4ibnk42dkuy4bdykb4kkku4ubu',
  },
];

exports.handler = async function (event, context, callback) {
  let returnObj;

  switch (event.httpMethod) {
    case 'GET':
      break;
    case 'POST':
      break;
    default:
      returnObj = {
        statusCode: 405,
        body: JSON.stringify({
          error: 'RESTVerbError',
          message: 'That request method is not allowed, you cheeky monkey!!',
        }),
      };
  }

  return callback(null, {
    statusCode: 200,
    body: JSON.stringify(returnObj),
  });
};
