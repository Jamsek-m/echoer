/**
 * @typedef EchoResponse
 * @property {Map<string, string>} queryParameters
 * @property {Map<string, string>} headers
 * @property {Map<string, string>} cookies
 * @property {string} body
 */

/**
 * @param req {Request}
 * @return {EchoResponse}
 */
module.exports = function formatRequest(req) {
    const responsePayload = {};
    
    if (req.query) {
        responsePayload.queryParameters = req.query;
    }
    if (req.headers) {
        responsePayload.headers = req.headers;
    }
    if (req.cookies) {
        responsePayload.cookies = req.cookies;
    }
    
    if (req.body) {
        responsePayload.body = req.body;
    }
    
    return responsePayload;
}
