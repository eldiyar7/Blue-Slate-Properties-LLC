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
            req.check("applicant_information.cell_phone", "Not valid cell phone number.").notEmpty().matches(/^[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-/\s.]?[0-9]{4}$/);
            req.check("applicant_information.home_phone", "Not valid home phone number.").notEmpty().matches(/^[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-/\s.]?[0-9]{4}$/);
            req.check("applicant_information.date_of_birth", "Not valid date.").isBefore("1 Jan, 2000");
            req.check("applicant_information.social_security_number", "Not social security number.").matches(/^(\d{3}-?\d{2}-?\d{4}|XXX-XX-XXXX)$/);
            break;
        }
        case "current_residence": {
            req.check("current_residence.address", "Not valid address.").notEmpty().isLength({min: 5, max: 50});
            req.check("current_residence.city", "Not valid city.").notEmpty().isLength({min: 2, max: 30});
            req.check("current_residence.state", "Not valid state.").notEmpty().isAlpha().isLength({min: 2, max: 50});
            req.check("current_residence.zip", "Not valid zip code.").notEmpty().isNumeric();
            req.check("current_residence.rent", "Not valid rent amount.").notEmpty().isFloat({ min: 200, max: 5000 });
            req.check("current_residence.date", "Not valid date.").notEmpty();
            req.check("current_residence.owner_managers_name", "Not valid name.").notEmpty().isLength({min: 2, max: 20});
            req.check("current_residence.owner_managers_phone", "Not valid phone number.").notEmpty();
            break;
        }
        case "previous_residence": {
            req.check("previous_residence.address", "Not valid address.").notEmpty().isLength({min: 5, max: 50});
            req.check("previous_residence.city", "Not valid city.").notEmpty().isLength({min: 2, max: 30});
            req.check("previous_residence.state", "Not valid state.").notEmpty().isAlpha().isLength({min: 2, max: 50});
            req.check("previous_residence.zip", "Not valid zip code.").notEmpty().isNumeric();
            req.check("previous_residence.rent", "Not valid rent amount.").notEmpty().isFloat({ min: 200, max: 5000 });
            req.check("previous_residence.date", "Not valid date.").notEmpty();
            req.check("previous_residence.owner_managers_name", "Not valid name.").notEmpty().isLength({min: 2, max: 20});
            req.check("previous_residence.owner_managers_phone", "Not valid phone number.").notEmpty();
            break;
        }
        case "current_employer": {
            req.check("current_employer.employer", "Not valid employer name.").notEmpty().isLength({min: 2, max: 20});
            req.check("current_employer.occupation", "Not valid occupation.").notEmpty();
            req.check("current_employer.employer_address", "Not valid address.").notEmpty().isLength({min: 5, max: 50});
            req.check("current_employer.employer_phone", "Not valid phone.").notEmpty().matches(/^[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-/\s.]?[0-9]{4}$/);
            req.check("current_employer.employment_date", "Not valid date.").notEmpty();
            req.check("current_employer.supervisor", "Not valid name.").notEmpty();
            req.check("current_employer.salary", "Not valid salary.").notEmpty().isFloat();
            break;
        }
        case "credit_history": {
            req.check("credit_history.checking_account", "Not valid money amount.").notEmpty().isFloat();
            req.check("credit_history.savings_account", "Not valid money amount.").notEmpty().isFloat();
            req.check("credit_history.credit_card", "Not valid money amount.").notEmpty().isFloat();
            req.check("credit_history.auto_loan", "Not valid money amount.").notEmpty().isFloat();
            req.check("credit_history.additional_debt", "Not valid money amount.").notEmpty().isFloat();
            break;
        }
        case "references": {
            req.check("references.name", "Not valid name.").notEmpty();
            req.check("references.phone", "Not valid phone.").notEmpty().matches(/^[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-/\s.]?[0-9]{4}$/);
            req.check("references.relationship", "Not valid name.").notEmpty();
            break
        }
        case "agreement": {
            req.check("agreement.deposit_amount", "Not valid amount.").notEmpty().isFloat();
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
