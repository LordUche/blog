import User from '../models/user';

export default function signUp(req, res) {
	const { body } = req;
	User.create(body)
		.then(user => res.status(201).json(user))
		.catch(err => res.status(500).json(err.message));
}
