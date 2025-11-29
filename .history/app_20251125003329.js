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
    const params ={ }
    res.status(200).render('home.pug',params);
});

app.get("/contact", (req, res)=>{ 
    res.status(200).send('contact.pug', params);
});



app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
