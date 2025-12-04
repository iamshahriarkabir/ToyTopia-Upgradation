import React, { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import AOS from "aos";
import "aos/dist/aos.css"; // Don't forget import css
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import {
  ArrowRight,
  Truck,
  ShieldCheck,
  Gift,
  Headphones,
  Heart,
} from "lucide-react";
import ToyCard from "../../components/ToyCard";

const Home = () => {
  useTitle("Home");
  const [toys, setToys] = useState([]);

  useEffect(() => {
    // Fetch data from local JSON
    fetch("/toys.json")
      .then((res) => res.json())
      .then((data) => setToys(data));

    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="overflow-x-hidden bg-white">
      {/* 1. HERO SECTION (Updated Height: 60-70vh) */}
      <section className="relative h-[60vh] md:h-[70vh] w-full">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          effect={"fade"}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Navigation, EffectFade]}
          className="h-full w-full"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div
              className="relative w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://i.ibb.co.com/XfgHXr7n/pexels-anais-berland-2055469053-32786109.jpg')",
              }}
            >
              <div className="absolute inset-0 bg-linear-to-r from-black/70 to-transparent flex items-center">
                <div
                  className="container mx-auto px-6 md:px-12 text-white space-y-6"
                  data-aos="fade-up"
                >
                  <span className="bg-yellow-400 text-black px-4 py-1 rounded-full font-bold uppercase text-sm tracking-wider">
                    New Arrivals
                  </span>
                  <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                    Spark Your Child's <br />{" "}
                    <span className="text-teal-300">Imagination</span>
                  </h1>
                  <p className="text-lg md:text-xl max-w-lg opacity-90">
                    Discover the most creative and safe toys for your little
                    ones. Fun starts here!
                  </p>
                  <Link
                    to="/all-toys"
                    className="btn bg-rose-500 hover:bg-rose-600 border-none text-white text-lg px-8 rounded-full shadow-lg hover:shadow-xl transition-all"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Slide 2 */}
          <SwiperSlide>
            <div
              className="relative w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://i.ibb.co.com/sd7NRp3j/pexels-kemal-kartal-575424602-33358165.jpg')",
              }}
            >
              <div className="absolute inset-0 bg-linear-to-r from-purple-900/70 to-transparent flex items-center">
                <div className="container mx-auto px-6 md:px-12 text-white space-y-6">
                  <span className="bg-teal-400 text-black px-4 py-1 rounded-full font-bold uppercase text-sm tracking-wider">
                    Best Sellers
                  </span>
                  <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                    Educational Toys <br /> for{" "}
                    <span className="text-yellow-300">Smart Kids</span>
                  </h1>
                  <p className="text-lg md:text-xl max-w-lg opacity-90">
                    Learning is fun with our STEM collection. Build, code, and
                    play.
                  </p>
                  <Link
                    to="/all-toys"
                    className="btn bg-yellow-400 hover:bg-yellow-500 border-none text-black text-lg px-8 rounded-full shadow-lg"
                  >
                    Explore Collection
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Slide 3 */}
          <SwiperSlide>
            <div
              className="relative w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1558060370-d644479cb6f7?q=80&w=1920&auto=format&fit=crop')",
              }}
            >
              <div className="absolute inset-0 bg-linear-to-r from-blue-900/70 to-transparent flex items-center">
                <div className="container mx-auto px-6 md:px-12 text-white space-y-6">
                  <span className="bg-rose-500 text-white px-4 py-1 rounded-full font-bold uppercase text-sm tracking-wider">
                    Big Sale
                  </span>
                  <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                    Up to 50% Off <br /> on{" "}
                    <span className="text-teal-300">Selected Items</span>
                  </h1>
                  <p className="text-lg md:text-xl max-w-lg opacity-90">
                    Grab the best deals before they are gone. Limited time
                    offer!
                  </p>
                  <Link
                    to="/all-toys"
                    className="btn bg-teal-400 hover:bg-teal-600 border-none text-white text-lg px-8 rounded-full shadow-lg"
                  >
                    View Offers
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* 2. CATEGORY SECTION */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Browse by Category
          </h2>
          <p className="text-gray-500 mt-2 font-medium">
            Find exactly what you are looking for
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {[
            { name: "Action", icon: "🚀", color: "bg-red-50 text-red-500" },
            { name: "Puzzles", icon: "🧩", color: "bg-blue-50 text-blue-500" },
            {
              name: "Learning",
              icon: "🎓",
              color: "bg-green-50 text-green-500",
            },
            {
              name: "Plushies",
              icon: "🧸",
              color: "bg-orange-50 text-orange-500",
            },
            { name: "Cars", icon: "🏎️", color: "bg-purple-50 text-purple-500" },
            { name: "Dolls", icon: "👸", color: "bg-pink-50 text-pink-500" },
          ].map((cat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center group cursor-pointer"
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              <div
                className={`w-24 h-24 ${cat.color} rounded-full flex items-center justify-center text-4xl shadow-sm group-hover:shadow-md group-hover:-translate-y-2 transition-all duration-300`}
              >
                {cat.icon}
              </div>
              <h3 className="font-bold text-gray-700 mt-4 group-hover:text-teal-700 transition-colors">
                {cat.name}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FLASH DEAL SECTION */}
      <section className="py-20 bg-teal-700 text-white overflow-hidden relative">
        {/* Decorative Background Circles */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-teal-600 opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-teal-500 opacity-30 blur-3xl"></div>

        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <div className="md:w-1/2 space-y-8" data-aos="fade-right">
            <div>
              <span className="bg-orange-500 text-white px-4 py-1 rounded text-sm font-bold tracking-widest uppercase">
                Limited Time Offer
              </span>
              <h2 className="text-4xl md:text-6xl font-extrabold mt-4 leading-tight">
                Mega Robot <br /> Construction Kit
              </h2>
            </div>
            <p className="text-teal-100 text-lg max-w-md">
              Get 30% off on our best-selling STEM robot kit. Includes free
              shipping and a bonus guide.
            </p>

            {/* Countdown Timers */}
            <div className="flex gap-4">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center w-20 border border-white/20">
                <span className="block text-3xl font-bold">08</span>
                <span className="text-xs uppercase opacity-80">Hours</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center w-20 border border-white/20">
                <span className="block text-3xl font-bold">45</span>
                <span className="text-xs uppercase opacity-80">Mins</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center w-20 border border-white/20">
                <span className="block text-3xl font-bold">12</span>
                <span className="text-xs uppercase opacity-80">Secs</span>
              </div>
            </div>

            <Link
              to="/all-toys"
              className="inline-flex items-center gap-2 bg-white text-teal-800 hover:bg-orange-500 font-bold py-3 px-8 rounded-full transition-all shadow-lg"
            >
              Shop The Deal <ArrowRight size={20} />
            </Link>
          </div>

          <div className="md:w-1/2 flex justify-center" data-aos="fade-left">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl transform scale-90"></div>
              <img
                src="https://i.ibb.co.com/GvV5HydF/Transforming-Battle.jpg"
                alt="Robot Toy"
                className="relative z-10 w-full max-w-md rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500 border-4 border-white/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. POPULAR TOYS  */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
                Popular Toys
              </h2>
              <p className="text-gray-500 mt-2 font-medium">
                Top picks loved by parents & kids
              </p>
            </div>
            <Link
              to="/all-toys"
              className="btn btn-outline border-gray-300 text-gray-600 hover:bg-teal-600 hover:text-white hover:border-teal-600 rounded-full px-6"
            >
              View All Collection
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {toys.slice(0, 8).map((toy) => (
              <ToyCard key={toy.toyId} toy={toy} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. HAPPY MOMENTS  */}
      <section className="py-24 bg-white relative">
        {/* Background Decoration */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-teal-50 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl -z-10"></div>

        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div
            className="text-center mb-16 max-w-2xl mx-auto"
            data-aos="fade-up"
          >
            <span className="text-orange-500 font-bold tracking-wider uppercase text-xs mb-2 block">
              Our Community
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4">
              Captured Moments
            </h2>
            <p className="text-gray-500 text-lg">
              Real smiles, real fun. See how{" "}
              <span className="text-teal-600 font-bold">#ToyTopia</span> brings
              joy to families around the world.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[600px]">
            {/* 1. Tall Image (Left) */}
            <div
              className="md:col-span-1 md:row-span-2 relative group rounded-3xl overflow-hidden shadow-lg cursor-pointer"
              data-aos="fade-right"
            >
              <img
                src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=600&auto=format&fit=crop"
                alt="Playing with cars"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-teal-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-xl">Little Racers</h3>
                <p className="text-teal-200 text-sm">Outdoor Fun</p>
              </div>
            </div>

            {/* 2. Wide Image (Top Center) */}
            <div
              className="md:col-span-2 relative group rounded-3xl overflow-hidden shadow-lg cursor-pointer"
              data-aos="fade-down"
            >
              <img
                src="https://i.ibb.co.com/9mCLpj1d/pexels-rdne-10565600.jpg"
                alt="Family Time"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
              <div className="absolute bottom-4 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="bg-white/90 text-teal-800 px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                  Family Bonding
                </span>
              </div>
            </div>

            {/* 3. Standard Image (Top Right) */}
            <div
              className="relative group rounded-3xl overflow-hidden shadow-lg cursor-pointer"
              data-aos="fade-left"
            >
              <img
                src="https://i.ibb.co.com/bj3Qj2t5/pexels-mikhail-nilov-8654527.jpg"
                alt="Building Blocks"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-teal-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Heart
                  className="text-white fill-white animate-bounce"
                  size={32}
                />
              </div>
            </div>

            {/* 4. Standard Image (Bottom Center-Right) */}
            <div
              className="relative group rounded-3xl overflow-hidden shadow-lg cursor-pointer"
              data-aos="fade-up"
            >
              <img
                src="https://i.ibb.co.com/yBcxcmrb/pexels-karola-g-7269545.jpg"
                alt="Learning"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-orange-600/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white font-bold">Creative Minds</h3>
              </div>
            </div>

            {/* 5. Wide Image (Bottom Center-Left) */}
            <div
              className="md:col-span-2 relative group rounded-3xl overflow-hidden shadow-lg cursor-pointer"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                src="https://i.ibb.co.com/391pCg3H/pexels-kindelmedia-7105597.jpg"
                alt="Teddy Love"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-Linear-to-r from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center p-8">
                <div>
                  <h3 className="text-white font-bold text-2xl">
                    Pure Happiness
                  </h3>
                  <p className="text-gray-200 mt-1">Best friends forever</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US */}
      <section className="py-20 bg-teal-50 border-y border-teal-100/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Truck,
                title: "Fast Delivery",
                text: "Shipping in 2-3 days",
              },
              {
                icon: ShieldCheck,
                title: "Safety Certified",
                text: "100% Non-toxic materials",
              },
              {
                icon: Gift,
                title: "Gift Wrapping",
                text: "Available for all items",
              },
              {
                icon: Headphones,
                title: "24/7 Support",
                text: "Friendly customer care",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 duration-300 text-center group border border-gray-100"
              >
                <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-600 group-hover:text-orange-500 transition-colors duration-300">
                  <item.icon size={30} />
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. NEWSLETTER SECTION */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div
            className="bg-teal-900 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden"
            data-aos="zoom-in"
          >
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold">
                Join Our Fun Club!
              </h2>
              <p className="text-gray-300 text-lg">
                Subscribe to our newsletter and get{" "}
                <span className="text-yellow-400 font-bold">15% OFF</span> your
                first purchase plus exclusive deals.
              </p>
              <form className="flex flex-col md:flex-row gap-4 mt-6">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="input input-lg rounded-full w-full text-gray-900 focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="btn btn-lg shadow bg-orange-500 hover:bg-teal-600 border-none text-white rounded-full px-10"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
