import express from 'express';
import path from 'path';
import routes from './routes';

const app = express();

app.use(express.json());

app.use(routes);

//isto serve para deixarmos disponivel arquivos estaticos
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333);
