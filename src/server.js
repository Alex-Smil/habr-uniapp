import express from 'express';

const app = express();
const PORT = process.env.PORT || 3001;

app.use((req, res) => {
  res.end('<p>Hello World! from ./src/server.js</p>');
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on: ${PORT}`);
});
