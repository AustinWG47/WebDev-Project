const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); //send data in JSON
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('public')); // needed to get static files from public directory (css and .js files)

app.get('/Contact.html', (req, res) => {
    res.sendFile(__dirname + '/public/Contact.html'); // send Contact file on GET request
});



app.post('/formPost', (req, res) => {

    const formData = req.body; // access form data
    // Add validation logic here

    console.log(formData);
    
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});