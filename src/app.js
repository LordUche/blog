import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './routes';

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('', routes);
app.listen(5000, () => {
	console.log('App listening on port 5000');
});

export default app;
