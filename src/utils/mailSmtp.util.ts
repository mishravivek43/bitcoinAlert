import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: process.env.port,
  auth: {
    user: process.env.username,
    pass: process.env.password
  }
} as unknown as SMTPTransport.Options);

// send mail with defined transport object
const sendMailFunction = async (isMax: boolean) => {
  let subject: string, text: string, html: string;
  if (isMax) {
    subject = `Bitcoin surpassed the Max`;
    text = `Hello The Bitcoin surpassed the Max 
    value ${process.env.MAX} Do ur bit of trading now`;
    html = `<b>Hello</b><p>The Bitcoin surpassed 
    the Max value ${process.env.MAX}</p><p>Do ur bit of trading now</p>  `;
  } else {
    subject = `Bitcoin is below the Min`;
    text = `Hello The Bitcoin is below 
    the Min value ${process.env.MIN} Do ur bit of trading now`;
    html = `<b>Hello</b><p>The Bitcoin is below 
    the Min value ${process.env.MIN}</p><p>Do ur bit of trading now</p>  `;
  }
  await transporter.sendMail({
    from: 'mishravivek43@gmail.com', // sender address
    to: process.env.receiver, // list of receivers
    subject: subject, // Subject line
    text: text, // plain text body
    html: html // html body
  });
};

export default sendMailFunction;
