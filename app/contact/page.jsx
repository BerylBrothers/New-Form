"use client";

import React, { useState } from 'react'

import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
// import { useForm, ValidationError } from '@formspree/react';

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
    description: "1547 database dr, Boston, MA"
  },
]

const Contact = () => {
  
  // Create state for the form data
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    service: '',  // This will store the selected service
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
  const sendEmail = async (e) => {
    e.preventDefault();

    // Make a POST request to the API route
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
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
            <form className="flex flex-col gap-6 p-10 bg-blue-600 rounded-xl" onSubmit={sendEmail}>
              <h3 className='text-white'>Let's Work Together!</h3>
              <p>I’m passionate about creating user-friendly, high-quality websites and web applications. With expertise in modern technologies and design, I’m committed to delivering solutions that match your vision and goals. Let’s work together to bring your ideas to life with clean, efficient code.</p>

              {/* input */}
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

              {/* button */}
              <Button size="md" className="max-w-40 bg-white hover:bg-primary hover:text-white" type="submit">Send Message</Button>
            </form>
          </div>

          {/* info */}
          <div className='flex-1 flex items-center justify-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
            <ul className='flex flex-col gap-10'>
              {info.map((item, index) => (
                <li key={index} className='flex items-center  gap-6 bg-white/10 rounded-xl p-3 pr-7'>
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] text-primary rounded-xl flex items-center justify-center">
                    <div className='text-[28px]'>{item.icon}</div>
                  </div>
                  <div className='flex-1 justify-center items-center'>
                    <p>{item.title}</p>
                    <h3 className='text-xl '>{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );

  // const [state, handleSubmit] = useForm("xjkglwqr");


  // // Manage form data with React state
  // const [formData, setFormData] = useState({
  //   firstname: "",
  //   lastname: "",
  //   email: "",
  //   phone: "",
  //   service: "",
  //   message: ""
  // });

  // // Handle form field changes
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // return (
  //   <motion.section
  //     initial={{ opacity: 0 }}
  //     animate={{
  //       opacity: 1,
  //       transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
  //     }}
  //     className="py-6"
  //   >
  //     <div className="container mx-auto">
  //       <div className="flex flex-col xl:flex-row gap-[30px]">
  //         {/* Form Section */}
  //         <div className="xl:-[54%] order-2 xl:order-none">
  //           <form
  //             className="flex flex-col gap-6 p-10 bg-blue-600 rounded-xl"
  //             onSubmit={handleSubmit}
  //           >
  //             <h3 className="text-white">Let's Work Together!</h3>
  //             <p className="text-white">
  //               I am passionate about creating user-friendly, high-quality websites and web applications.
  //               With expertise in modern technologies and design, I’m committed to delivering solutions that
  //               match your vision and goals. Let’s work together to bring your ideas to life with clean, efficient code.
  //             </p>

  //             {/* Input Fields */}
  //             <div className="text-white grid grid-cols-1 md:grid-cols-2 gap-6">
  //               <input
  //                 className="text-black p-3 rounded-xl"
  //                 type="text"
  //                 name="firstname"
  //                 placeholder="First Name"
  //                 value={formData.firstname}
  //                 onChange={handleInputChange}
  //               />
  //               <input
  //                 className="text-black p-3 rounded-xl"
  //                 type="text"
  //                 name="lastname"
  //                 placeholder="Last Name"
  //                 value={formData.lastname}
  //                 onChange={handleInputChange}
  //               />
  //               <input
  //                 className="text-black p-3 rounded-xl"
  //                 type="email"
  //                 name="email"
  //                 placeholder="Email Address"
  //                 value={formData.email}
  //                 onChange={handleInputChange}
  //               />
  //               <input
  //                 className="text-black p-3 rounded-xl"
  //                 type="phone"
  //                 name="phone"
  //                 placeholder="Phone Number"
  //                 value={formData.phone}
  //                 onChange={handleInputChange}
  //               />
  //             </div>

  //             {/* Service Dropdown */}
  //             <select
  //               name="service"
  //               className="text-black p-3 rounded-xl"
  //               value={formData.service}
  //               onChange={handleInputChange}
  //             >
  //               <option value="" disabled>Select a service</option>
  //               <option value="Web-Dev">Web Development</option>
  //               <option value="UI/UX">UI/UX</option>
  //               <option value="Logo-Design">Logo Design</option>
  //             </select>

  //             {/* Message Textarea */}
  //             <textarea
  //               className="text-black p-3 rounded-xl"
  //               name="message"
  //               placeholder="Type your message here."
  //               rows="6"
  //               value={formData.message}
  //               onChange={handleInputChange}
  //             />

  //             {/* Validation Errors */}
  //             <ValidationError
  //               prefix="Email"
  //               field="email"
  //               errors={state.errors}
  //             />
  //             <ValidationError
  //               prefix="Message"
  //               field="message"
  //               errors={state.errors}
  //             />

  //             {/* Submit Button */}
  //             <button
  //               type="submit"
  //               className="max-w-40 bg-primary hover:bg-primary hover:text-white p-3 rounded-xl"
  //               disabled={state.submitting}
  //             >
  //               {state.submitting ? "Submitting..." : "Send Message"}
  //             </button>
  //           </form>
  //         </div>

  //         {/* Info Section */}
  //         <div className="flex-1 flex items-center justify-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
  //           <ul className="flex flex-col gap-10">
  //             {info.map((item, index) => (
  //               <li key={index} className="flex items-center gap-6 bg-white/10 rounded-xl p-3 pr-7 ">
  //                 <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] text-blue-600 rounded-xl flex items-center justify-center">
  //                   <div className="text-[28px]">{item.icon}</div>
  //                 </div>
  //                 <div className="flex-1 justify-center items-center">
  //                   <p className="text-white">{item.title}</p>
  //                   <h3 className="text-xl text-white">{item.description}</h3>
  //                 </div>
  //               </li>
  //             ))}
  //           </ul>
  //         </div>
  //       </div>
  //     </div>
  //   </motion.section>
  // );

};

export default Contact;

    
{/* <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form onSubmit={sendEmail}>
        <Button type="submit">Send Test Email</Button>
      </form>
    </main> */}