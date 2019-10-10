// Enable secure sessions, express-style middleware, and more:
// https://docs.begin.com/en/functions/http/
//
// let begin = require('@architect/functions')

// HTTP function
exports.handler = async function http(req) {
  console.log(req)
  return {
    headers: {
      'content-type': 'text/html; charset=utf8'
    },
    body: JSON.stringify(req.pathParameters),
  }
}
