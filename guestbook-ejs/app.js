import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

const PORT = 3000;

// create an express app
const app = express();

// tell express to use ejs as the view engine
app.set('view engine', 'ejs');

// create a global array to store all entries
// and make it available in all views
let entries = [];
app.locals.entries = entries;

// uses morgan to log every request
app.use(logger('dev'));

// populates a variable called req.body if the user
// is submitting a form. (The extended option is 
// required)
app.use(bodyParser.urlencoded({ extended: false }));

// when visitng the site root, renders the homepage
// at ./views/index.ejs
app.get('/', (req, res) => {
    res.render('index');
});

// renders the "new entry" page at ./views/index.ejs
// when GETting the URL
app.get('/new-entry', (req, res) => {
    res.render('new-entry');
});

// defines a route handler when you POST to the 'new-entry' URL
// if user submits the form with no title or content, a 400 error is sent
// otherwise a new entry to the list of entries is added.
// Finally, the user is redirected back to the homepage

app.post('/new-entry', (req, res) => {
    if (!req.body.title || !req.body.body) {
        res.status(400).send('Entries must have a title and a body.');
        return;
    }
    entries.push({
        title: req.body.title,
        content: req.body.body,
        published: new Date()
    })
    res.redirect('/');
});

// renders a 404 error because you're requesting an unknown source
app.use( (req, res) => {
    res.status(404).render('404');
});

// starts the server on port 3000
app.listen(PORT, () => {
    console.log(`Guestbook app started on port ${PORT}\n` +
                 `Press CTRL-C to stop.`);
});
