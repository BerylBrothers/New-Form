"use client";

import React, { useState } from 'react'

import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
// import emailjs from 'emailjs-com'; // Import EmailJS


import { Select, SelectItem, SelectContent,
   SelectGroup, SelectLabel, SelectTrigger, 
   SelectValue } from "../../components/ui/select";

import { motion } from 'framer-motion';

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const info = [
  { icon: <FaPhoneAlt />,
    title: "Phone",
    description: "904-477-8782"
  },
  { icon: <FaEnvelope />,
    title: "Envelope",
    description: "Daniel@BerylBrothers.com"
  },
  { icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "154e7 database dr, Boston, MA"
  },
]

const Contact = () => {
  
  // //Create state for the form data
  // const [formData, setFormData] = useState({
  //   firstname: '',
  //   lastname: '',
  //   email: '',
  //   phone: '',
  //   service: '',  // This will store the selected service
  //   message: ''
  // });

  // // Handle form field changes
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // // Handle select change for "Select a service"
  // const handleServiceChange = (value) => {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     service: value,
  //   }));
  // };

  // // Handle form submission
  // const sendEmail = async (e) => {
  //   e.preventDefault();

  //   // Make a POST request to the API route
  //   const response = await fetch("/api/contact", {
  //     method: "POST",
  //     body: JSON.stringify(formData),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   if (response.ok) {
  //     alert("Email sent successfully!");
  //   } else {
  //     alert("Error sending email.");
  //   }
  // };

  // return (
  //   <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} className='py-6'>
  //     <div className="container mx-auto">
  //       <div className='flex flex-col xl:flex-row gap-[30px]'>
  //         {/* form */}
  //         <div className='xl:-[54%] order-2 xl:order-none'>
  //           <form className="flex flex-col gap-6 p-10 bg-blue-600 rounded-xl" onSubmit={sendEmail}>
  //             <h3 className='text-white'>Let's Work Together!</h3>
  //             <p>I’m passionate about creating user-friendly, high-quality websites and web applications. With expertise in modern technologies and design, I’m committed to delivering solutions that match your vision and goals. Let’s work together to bring your ideas to life with clean, efficient code.</p>

  //             {/* input */}
  //             <div className='text-white grid grid-cols-1 md:grid-cols-2 gap-6'>
  //               <Input name="firstname" type="text" placeholder="First Name" value={formData.firstname} onChange={handleInputChange} />
  //               <Input name="lastname" type="text" placeholder="Last Name" value={formData.lastname} onChange={handleInputChange} />
  //               <Input name="email" type="email" placeholder="Email Address" value={formData.email} onChange={handleInputChange} />
  //               <Input name="phone" type="phone" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} />
  //             </div>

  //             {/* Select dropdown */}
  //             <Select value={formData.service} onValueChange={handleServiceChange}>
  //               <SelectTrigger className="w-full rounded-xl">
  //                 <SelectValue placeholder="Select a service" />
  //               </SelectTrigger>
  //               <SelectContent>
  //                 <SelectGroup>
  //                   <SelectLabel>Select a service</SelectLabel>
  //                   <SelectItem value="Web-Dev">Web Development</SelectItem>
  //                   <SelectItem value="Ui/UX">UI/UX</SelectItem>
  //                   <SelectItem value="Logo-Design">Logo Design</SelectItem>
  //                 </SelectGroup> new comment
  //               </SelectContent>
  //             </Select>

  //             {/* Text Area */}
  //             <Textarea name="message" className="h-[200px]" placeholder="Type your message here." value={formData.message} onChange={handleInputChange} />

  //             {/* button */}
  //             <Button size="md" className="max-w-40 bg-white hover:bg-primary hover:text-white" type="submit">Send Message</Button>
  //           </form>
  //         </div>

  //         {/* info */}
  //         <div className='flex-1 flex items-center justify-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
  //           <ul className='flex flex-col gap-10'>
  //             {info.map((item, index) => (
  //               <li key={index} className='flex items-center  gap-6 bg-white/10 rounded-xl p-3 pr-7'>
  //                 <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] text-primary rounded-xl flex items-center justify-center">
  //                   <div className='text-[28px]'>{item.icon}</div>
  //                 </div>
  //                 <div className='flex-1 justify-center items-center'>
  //                   <p>{item.title}</p>
  //                   <h3 className='text-xl '>{item.description}</h3>
  //                 </div>
  //               </li>
  //             ))}
  //           </ul>
  //         </div>
  //       </div>
  //     </div>
  //   </motion.section>
  // );

  // const [formData, setFormData] = useState({
  //   firstname: '',
  //   lastname: '',
  //   email: '',
  //   phone: '',
  //   service: '',
  //   message: '',
  // });

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // const handleServiceChange = (value) => {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     service: value,
  //   }));
  // };

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .send(
  //       'service_igipb6r', // Replace with your Service ID
  //       'template_3tcgcum', // Replace with your Template ID
  //       {
  //         firstname: formData.firstname,
  //         lastname: formData.lastname,
  //         email: formData.email,
  //         phone: formData.phone,
  //         service: formData.service,
  //         message: formData.message,
  //       },
  //       '2kPXi079dRuwidjTh' // Replace with your User ID
  //     )
  //     .then((response) => {
  //       console.log('Email sent successfully:', response);
  //       alert('Email sent successfully!');
  //     })
  //     .catch((error) => {
  //       console.error('Error sending email:', error);
  //       alert('Error sending email.');
  //     });
  // };










//   async function handleSubmit(event) {
//     event.preventDefault();
//     const formData = new FormData(event.target);

//     formData.append("access_key", "4da46f02-baba-4174-ad4b-62201ba4518d");

//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);

//     const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json"
//         },
//         body: json
//     });
//     const result = await response.json();
//     if (result.success) {
//         console.log(result);
//     }
// }

// return (
// <>
//   <form onSubmit={handleSubmit}>
//     <input type="text" name="name"/>
//     <input type="email" name="email"/>
//     <textarea name="message"></textarea>
//     <button type="submit">Submit Form</button>
//   </form>
// </>
// );





const [formData, setFormData] = useState({
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  service: '',
  message: ''
});

// Handle form field changes
const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

// Handle select change for "Select a service"
const handleServiceChange = (value) => {
  setFormData((prevData) => ({
    ...prevData,
    service: value,
  }));
};

// Handle form submission
const handleSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  formData.append("access_key", "4da46f02-baba-4174-ad4b-62201ba4518d");

  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: json
  });

  const result = await response.json();
  if (result.success) {
    console.log(result);
    alert("Email sent successfully!");
  } else {
    alert("Error sending email.");
  }
};

