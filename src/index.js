const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const PORT = process.env.PORT || "3000";
const server = express();

const openapiSchema = require("./schema/openapi.json");
const handler = require("./handler");

server.use(express.text({
    type: [
        "*/json",
        "*/xml",
        "application/x-www-form-urlencoded",
        "text/*"
    ]
}));
server.use(cookieParser());
server.use(cors());

/**
 * @param payload {EchoResponse}
 */
function logPayload(payload) {
    const stringifiedPayload = JSON.stringify(payload);
    const timestamp = new Date();
    console.log("========== Request ==========");
    console.log(timestamp.toISOString());
    console.log(stringifiedPayload);
}

/**
 * @param req {Request}
 * @param res {Response}
 */
function processEcho(req, res) {
    const payload = handler(req);
    logPayload(payload);
    res.status(200);
    res.json(payload);
}

server.get("/echo", processEcho);

server.post("/echo", processEcho);

server.get("/specs", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200);
    res.send(openapiSchema);
});

server.listen(PORT, () => {
    console.log("Server listening in port " + PORT + "!");
});

