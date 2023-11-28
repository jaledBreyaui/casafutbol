const nodemailer = require('nodemailer');
require('dotenv').config()
const hbs = require('nodemailer-express-handlebars');
const path = require('path')

const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    auth: {
        user: process.env.ADMIN_BREVO_MAIL,
        pass: process.env.ADMIN_MAIL_PASS
    }
});

const handlebarOptions = {
    viewEngine: {
        extName: ".handlebars",
        partialsDir: path.resolve('./public/views'),
        defaultLayout: false,
    },
    viewPath: path.resolve('./public/views'),
    extName: ".handlebars",
}


transporter.use('compile', hbs(handlebarOptions));


const newOrderMail = (buyer, products, total, id) => {
    const mailOptions = {
        from: process.env.ADMIN_MAIL,
        to: [buyer.Email, process.env.ADMIN_MAIL],
        subject: "Compra realizada CasaFutbol",
        template: 'email',
        context: {
            buyer: buyer,
            products: products,
            total: total,
            id: id,
        },
        attachments: [
            {
                filename: "logopng.png",
                path: 'public/imgs/logopng.png',
                cid: 'image'
            }
        ]

    }
        ; (async () => {
            try {
                const info = await transporter.sendMail(mailOptions)

            } catch (error) {
                console.log(error);
            }
        })()
}
module.exports = newOrderMail 