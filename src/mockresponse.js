exports.handler = async function (event, context, callback) {

  let keys = event.path.replace(/\/mockresponse\/?/gm, '').split('/');

  setTimeout(() => {return;}, parseInt(keys[1]) || 0);

  return callback(null, {
    statusCode: parseInt(keys[0]) || 200,
    body: event.body,
  });
};