exports.handler = async function (event, context, callback) {

  let keys = event.path.replace(/\/mockresponse\/?/gm, '').split('/');

  return callback(null, {
    statusCode: parseInt(keys[0]) || 200,
    body: JSON.stringify(event.body),
  });
};