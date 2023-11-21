const nodemailer = require('nodemailer');
require('dotenv').config()
const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    auth: {
        user: "jaledbreyaui.web@gmail.com",
        pass: process.env.ADMIN_MAIL_PASS
    }
});


const newOrderMail = (buyer, products, total) => {
    const mailOptions = {
        from: 'casafutbolarg@gmail.com',
        to: buyer.Email,
        subject: "GRACIAS POR COMPRA",
        html:
            `<div> 
        <h2> Datos del comprador</h2>
        <p>Nombre y Apellido : ${buyer.Nombre} ${buyer.Apellido}  </p> 
        <p>Email: ${buyer.Email}</p>  
        <p>Celular: ${buyer.Teléfono}</p> 
        <p>Dirección: ${buyer.Dirección} <span>${buyer.Timbre}</span> <span>CP: ${buyer.CódigoPostal}</span></p>  
        <p>TOTAL: ${total}</p> 
        </div>`,
        attachments: [
            products
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