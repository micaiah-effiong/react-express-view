import path from 'path';
import fs from 'fs';
import ReactDOMServer from 'react-dom/server';
import express from 'express';

const PORT = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
  fs.readFile(
    path.resolve(__dirname, 'pages/index.html'),
    'utf8',
    (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).send('An error occurred');
      }

      const a = require('./views/vercel');

      return res.end(
        ReactDOMServer.renderToString(a.default({ name: 'boy', title: 'good' }))
      );
    }
  );
});

app.use(
  express.static(path.resolve(__dirname, '.', 'dist'), { maxAge: '30d' })
);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
