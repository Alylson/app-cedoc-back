'use strict';
const nodemailer = require('nodemailer');

const path = require("path");
const nconf = require('nconf');
const settings = path.join(__dirname, '..', '..', 'config', 'settings.json');
nconf.argv().env();
nconf.file({ file: settings });

const transporter = nodemailer.createTransport({
    host: nconf.get('smtpHost'),
    port: nconf.get('smtpPort'),
    secure: nconf.get('smtpSecure'),
    auth: {
        user: nconf.get('smtpUser'),
        pass: nconf.get('smtpPass')
    }
});

const sendEmail = async (receiversArray, assunto, corpo, corpoHtml) => {
    try {
        if (receiversArray.length == 0) { return false}

        let receivers = '';
        for (let c in receiversArray) {
            receivers += receiversArray[c] + (c == (receiversArray.length - 1) ? '' : ', ');
        }

        let mailOptions = {
            from: '"CEDOC" <' + nconf.get('smtpUser') + '>',
            to: receivers,
            subject: assunto,
            text: corpo,
            html: corpoHtml
        };

        let info = await transporter.sendMail(mailOptions);

        return true
    } catch (err) {
        return false
    }
};

const getHTMLRecoveryMessage = (userAccount, recoveryUrl) => {
    return "<div style='padding: 10px 20px 10px 20px; margin: 0 0 20px 0; display: block'>" +
        "<img style='margin: 0 20px 0 0 ;max-width: 180px; display: inline-block' src='" + nconf.get('deployEndpoint') + "/assets/imgs/cedoc-transparente.png'>"  +
        "<img style='max-width: 70px; display: inline-block' src='" + nconf.get('deployEndpoint') + "/assets/imgs/fapdf-transparente.png'>" +
        "</div>" +
        "<div style='text-align: center; width: 700px; background: rgba(27, 81, 114, 1); margin: auto; padding: 15px !important; border-radius: 10px;color: white; font-family: sans-serif, Helvetica, Arial; -webkit-box-shadow: 0px 1px 5px 1px rgba(0,0,0,0.4); -moz-box-shadow: 0px 1px 5px 1px rgba(0,0,0,0.4); box-shadow: 0px 1px 5px 1px rgba(0,0,0,0.4);'>" +
        "<span style='display: block !important; font-weight: bold; font-size: 22px; text-align: left; margin-top: 0px;'>Redefinição de senha</span>" +
        "<span style='display: block !important; font-size: 15px; text-align: left;margin: 10px 0 10px 0'>Clique abaixo para redefinir a senha da conta <i style='color: white !important;'>" + userAccount + "</i></span>" +
        "<a href='" + recoveryUrl + "' style='border-radius: 3px; background: white; color: rgba(27, 81, 114, 1); text-decoration: none;display: inline-block; padding: 15px 50px 15px 50px; font-weight: 550; font-size: 15px; margin: 10px;'>" +
        "DEFINIR NOVA SENHA" +
        "</a>" +
        "<span style='display: block !important; font-size: 11px; text-align: center;margin: 10px 0 10px 0'>" +
        "Se você não solicitou a redefinição de senha para essa conta, por favor, ignore esta mensagem." +
        "</span>" +
        "</div>";
};

const getPlainTextRecoveryMessage = (userAccount, recoveryUrl) => {
    return "\nClique abaixo para redefinir a senha da conta " + userAccount + "\n" +
        recoveryUrl + "\n\n" +
        "Se você não solicitou a redefinição de senha para essa conta, por favor, ignore esta mensagem." ;
};

module.exports = {
    sendEmail: sendEmail,
    getHTMLRecoveryMessage: getHTMLRecoveryMessage,
    getPlainTextRecoveryMessage: getPlainTextRecoveryMessage
};