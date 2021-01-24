/* eslint-disable @typescript-eslint/explicit-function-return-type */
var provinces = {
  US: [
    'AL',
    'AK',
    'AZ',
    'AR',
    'CA',
    'CO',
    'CT',
    'DE',
    'DC',
    'FL',
    'GA',
    'HI',
    'ID',
    'IL',
    'IN',
    'IA',
    'KS',
    'KY',
    'LA',
    'ME',
    'MD',
    'MA',
    'MI',
    'MN',
    'MS',
    'MO',
    'MT',
    'NE',
    'NV',
    'NH',
    'NJ',
    'NM',
    'NY',
    'NC',
    'ND',
    'OH',
    'OK',
    'OR',
    'PW',
    'PA',
    'RI',
    'SC',
    'SD',
    'TN',
    'TX',
    'UT',
    'VT',
    'VA',
    'WA',
    'WV',
    'WI',
    'WY',
  ],
  CA: [
    'AB',
    'BC',
    'MB',
    'NB',
    'NL',
    'NT',
    'NS',
    'NU',
    'ON',
    'PE',
    'QC',
    'SK',
    'YT',
  ],
};

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

  let key = event.path.replace(/\/provinces\/?/gm, '').split('/');

  return callback(null, {
    statusCode: 200,
    body: JSON.stringify(key in provinces ? provinces[key] : provinces),
  });
};
