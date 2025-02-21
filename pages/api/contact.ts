// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer';

type UserData = {
  companyName   : string,
  companyEmail  : string,
  message       : string
}

type ResponseData = {
  status        : Number,
  message       : string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
    if (req.method === "POST") {
        const { companyName, companyEmail, message } = req.body as UserData; 
        
        try {   
            const transporter = nodemailer.createTransport({
                service: "gmail",
                host: "smtp.gmail.com",
                auth: {
                  user: process.env.HOST_EMAIL,
                  pass: process.env.HOST_PASS,
                },
            });
            
            var mailOptions = {
                from: process.env.HOST_EMAIL,
                to: process.env.HOST_EMAIL,
                subject: `<${companyName}, ${companyEmail}>`,
                text: message
              };
              
            transporter.sendMail(mailOptions, function(error){
                if (error) {
                  throw error;
                } else {
                //   console.log('Email sent: ' + info.response);
                  return res.status(201).json({ status: 201, message: "Message sent successfully." });
                }
            });  
        } catch(error) {
            return res.status(400).json({ status: 400, message: "Message could not be sent." });
        }
    } else {
        return res.status(405).json({ status: 405, message: `Method: [${req.method}] is not allowed on this API.` });
    }
}