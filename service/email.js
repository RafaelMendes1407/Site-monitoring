require('dotenv').config({
    path: '../.env'
});

const queue = require('../queue/rabbitmq');
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

const callback = (err) => err ? console.log(err) : console.log('Email enviado com Sucesso!');

function sendMsg(msg) {
    sender.sendMail(msg, () => callback());
}


queue.consume('websiteStatus', message => {
    console.log("Processing " + message.content.toString());
    const msg = email('rafael.m1407@gmail.com', 'Disponibilidade de Serviço', 'O serviço solicitado ja se encontra disponivel!');
    sendMsg(msg);
});