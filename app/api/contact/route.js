import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    // Parse the incoming JSON payload
    const { firstname, lastname, email, phone, service, message } = await req.json();

    // Setup Maildev transporter
    const transporter = nodemailer.createTransport({
      host: 'localhost', // Maildev runs on localhost
      port: 1025, // Maildev SMTP port
      secure: false, // Maildev does not use SSL
    });

    const mailOptions = {
      from: email, // Sender's email (the email entered in the form)
      to: 'recipient@example.com', // Replace with your email or the one to receive the form data
      subject: `New Contact Message from ${firstname} ${lastname}`,
      text: `
        First Name: ${firstname}
        Last Name: ${lastname}
        Email: ${email}
        Phone: ${phone}
        Service: ${service}
        Message: ${message}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Respond with success
    return new Response(
      JSON.stringify({ message: 'Email sent successfully' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);

    // Respond with an error
    return new Response(
      JSON.stringify({ message: 'Error sending email', error: error.message }),
      { status: 500 }
    );
  }
}