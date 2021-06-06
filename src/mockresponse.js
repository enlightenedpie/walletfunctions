exports.handler = async function (event, context, callback) {

  let keys = event.path.replace(/\/mockresponse\/?/gm, '').split('/');

  return callback(null, {
    statusCode: 200,
    body: JSON.stringify(keys.length),
  });
};