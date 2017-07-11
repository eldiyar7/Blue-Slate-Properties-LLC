var express = require('express'),
    router = express.Router(),
    pg = require('pg');


function dateFormatter(date) {
    const d = new Date(date);
    return (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear();
}

router.post('/applicants', function (req, res, next) {
    var ai = req.body.applicant_information;
    var cr = req.body.current_residence;
    var pr = req.body.previous_residence;
    var ce = req.body.current_employer;
    var pe = req.body.previous_employer;
    var r = req.body.references;
    var a = req.body.agreement;

    //connect to postgres
    var conString = 'postgres://bsp:jainashka89@localhost:5432/applicants';
    var client = new pg.Client(conString);

    // connect to applicants database
    client.connect(function (err) {
        if (err) throw err;

        const ai_query = 'INSERT INTO applicant_information(full_name, date_of_birth, social_security_number, email, cell_phone, home_phone) VALUES($1, $2, $3, $4, $5, $6) RETURNING *';
        const ai_values = [ai.full_name, dateFormatter(ai.date_of_birth), ai.social_security_number, ai.email, ai.cell_phone, ai.home_phone];
        client.query(ai_query, ai_values, function (err, res) {
            if (err) throw err;
            // returned applicant_id
            const applicant_id = res.rows[0].applicant_id;

            const cr_query = 'INSERT INTO current_residence(applicant_id, address, city, date, owner_managers_name, owner_managers_phone, rent, state, zip) ' +
                'VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)';
            const cr_values = [applicant_id, cr.address, cr.city, cr.date, cr.owner_managers_name, cr.owner_managers_phone, cr.rent, cr.state, cr.zipcode];
            client.query(cr_query, cr_values, function (err, res) {
                if (err) throw err;
            });

            const pr_query = 'INSERT INTO previous_residence(applicant_id, address, city, date, owner_managers_name, owner_managers_phone, rent, state, zip) ' +
                'VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)';
            const pr_values = [applicant_id, pr.address, pr.city, pr.date, pr.owner_managers_name, pr.owner_managers_phone, pr.rent, pr.state, pr.zipcode];
            client.query(pr_query, pr_values, function (err, res) {
                if (err) throw err;
            });

            const ce_query = 'INSERT INTO current_employer(applicant_id, employer, occupation, employer_address, employer_phone, employment_date, supervisor, salary) ' +
                'VALUES($1, $2, $3, $4, $5, $6, $7, $8)';
            const ce_values = [applicant_id, ce.employer, ce.occupation, ce.employer_address, ce.employer_phone, dateFormatter(ce.employment_date), ce.supervisor, ce.salary];
            client.query(ce_query, ce_values, function (err, res) {
                if (err) throw err;
            });

            const pe_query = 'INSERT INTO previous_employer(applicant_id, employer, occupation, employer_address, employer_phone, employment_date, supervisor, salary) ' +
                'VALUES($1, $2, $3, $4, $5, $6, $7, $8)';
            const pe_values = [applicant_id, pe.employer, pe.occupation, pe.employer_address, pe.employer_phone, dateFormatter(pe.employment_date), pe.supervisor, pe.salary];
            client.query(pe_query, pe_values, function (err, res) {
                if (err) throw err;
            });

            const ch_query = 'INSERT INTO credit_history(applicant_id, checking_account, savings_account, credit_card, auto_loan, additional_debt) ' +
                'VALUES($1, $2, $3, $4, $5, $6)';
            const ch_values = [applicant_id, ch.checking_account, ch.savings_account, ch.credit_card, ch.auto_loan, ch.additional_debt];
            client.query(ch_query, ch_values, function (err, res) {
                if (err) throw err;
            });

            const r_query = 'INSERT INTO reference(applicant_id, name, phone, relationship) ' +
                'VALUES($1, $2, $3, $4)';
            const r_values = [applicant_id, r.name, r.phone, r.relationship];
            client.query(r_query, r_values, function (err, res) {
                if (err) throw err;
            });

            const a_query = 'INSERT INTO agreement(applicant_id, deposit_amount, checked) ' +
                'VALUES($1, $2, $3, $4)';
            const a_values = [applicant_id, a.deposit_amount, a.checked];
            client.query(a_query, a_values, function (err, res) {
                if (err) throw err;
            });

            // disconnect database
            client.end(function (err) {
                if (err) throw err;
            })
        });

    });
});

module.exports = router;


