import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useLocation } from 'wouter';

const ContactUs: React.FC = () => {
  const [location] = useLocation();
  const pageTitle = location.replace('/', '').toUpperCase() || 'HOME';

  return (
    

    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="relative w-full h-64 bg-cover bg-center" style={{ backgroundImage: "url('/assets/img/pencil.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold">Contact Us</h1>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
          <p className="text-gray-600">Have any questions? We are happy to help!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <i className="bi bi-geo-alt text-green-600 text-3xl"></i>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Address</h3>
                <p className="text-gray-600">Block 41, Calfonia, US</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <i className="bi bi-telephone text-green-600 text-3xl"></i>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Call Us</h3>
                <p className="text-gray-600">+255 742 177 051</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <i className="bi bi-envelope text-green-600 text-3xl"></i>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Email Us</h3>
                <p className="text-gray-600">info@hoppinracoon.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Send a Message</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-md" required />
              <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-md" required />
              <textarea placeholder="Your Message" rows={4} className="w-full p-3 border rounded-md" required></textarea>
              <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="w-full">
        <iframe
          className="w-full h-80"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3961.901759697395!2d39.265393874995375!3d-6.781809393215205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNDYnNTQuNSJTIDM5wrAxNicwNC43IkU!5e0!3m2!1sen!2stz!4v1737105961537!5m2!1sen!2stz"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </section>
    </div>






  );
};

export default ContactUs;
