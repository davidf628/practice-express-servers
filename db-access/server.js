import express from 'express';
import { pool } from './db.js';

const app = express();
const PORT = 3000;

// EJS as the template engine
app.set('view engine', 'ejs');

// Route: fetch users and render template
app.get('/', async (req, res) => {
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query("SELECT title, artist, rating FROM songs");
        res.render('songlist', { songs: rows });
    } catch (err) {
        console.error(err);
        res.status(500).send("Database error");
    } finally {
        if (conn) conn.release();
    }
});

app.listen(PORT, () => {
    console.log(
        `✅ Server running at http://localhost:${PORT}\n` +
        `Press CTRL+C to quit.`
    );
});