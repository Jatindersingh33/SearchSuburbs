import express from 'express';
import { MongoClient, ObjectID } from 'mongodb';
import assert from 'assert';
import config from '../config';


// Database connection
let mdb;
MongoClient.connect(config.mongodbUri, (err, db) => {
  assert.equal(null, err);
  mdb = db;
});

const router = express.Router();
var areas={};
// Rest api to get suburbs based on postcode
router.get('/areas/:postcode', (req, res) => {
mdb.collection('postcodes').find({PostCode: req.params.postcode}).toArray(function (err,suburbs) {
     if (err) {
        console.dir(err);
     } else {
        res.send({areas:suburbs});
     }
   });
});

export default router;
