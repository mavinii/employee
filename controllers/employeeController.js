const express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.render("employee/addOrEdit", {
        viewTitle: "Insert Employee"
    });
});

module.exports = router; 