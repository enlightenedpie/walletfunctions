exports.handler = async function (event, context, callback) {

  let keys = event.path.replace(/\/mockresponse\/?/gm, '').split('/'),
    timeout = parseInt(keys[0].length > 3 ? keys[0] : keys[1]) || 0,
    statusCode = parseInt(keys[0].length === 3 ? keys[0] : '200');

  setTimeout(() => {return;}, timeout);

  return callback(null, {
    statusCode: statusCode,
    body: event.body,
  });
};