const express = require('express');
const cors = require("cors");
const helmet = require("helmet");
const SchemeRouter = require('./schemes/scheme-router.js');

const server = express();

server.use(express.json());
server.use('/api/schemes', SchemeRouter);
server.use(cors());
server.use(helmet());


module.exports = server;