var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var util = require('util');
var index = require('./routes/index');
var users = require('./routes/users');
var expressValidator = require('express-validator');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(expressValidator());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

//react
app.post('/application', (req, res) => {


    switch (Object.keys(req.body)[0]) {
        case "applicant_information": {
            req.check("applicant_information.full_name", "Not valid full name.").notEmpty().isLength({min: 2, max: 20});
            req.check("applicant_information.email", "Not valid email address.").notEmpty().isEmail();
            req.check("applicant_information.cell_phone", "Not valid cell phone number.").notEmpty();
            req.check("applicant_information.home_phone", "Not valid home phone number.").notEmpty();
            req.check("applicant_information.date_of_birth", "Not valid date.").isBefore("1 Jan, 2000");
            req.check("applicant_information.social_security_number", "Not social security number.").matches(/^(\d{3}-?\d{2}-?\d{4}|XXX-XX-XXXX)$/);
            break;
        }
        case "current_residence": {
            req.check("current_residence.address", "Not valid address.").notEmpty().isLength({min: 5, max: 50});
            break;
        }
    }

    const errors = req.validationErrors();
    if (errors) {
        res.send(errors);
    }
    else {
        res.sendStatus(200);
    }
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
