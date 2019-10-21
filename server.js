import config from './config';
//import fs from 'fs';
import express from 'express';
import apiRouter from './api';
import sass from 'node-sass-middleware';
import path from 'path';

const server = express();
//import config, { nodeEnv } from './config';
//import https from 'https';
//import http from 'http';
server.use(sass({
    src: path.join(__dirname, '/src/sass'),
    dest: path.join(__dirname, 'public')
}));

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
    //res.send('Start Page');
    res.render('index', {
        content: 'Hello there, I am Mike, and here is <em>EJS</em> and <b>Express</b>'
    });
});

server.use('/api', apiRouter);
server.use(express.static('public'));

/*server.get('/about.html', (req, res) => {
    fs.readFile('./about.html', (err, data) => {
        res.send(data.toString());;
    });
});*/

server.listen(config.port, () => {
    console.info('Express listening on port ', config.port);
});

//console.log(config, nodeEnv);
/*
https.get('https://developer.github.com', res => {
    console.log('Response status code is ', res.statusCode);

    res.on('data', chunk => {
        console.log(chunk.toString());
    });
});

const server = http.createServer((req, res) =>{
    res.write('Hello HTTP!\n');
    setTimeout(() => {
        res.write('I can stream!\n');
        res.end();
    }, 3000);
});

server.listen(8080);

server.on('request', );
*/