return (
  <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} className='py-6'>
    <div className="container mx-auto">
      <div className='flex flex-col xl:flex-row gap-[30px]'>
        {/* form */}
        <div className='xl:-[54%] order-2 xl:order-none'>
          <form className="flex flex-col gap-6 p-10 bg-blue-600 rounded-xl" onSubmit={handleSubmit}>
            <h3 className='text-white'>Let's Work Together!</h3>
            <p>I’m passionate about creating user-friendly, high-quality websites and web applications. With expertise in modern technologies and design, I’m committed to delivering solutions that match your vision and goals. Let’s work together to bring your ideas to life with clean, efficient code.</p>

            {/* input fields */}
            <div className='text-white grid grid-cols-1 md:grid-cols-2 gap-6'>
              <Input name="firstname" type="text" placeholder="First Name" value={formData.firstname} onChange={handleInputChange} />
              <Input name="lastname" type="text" placeholder="Last Name" value={formData.lastname} onChange={handleInputChange} />
              <Input name="email" type="email" placeholder="Email Address" value={formData.email} onChange={handleInputChange} />
              <Input name="phone" type="phone" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} />
            </div>

            {/* Select dropdown */}
            <Select value={formData.service} onValueChange={handleServiceChange}>
              <SelectTrigger className="w-full rounded-xl">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select a service</SelectLabel>
                  <SelectItem value="Web-Dev">Web Development</SelectItem>
                  <SelectItem value="Ui/UX">UI/UX</SelectItem>
                  <SelectItem value="Logo-Design">Logo Design</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            {/* Text Area */}
            <Textarea name="message" className="h-[200px]" placeholder="Type your message here." value={formData.message} onChange={handleInputChange} />

            {/* Submit button */}
            <Button size="md" className="max-w-40 bg-white hover:bg-primary hover:text-white" type="submit">Send Message</Button>
          </form>
        </div>

        {/* info section */}
        <div className='flex-1 flex items-center justify-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
          <ul className='flex flex-col gap-10'>
            {info.map((item, index) => (
              <li key={index} className='flex items-center gap-6 bg-white/10 rounded-xl p-3 pr-7'>
                <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] text-primary rounded-xl flex items-center justify-center">
                  <div className='text-[28px]'>{item.icon}</div>
                </div>
                <div className='flex-1'>
                  <p>{item.title}</p>
                  <h3 className='text-xl'>{item.description}</h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </motion.section>
);





  // return (
  //   <form onSubmit={sendEmail}>
  //     {/* Form Fields */}
  //     <input
  //       type="text"
  //       name="firstname"
  //       value={formData.firstname}
  //       onChange={handleInputChange}
  //       placeholder="First Name"
  //     />
  //     <input
  //       type="text"
  //       name="lastname"
  //       value={formData.lastname}
  //       onChange={handleInputChange}
  //       placeholder="Last Name"
  //     />
  //     <input
  //       type="email"
  //       name="email"
  //       value={formData.email}
  //       onChange={handleInputChange}
  //       placeholder="Email Address"
  //     />
  //     <input
  //       type="tel"
  //       name="phone"
  //       value={formData.phone}
  //       onChange={handleInputChange}
  //       placeholder="Phone Number"
  //     />
  //     <textarea
  //       name="message"
  //       value={formData.message}
  //       onChange={handleInputChange}
  //       placeholder="Type your message here."
  //     />
  //     <select
  //       name="service"
  //       value={formData.service}
  //       onChange={(e) => handleServiceChange(e.target.value)}
  //     >
  //       <option value="Web-Dev">Web Development</option>
  //       <option value="Ui/UX">UI/UX</option>
  //       <option value="Logo-Design">Logo Design</option>
  //     </select>
  //     <button type="submit">Send Message</button>
  //   </form>
  // );
  }

export default Contact;

    
{/* <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form onSubmit={sendEmail}>
        <Button type="submit">Send Test Email</Button>
      </form>
    </main> */}