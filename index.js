const nodemailer = require('nodemailer')

const smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: 'aztec.cnc@gmail.com',
        pass: 'Mayur#2000'
    }
})

// list of receivers
// var mailOptions = {
//     from: "AZtecCNC ✔ <aztec.cnc@gmail.com>", // sender address
//     to: "mk2000abc@gmail.com, mmkamble2000@gmail.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world ✔", // plaintext body
//     html: "<b>Hello world ✔</b>" // html body
// }

// single receivers
var mailOptions = {
    from: "AZtecCNC <aztec.cnc@gmail.com>", // sender address
    to: "cse.mkamble@gmail.com",
    subject: "Hello", // Subject line
    text: "Hello world", // plaintext body
    html: "<b>Hello world</b>" // html body
}

// send mail with defined transport object
smtpTransport.sendMail(mailOptions, function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log("Message sent.");
    }
});