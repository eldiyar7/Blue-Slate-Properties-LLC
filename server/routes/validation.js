var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function (req, res, next) {
    "use strict";
    switch (req.body.object.stepIndex) {
        case 0: {
            req.check("object.full_name", "Not valid full name.").notEmpty().isLength({
                min: 2,
                max: 20
            });
            req.check("object.email", "Not valid email address.").notEmpty().isEmail();
            req.check("object.cell_phone", "Not valid cell phone number.").notEmpty().matches(/^[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-/\s.]?[0-9]{4}$/);
            req.check("object.home_phone", "Not valid home phone number.").notEmpty().matches(/^[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-/\s.]?[0-9]{4}$/);
            req.check("object.date_of_birth", "Not valid date.").isBefore("1 Jan, 2000");
            req.check("object.social_security_number", "Not social security number.").matches(/^(\d{3}-?\d{2}-?\d{4}|XXX-XX-XXXX)$/);
            break;
        }
        case 1: {
            req.check("object.address", "Not valid address.").notEmpty().isLength({min: 5, max: 50});
            req.check("object.city", "Not valid city.").notEmpty().isLength({min: 2, max: 30});
            req.check("object.zip", "Not valid zip code.").notEmpty().isNumeric();
            req.check("object.rent", "Not valid rent amount.").notEmpty().isFloat({min: 200, max: 5000});
            req.check("object.date", "Not valid date.").notEmpty();
            req.check("object.owner_managers_name", "Not valid name.").notEmpty().isLength({
                min: 2,
                max: 20
            });
            req.check("object.owner_managers_phone", "Not valid phone number.").notEmpty();
            break;
        }
        case 2: {
            req.check("object.address", "Not valid address.").notEmpty().isLength({min: 5, max: 50});
            req.check("object.city", "Not valid city.").notEmpty().isLength({min: 2, max: 30});
            req.check("object.zip", "Not valid zip code.").notEmpty().isNumeric();
            req.check("object.rent", "Not valid rent amount.").notEmpty().isFloat({
                min: 200,
                max: 5000
            });
            req.check("object.date", "Not valid date.").notEmpty();
            req.check("object.owner_managers_name", "Not valid name.").notEmpty().isLength({
                min: 2,
                max: 20
            });
            req.check("object.owner_managers_phone", "Not valid phone number.").notEmpty();
            break;
        }
        case 3: {
            req.check("object.employer", "Not valid employer name.").notEmpty().isLength({
                min: 2,
                max: 20
            });
            req.check("object.occupation", "Not valid occupation.").notEmpty();
            req.check("object.employer_address", "Not valid address.").notEmpty().isLength({
                min: 5,
                max: 50
            });
            req.check("object.employer_phone", "Not valid phone.").notEmpty().matches(/^[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-/\s.]?[0-9]{4}$/);
            req.check("object.employment_date", "Not valid date.").notEmpty();
            req.check("object.supervisor", "Not valid name.").notEmpty();
            req.check("object.salary", "Not valid salary.").notEmpty().isFloat();
            break;
        }
        case 5: {
            req.check("object.checking_account", "Not valid money amount.").notEmpty().isFloat();
            req.check("object.savings_account", "Not valid money amount.").notEmpty().isFloat();
            req.check("object.credit_card", "Not valid money amount.").notEmpty().isFloat();
            req.check("object.auto_loan", "Not valid money amount.").notEmpty().isFloat();
            req.check("object.additional_debt", "Not valid money amount.").notEmpty().isFloat();
            break;
        }
        case 6: {
            req.check("object.name", "Not valid name.").notEmpty();
            req.check("object.phone", "Not valid phone.").notEmpty().matches(/^[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-/\s.]?[0-9]{4}$/);
            req.check("object.relationship", "Not valid name.").notEmpty();
            break
        }
        case 7: {
            req.check("object.deposit_amount", "Not valid amount.").notEmpty().isFloat();
            req.check("object.checked", "Not valid input.").notEmpty().isBoolean();
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

module.exports = router;
