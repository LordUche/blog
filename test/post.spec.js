import chai, { expect } from 'chai';
import chaiHTTP from 'chai-http';
import app from '../src/app';
import User from '../src/models/user';

chai.use(chaiHTTP);

describe('POST /users/1/posts/new', () => {
	let user;
	before(async () => {
		user = await User.create({ username: 'lorduche', password: '12345' });
	});

	it('should create a post', done => {
		chai
			.request(app)
			.post('/users/' + user.id + '/posts/new')
			.send({
				title: 'Hello world',
				body: 'This is a test',
				userId: user.id
			})
			.end((err, res) => {
				expect(res).to.have.status(201);
				expect(res.body.id).to.be.a('number');
				done(err);
			});
	});
});
