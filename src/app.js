import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import sequelize from './config/database';
import routes from './routes';
import User from './models/user';
import Post from './models/post';

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('', routes);
app.listen(5000, () => {
	console.log('App listening on port 5000');
	sequelize
		.authenticate()
		.then(() => User.sync())
		.then(() => Post.sync())
		.then(() => console.log('Successfully connected to database'))
		.catch(err => console.error('Could not connect to the database: ', err.message));
});
