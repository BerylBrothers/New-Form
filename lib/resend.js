"use server";

import {Resend} from "resend"

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async () => {
await resend.emails.send({
    to:"dopecronski@gmail.com",
    from:"dopecronski@gmail.com",
    subject:"Test",
    html:"<Strong>This is a test message.</Strong>"
})
}