const express = require('express');
const cors = require('cors');
const path = require('path');
require('./db/mongoose');
const userRouter = require('./routers/user');
const courseRouter = require('./routers/course');

const app = express();
const router = new express.Router();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(courseRouter);
app.listen(port, () => {
	console.log('Server is up on port ' + port);
});

//deploy to heroku
app.use(express.static(path.join(__dirname, '../client/build')));
app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});
