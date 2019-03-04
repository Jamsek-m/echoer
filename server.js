const express = require("express");
const cookieParser = require("cookie-parser");
const server = express();

server.use(express.json());
server.use(express.urlencoded({extended: false}));
server.use(cookieParser());
server.disable("x-powered-by");

server.post("/echo", (req, res) => {
    const request = {
        baseUrl: req.baseUrl,
        body: req.body,
        cookies: req.cookies,
        headers: req.headers,
        hostname: req.hostname,
        ip: req.ip,
        params: req.params,
        path: req.path,
        protocol: req.protocol,
        query: req.query,
        route: {
            path: req.route.path,
            methods: req.route.methods
        },
        secure: req.secure,
        subdomains: req.subdomains
    };
    console.log(request);
    console.log("------------------------------");
    res.status(200).json({
        status: 200,
        message: "Echo has been logged!"
    });
});

server.use((req, res, next) => {
    next(new Error(404));
});

// eslint-disable-next-line no-unused-vars
server.use(function(err, req, res, next) {
    res.status(404).json({
        status: 404,
        message: "Error! Requested path not found!"
    });
});

server.listen(3000, () => {
    console.log("Server is running on port 3000!");
});