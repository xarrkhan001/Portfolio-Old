import React from "react";

const Contact = () => {
  return (
    <div className="max-w-[1200px] mx-auto bg-black py-20 px-5" id="contact">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold leading-tight text-white">
          Contact Me
        </h2>
      </div>

      <div className="bg-[#1a1a1a] rounded-xl shadow-lg">
        <div className="p-10">
          <form action="" method="POST" className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="bg-[#2c2c2c] w-full px-4 py-3 text-gray-300 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-gray-400"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="bg-[#2c2c2c] w-full px-4 py-3 text-gray-300 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-gray-400"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="bg-[#2c2c2c] w-full px-4 py-3 text-gray-300 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-gray-400"
                  rows="6"
                  required
                ></textarea>
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="text-xl w-full p-4 font-semibold text-white bg-primary-color rounded-md hover:bg-primary-color-dark transition duration-300"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
