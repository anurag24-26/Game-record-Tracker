import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 py-12 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold sm:text-5xl underline lg:text-6xl mb-8 text-cyan-500">
          Contact Us
        </h1>
        <p className="text-xl mb-8">
          We'd love to hear from you! Whether you have a question about features, trials, pricing, or anything else, our team is ready to answer all your questions.
        </p>

        <div className="grid gap-8 lg:grid-cols-2 lg:max-w-7xl lg:mx-auto">
          {/* Contact Information */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold underline text-gray-800 mb-4">Our Office</h2>
            <p className="text-gray-900 mb-4">
            GLA UNIVERSITY<br />Chaumuhan, Mathura<br />281406, Uttar Pradesh <br />
            Phone:123456890
            </p>
            <p className="text-gray-900 mb-4">
              Feel free to reach out to us during our business hours:<br />
              Monday - Friday: 9:00 AM - 6:00 PM<br />
              Saturday: 10:00 AM - 4:00 PM
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                <input
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                <input
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                <textarea
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  id="message"
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-400 text-black py-2 rounded-md hover:bg-pink-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
