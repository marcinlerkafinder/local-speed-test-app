import compression from 'compression';
import express from 'express';

const app = express();
const PORT = 3060;

app.use(compression());
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  console.log('=> req /');
  res.status(200).end();
});

app.listen(PORT, err => {
  if (err) {
    console.log(err);
  }
  console.log('connected on port 3060');
});
