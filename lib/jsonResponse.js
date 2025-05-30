/*respuestas de peticiones http*/

exports.jsonResponse = function(statusCode, body) {
    return{
        statusCode,
        body,
    }
}
