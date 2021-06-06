exports.handler = async function (event, context, callback) {

  let keys = event.path.replace(/\/mockresponse\/?/gm, '').split('/');

  return callback(null, {
    statusCode: keys[0].parseInt() || 200,
    body: JSON.stringify(keys),
  });
};