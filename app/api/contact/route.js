
export async function POST(request) {
  try {
    const formData = await request.json(); // Parse the incoming JSON data

    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: 'service_igipb6r',    // Replace with your Service ID
        template_id: 'template_3tcgcum',  // Replace with your Template ID
        user_id: '2kPXi079dRuwidjTh',     // Replace with your User ID
        template_params: formData,         // Pass the form data here
      }),
    });

    const text = await response.text(); // Get raw response as text
    console.log('Raw response:', text);  // Log the raw response

    if (response.ok) {
      return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } else {
      throw new Error('Failed to send email: ' + text);
    }
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ message: 'Error sending email' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}