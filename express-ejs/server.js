import express from 'express';

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('hello-world', {
        message: "Hey everyone! This is my webpage."
    });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}` + 
              `\n\nPress CTRL-C to quit.`);
});