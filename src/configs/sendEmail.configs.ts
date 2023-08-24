import { createTransport } from "nodemailer"
import { IEmailRequest } from "../interfaces/user.interfaces"
import "dotenv/config"
import Mailgen from "mailgen"

class EmailService {
    async sendEmail({ to, subject, text}: IEmailRequest){
        const transporter = createTransport({
            host: "smtp.gmail.com",
            auth: {
                user: "biel.ferreira12342@gmail.com",
                pass: "dpbrxuxpbsmkntre",
            }
        })
        await transporter.sendMail({
            from: "biel.ferreira12342@gmail.com",
            to,
            subject,
            html: text
        }).then(() => console.log("email send")).catch((err) => console.log(err))
    }

    resetPasswordTemplete(userEmail: string, userName: string, resetToken: string) {
        const mailGenerator = new Mailgen({
            theme: 'default',
            product: {
                name: 'M6 T15',
                link: 'https://localhost:3000/user'
            }
        })

        const email = {
            body: {
                name: userName,
                intro: 'You have received this email because a password reset request for your account was received.',
                action: {
                    instructions: 'Click the button below to reset your password:',
                    button: {
                        color: '#DC4D2F',
                        text: 'Reset your password',
                        link: `https://localhost:3000/resetPassword?${resetToken}`
                        // link: 'http://localhost:5173/login/'
                    }
                },
                outro: 'If you did not request a password reset, no further action is required on your part.'
            }
        };

        const emailBody = mailGenerator.generate(email)

        const emailTemplate = {
            to: userEmail,
            subject: "reset password",
            text: emailBody
        }

        return emailTemplate
    }
}

const emailService = new EmailService()

export { emailService }