const express = require('express');
const app = express();
const aws = require('aws-sdk');

// middleware 
const bodyParser = require('body-parser');
const Space = require('./app/models/spaces');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;
const router = express.Router();

const s3Bucket = new AWS.S3( { params: {Bucket: 'space-listing-images'} } );

router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

router.route('/spaces/:space_id')
	.get(function(req, res){
		console.log("Received a request for " + req.params.space_id)

		res.json(Space.getSpace(req.params.space_id));

		//res.json({ message: 'Hello! I recieved the request' });
	})
	.post(function(req, res){

	})

router.route('/Spaces')
	.put(function(req, res){

	})

app.use('/api/', router);

app.listen(port);

console.log('Magic happens on port ' + port);
