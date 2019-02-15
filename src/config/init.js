import sequelize from './database';
import User from '../models/user';
import Post from '../models/post';

sequelize
	.authenticate()
	.then(() => User.sync())
	.then(() => Post.sync())
	.then(() => {
		console.log('Successfully connected to database');
		process.exit(0);
	})
	.catch(err => {
		console.error('Could not connect to the database: ', err.message);
		process.exit(1);
	});
