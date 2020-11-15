require('dotenv').config({
    path: '../.env'
});

const nm = require('nodemailer');

const sender = nm.createTransport({
    host: 'Outlook.office365.com',
    port: 587,
    secure: false,
    auth: {
        user: 'rafael_mendes@outlook.com',
        pass: process.env.PASS
    }
});

const email = function (to, subject, text) {
    const from = 'rafael_mendes@outlook.com';
    return {
        from,
        to,
        subject,
        text
    };
}

const sendMsg = email('rafael.m1407@gmail.com', 'Serviço Ativo', 'O Serviço ja se encontra disponivel!');

const sendEmail = sender.sendMail(sendMsg, function (error) {
    if (error) {
        return error;
    } else {
        return 'Email enviado com Sucesso!'
    }
});

console.log(sendEmail);

module.exports = {
    sendEmail,
    email
};