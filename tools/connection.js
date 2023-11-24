/**
 * Connection file to secure API accesses
 */

var CryptoJS = require("crypto-js");

exports.login = (req, res, next) => {
    if (req.body.req_login && req.body.req_password) {
        var bytesLogin = CryptoJS.AES.decrypt(req.body.req_login.toString(), 'S8!@ghj9078!HGHDE==GHrdvghjsdfhugGK89869H');
        var stringLogin = bytesLogin.toString(CryptoJS.enc.Utf8);
        var bytesPassword = CryptoJS.AES.decrypt(req.body.req_password.toString(), 'S8!@ghj9078!HGHDE==GHrdvghjsdfhugGK89869H');
        var stringPassword = bytesPassword.toString(CryptoJS.enc.Utf8);

        if (stringLogin == "HityNAS87@2792I" && stringPassword == "HJkR67@25037KlMiGmTFGmldZG") {
            next();
        } else {
            return res.status(403).send({
                message: "Accès interdit, bloqué au bout de 3 tentatives."
            })
        }
    } else {
        return res.status(403).send({
            message: "Accès interdit, bloqué au bout de 3 tentatives."
        })
    }
}


exports.loginGet = (req, res, next) => {
    if (req.query.req_login && req.query.req_password) {
        var bytesLogin = CryptoJS.AES.decrypt(decodeURIComponent(req.query.req_login.toString()), 'S8!@ghj9078!HGHDE==GHrdvghjsdfhugGK89869H');
        var stringLogin = bytesLogin.toString(CryptoJS.enc.Utf8);
        var bytesPassword = CryptoJS.AES.decrypt(decodeURIComponent(req.query.req_password.toString()), 'S8!@ghj9078!HGHDE==GHrdvghjsdfhugGK89869H');
        var stringPassword = bytesPassword.toString(CryptoJS.enc.Utf8);

        var login = CryptoJS.AES.encrypt("HityNAS87@2792I", "S8!@ghj9078!HGHDE==GHrdvghjsdfhugGK89869H");
        var password = CryptoJS.AES.encrypt("HJkR67@25037KlMiGmTFGmldZG", "S8!@ghj9078!HGHDE==GHrdvghjsdfhugGK89869H");

        if (stringLogin == "HityNAS87@2792I" && stringPassword == "HJkR67@25037KlMiGmTFGmldZG") {
            next();
        } else {
            return res.status(403).send({
                message: "Accès interdit, bloqué au bout de 3 tentatives."
            })
        }
    } else {
        return res.status(403).send({
            message: "Accès interdit, bloqué au bout de 3 tentatives."
        })
    }
}

/*
Login :     U2FsdGVkX19RSYkCwaMSYP3uhS8kfUxegT4GmQZAu6g=
Password :  U2FsdGVkX19dfUppsEE6XxtlnKUfULWHnAjlxaD+TfsQYeHlTrKrW4Z0Ni232Tp6
*/

/*
var encoded1 = encodeURIComponent(postman.getEnvironmentVariable("U2FsdGVkX1+wn+cGnOdWTJCiyfOdkz5EeXlMgM9Uymw="));
var encoded2 = encodeURIComponent(postman.getEnvironmentVariable("U2FsdGVkX19nJ0ilo9RQLtXMgIkIhGBGbecPr32zaAWgmJOKOeRSMqE5VukvkvU"));
postman.setEnvironmentVariable("encoded login", encoded1);
postman.setEnvironmentVariable("encoded password", encoded2);
*/

/*
var login = CryptoJS.AES.encrypt("HityNAS87@2792I", "S8!@ghj9078!HGHDE==GHrdvghjsdfhugGK89869H");
var password = CryptoJS.AES.encrypt("HJkR67@25037KlMiGmTFGmldZG", "S8!@ghj9078!HGHDE==GHrdvghjsdfhugGK89869H");
return res.status(200).send({
    message: login.toString() + ' ' + password.toString()
})
*/