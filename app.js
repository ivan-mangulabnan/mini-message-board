import express from 'express';
const app = express();
const PORT = 6969;

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Server running');
})