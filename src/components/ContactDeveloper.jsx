import React, { useState } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";

const ContactDeveloper = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = "service_9exg0oo";
    const templateId = "template_lzxzg1o";
    const publicKey = "h9MpSZMNFzEPfjZUM";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: "Er. Arun",
      message: formData.message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      alert("Message sent successfully");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      alert("Failed to send message");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center p-4 md:p-8">
      <p className="text-3xl font-bold text-emerald-500 my-4 md:mb-8 shadow-md shadow-emerald-400 rounded-md">
        Contact Developer
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center w-full">
        <div className="flex flex-col justify-center items-start mb-4 md:mb-0 md:mr-8 p-4 bg-white shadow-lg rounded-lg">
          <p className="text-lg font-semibold text-orange-600 mb-2">
            Name: Er. Arun
          </p>
          <p className="text-xl font-semibold text-orange-600 mb-2">
            Send a message directly to this email for your personalized
            portfolio or website.
          </p>
          <p className="text-xl font-semibold text-orange-600 mb-2">
            Email:
            <a
              href="mailto:arunacharya1603@gmail.com"
              className="text-orange-900 underline"
            >
              arunacharya1603@gmail.com
            </a>
          </p>
          <p className="text-xl font-semibold text-orange-600">
            Address: Karaundi, Deoria, Uttar Pradesh, India
          </p>
        </div>
        <form className="flex flex-col w-full max-w-sm" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="my-2 p-3 rounded-md shadow-md border border-gray-300 focus:outline-none focus:border-emerald-500"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="my-2 p-3 rounded-md shadow-md border border-gray-300 focus:outline-none focus:border-emerald-500"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="my-2 p-3 rounded-md shadow-md border border-gray-300 focus:outline-none focus:border-emerald-500"
            rows={4}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-emerald-500 text-white font-semibold py-3 px-6 rounded-md shadow-md hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactDeveloper;
