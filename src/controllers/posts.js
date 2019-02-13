import Post from '../models/post';
import User from '../models/user';

export default async function createPost(req, res) {
	const { body, params } = req;

	try {
		const user = await User.findByPk(params.userId);
		Post.create({ ...body, userId: user.id })
			.then(post => res.status(201).json(post))
			.catch(err => res.status(500).json(err.message));
	} catch (error) {
		return res.status(500).json(`User doesn't exist`);
	}
}
