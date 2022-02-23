const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) =>{
    sgMail.send({
        to: email,
        from: 'chaturbhuj02@gmail.com',
        subject: 'Thanks for joining',
        text: `Welcome to the App, ${name}. Let me know how you get along with the app. `
    })
}

const sendCancelationMail = (email, name) =>{
    sgMail.send({
        to: email,
        from: 'chaturbhuj02@gmail.com',
        subject: 'Sorry to see u Go!',
        text: `GoodBye, ${name}. I hope to see u soon `
    })
}

module.exports = {
    sendWelcomeEmail,sendCancelationMail
}