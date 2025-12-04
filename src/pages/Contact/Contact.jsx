import React, { useEffect } from "react";
import useTitle from "../../hooks/useTitle";
import AOS from "aos";
import "aos/dist/aos.css";
import { Mail, MapPin, Phone, Clock, MessageSquare, Send } from "lucide-react";

const Contact = () => {
  useTitle("Contact Us");

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Just UI logic for now
    alert("Thanks for contacting us! We'll get back to you soon.");
    e.target.reset();
  };

  return (
    <div className="bg-white min-h-screen">
      {/* 1. HEADER SECTION */}
      <div className="bg-teal-50 py-20 text-center relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>

        <div
          className="container mx-auto px-4 relative z-10"
          data-aos="fade-up"
        >
          <span className="text-orange-500 font-bold tracking-widest uppercase text-xs mb-2 block">
            We are here to help
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-teal-800 mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have a question about a toy, your order, or just want to say hello?
            We'd love to hear from you!
          </p>
        </div>
      </div>

      {/* 2. MAIN CONTENT GRID */}
      <div className="container mx-auto px-4 py-16 -mt-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* LEFT COLUMN: CONTACT INFO CARDS */}
          <div className="lg:col-span-1 space-y-6">
            {/* Address Card */}
            <div
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-1 transition-all duration-300"
              data-aos="fade-right"
              data-aos-delay="0"
            >
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-1">
                Our Store
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                123 Toy Street, Playful City
                <br />
                Dhaka, Bangladesh 1200
              </p>
            </div>

            {/* Phone & Email Card */}
            <div
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-1 transition-all duration-300"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mb-4">
                <Phone size={24} />
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-4">
                Contact Info
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="font-semibold text-gray-700">
                      +880 1234 567 890
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="font-semibold text-gray-700">
                      support@toytopia.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: FORM */}
          <div className="lg:col-span-2" data-aos="fade-left">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 h-full">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Send us a Message
                </h3>
                <p className="text-gray-500">
                  Fill out the form below and our team will get back to you
                  within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="form-control space-y-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all"
                      required
                    />
                  </div>
                  <div className="form-control space-y-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="form-control space-y-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+880..."
                      className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all"
                    />
                  </div>
                  <div className="form-control space-y-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Subject
                    </label>
                    <select className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all text-gray-600">
                      <option>General Inquiry</option>
                      <option>Order Support</option>
                      <option>Returns & Refunds</option>
                      <option>Partnership</option>
                    </select>
                  </div>
                </div>

                <div className="form-control space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Message
                  </label>
                  <textarea
                    placeholder="How can we help you?"
                    className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all h-40 resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn bg-teal-600 hover:bg-orange-500 text-white font-bold py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all border-none flex items-center justify-center gap-2 group"
                >
                  Send Message{" "}
                  <Send
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* 3. FAQ SECTION */}
      <div className="bg-gray-50 py-20 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 mt-2">
              Find answers to common questions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex gap-4">
                <MessageSquare className="text-teal-500 shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">
                    Do you ship internationally?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Yes! We ship to over 50 countries worldwide. Shipping costs
                    calculated at checkout.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex gap-4">
                <MessageSquare className="text-teal-500 shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">
                    What is your return policy?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    We offer a 30-day return policy for all unused items in
                    original packaging.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex gap-4">
                <MessageSquare className="text-teal-500 shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">
                    Are your toys safe?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Absolutely. All our toys are certified non-toxic and meet
                    international safety standards.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex gap-4">
                <MessageSquare className="text-teal-500 shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">
                    How can I track my order?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Once shipped, you will receive an email with a tracking link
                    to monitor your package.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
