require('./models/db');
const express   = require('express');
const path      = require('path');
const exphbs    = require('express-handlebars');

const employeeContoller = require('./controllers/employeeController');

var app = express();

//CONF path and handlebars
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('view engine', 'hbs');

app.listen(3000, () => {
    console.log('Server started at port: 3000');
});

// keep just "/" for the initial page
app.use('/employee', employeeContoller);