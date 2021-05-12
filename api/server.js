const express = require('express');
const cors = require("cors");
const helmet = require("helmet");
const SchemeRouter = require('./schemes/scheme-router.js');

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());
server.use('/api/schemes', SchemeRouter);
server.use("/", (req, res)=>{
    res.send("<h2>Success</h2>");
})

module.exports = server;