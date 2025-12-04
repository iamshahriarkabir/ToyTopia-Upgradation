import React, { useEffect } from "react";
import useTitle from "../../hooks/useTitle";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router";
import { Heart, ShieldCheck, Rocket, Smile, Users, Award } from "lucide-react";

const About = () => {
  useTitle("About Us");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-white overflow-hidden">
      {/* 1. HERO SECTION */}
      <div className="relative py-20 bg-teal-50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6" data-aos="fade-right">
            <span className="text-orange-500 font-bold tracking-widest uppercase text-sm">
              Welcome to ToyTopia
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-teal-800 leading-tight">
              We Don't Just Sell Toys, <br /> We Deliver{" "}
              <span className="text-orange-500">Happiness</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              At ToyTopia, we believe play is the best form of learning. Since
              2025, we've been curating the safest, most creative, and fun toys
              for children of all ages.
            </p>
            <div className="flex gap-4">
              <Link
                to="/contact"
                className="btn bg-teal-700 hover:bg-orange-500 text-white rounded-full px-8 border-none"
              >
                Contact Us
              </Link>
              <Link
                to="/all-toys"
                className="btn text-white bg-orange-500 hover:bg-teal-700 hover:text-white rounded-full px-8"
              >
                View Products
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative" data-aos="fade-left">
            <div className="absolute top-0 right-0 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            <img
              src="https://i.ibb.co.com/391pCg3H/pexels-kindelmedia-7105597.jpg"
              alt="Happy Kids"
              className="relative rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500 border-4 border-white"
            />
          </div>
        </div>
      </div>

      {/* 2. STATS SECTION */}
      <div className="bg-teal-700 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div data-aos="fade-up" data-aos-delay="0">
              <h3 className="text-4xl font-bold mb-2">5k+</h3>
              <p className="text-orange-500 text-sm font-semibold uppercase">
                Happy Kids
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-4xl font-bold mb-2">1200+</h3>
              <p className="text-orange-500 text-sm font-semibold uppercase">
                Toys Available
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-4xl font-bold mb-2">50+</h3>
              <p className="text-orange-500 text-sm font-semibold uppercase">
                Awards Won
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-4xl font-bold mb-2">24/7</h3>
              <p className="text-orange-500 text-sm font-semibold uppercase">
                Support Team
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. OUR VALUES (Redesigned) */}
      <div className="py-24 container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Parents Choose Us
          </h2>
          <p className="text-gray-500">
            We adhere to the highest standards of safety and quality control.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Mission */}
          <div
            className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 duration-300 group"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
              <Rocket size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Our Mission
            </h3>
            <p className="text-gray-500 leading-relaxed">
              To inspire creativity and bring joy to every child's heart through
              safe, educational, and sustainable toys that last a lifetime.
            </p>
          </div>

          {/* Vision */}
          <div
            className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 duration-300 group"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
              <Smile size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Our Vision</h3>
            <p className="text-gray-500 leading-relaxed">
              To be the world's most trusted partner in parenting and child
              development, creating a community of happy families.
            </p>
          </div>

          {/* Values */}
          <div
            className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 duration-300 group"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-500 mb-6 group-hover:bg-red-500 group-hover:text-white transition-colors">
              <Heart size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Our Values</h3>
            <p className="text-gray-500 leading-relaxed">
              Safety comes first. We are obsessed with quality, innovation, and
              ensuring every product brings a genuine smile.
            </p>
          </div>
        </div>
      </div>

      {/* 4. OUR STORY (Split Layout) */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 relative" data-aos="fade-right">
            <div className="absolute inset-0 bg-teal-600 rounded-2xl rotate-3"></div>
            <img
              src="https://images.unsplash.com/photo-1556012018-50c5c0da73bf?q=80&w=800&auto=format&fit=crop"
              alt="Our Store"
              className="relative rounded-2xl shadow-xl w-full"
            />
          </div>
          <div className="md:w-1/2 space-y-6" data-aos="fade-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Our Journey
            </h2>
            <h4 className="text-xl text-teal-600 font-semibold">
              From a Garage to a Global Brand
            </h4>
            <p className="text-gray-600 leading-relaxed">
              ToyTopia started as a small passion project in 2020. Our founder
              realized that finding high-quality, non-toxic educational toys was
              harder than it should be.
            </p>
            <p className="text-gray-600 leading-relaxed">
              What began with a few wooden blocks has now grown into a massive
              collection of over 1,000 unique items. But our core promise
              remains the same: <strong>Kids First.</strong>
            </p>
            <ul className="space-y-3 mt-4">
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                <ShieldCheck className="text-teal-500" /> 100% Safe Materials
              </li>
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                <Users className="text-teal-500" /> Community Driven
              </li>
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                <Award className="text-teal-500" /> Award Winning Designs
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 5. TEAM SECTION */}
      <div className="py-24 container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          Meet the Playmakers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Member 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
            <img
              src="https://i.ibb.co.com/Xrv26j9d/Z4.jpg"
              alt="CEO"
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-teal-100"
            />
            <h4 className="font-bold text-lg text-gray-800">Shahriar</h4>
            <p className="text-teal-600 text-sm">Founder & CEO</p>
          </div>
          {/* Member 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
            <img
              src="https://i.ibb.co.com/chf1GnbJ/Generated-Image-November-19-2025-2-27-PM.png"
              alt="Manager"
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-orange-100"
            />
            <h4 className="font-bold text-lg text-gray-800">Kabir</h4>
            <p className="text-teal-600 text-sm">Product Manager</p>
          </div>
          {/* Member 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
            <img
              src="https://i.ibb.co.com/pjvsgwXs/Generated-Image-November-19-2025-2-20-PM.png"
              alt="Designer"
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-blue-100"
            />
            <h4 className="font-bold text-lg text-gray-800">Zafor</h4>
            <p className="text-teal-600 text-sm">Lead Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
