import express from 'express';
import config from './config';
import apiRouter from './api';
import {MongoClient} from 'mongodb';

const server = express();
server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  res.render('index');
})

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, () => {
  //console.info(config.port);
});
