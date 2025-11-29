const express = require("express");
const path = require("path");
const app = express();
const port = 8000;

// Static files
app.use('/static', express.static(path.join(__dirname, 'static')));

// Pug setup
app.set('view engine', 'pug');

app.set('views', path.join(__dirname, 'views'));

// Routes
app.get("/", (req, res) => {
    consr
    res.status(200).render('home.pug');
});

app.get("/contact", (req, res) => {
    res.status(200).render('contact.pug', params);
});




app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
