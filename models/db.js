const mongoose = require('mongoose');

//======================
// CONNECTION TO DATA BASE
//======================
mongoose.connect('mongodb+srv://<password>:<password>@cluster0-jqh2a.mongodb.net/EmployeeDB?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => {
    console.log('Connected to DB!');
}).catch(err => {
    console.log('ERROR in DB connection:', err.message);
});

require('./employee.model');