import express from 'express';
const app = express();

app.get('/hello', (req, res) =>
    res.send('Hello World Maulik!'));

const PORT = 4000;
app.listen(PORT);