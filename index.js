import express  from "express"; // || const express = require('express");
import http from "http";
import morgan from "morgan";
import bodyParser from "body-parser";
import dishRouter from "./routes/dishRouter.js";
import promoRouter from "./routes/promoRouter.js";

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/dishes', dishRouter);
app.use('/promos', promoRouter);

app.use((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is a Express Server</h1></body></html>');
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server runnig at http://${hostname}:${port}`); //interpolação
})