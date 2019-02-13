import Sequelize from 'sequelize';
import sequelize from '../config/database';
import User from './user';

const Post = sequelize.define('post', {
	title: { type: Sequelize.STRING, allowNull: false },
	body: { type: Sequelize.STRING, allowNull: false }
});

Post.belongsTo(User);

export default Post;
