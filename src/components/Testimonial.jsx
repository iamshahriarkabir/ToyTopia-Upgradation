import React, { useRef } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';


const testimonialData = [
  {
    id: 1,
    name: "Sarah K.",
    relation: "Parent",
    rating: 5,
    testimonial: "My 4-year-old is obsessed with the 'MegaBuild' blocks. He spends hours creating towers... they're durable and so great for his imagination.",
    imageUrl: "https://placehold.co/100x100/EBF4FF/4A90E2?text=SK&font=inter"
  },
  {
    id: 2,
    name: "Mark T.",
    relation: "Uncle",
    rating: 5,
    testimonial: "I bought the 'Cuddle-Bot' for my niece. It's incredibly soft, and she adores the light-up features. It's her new favorite bedtime buddy.",
    imageUrl: "https://placehold.co/100x100/FFF3E0/F57C00?text=MT&font=inter"
  },
  {
    id: 3,
    name: "Emily R.",
    relation: "Parent",
    rating: 4,
    testimonial: "The 'Volcano Science Kit' was a huge hit! My kids (7 and 9) had a blast making it 'erupt.' It was messy, but so educational and worth it.",
    imageUrl: "https://placehold.co/100x100/E8F5E9/388E3C?text=ER&font=inter"
  },
  {
    id: 4,
    name: "David L.",
    relation: "Grandparent",
    rating: 5,
    testimonial: "We got the 'Galaxy Stomp Rocket' for the backyard. Such a simple concept, but it provides endless fun. Even the adults join in!",
    imageUrl: "https://placehold.co/100x100/F3E5F5/7B1FA2?text=DL&font=inter"
  },
  {
    id: 5,
    name: "Jessica P.",
    relation: "Parent",
    rating: 5,
    testimonial: "The 'Ultimate Art Easel' has everything. My daughter feels like a real artist. The quality of the paints and crayons is surprisingly good for a kit.",
    imageUrl: "https://placehold.co/100x100/FFFDE7/FBC02D?text=JP&font=inter"
  },
  {
    id: 6,
    name: "Mr. Chen",
    relation: "2nd Grade Teacher",
    rating: 5,
    testimonial: "The 'Code & Go Robot Mouse' is a fantastic intro to STEM. My students are learning basic coding logic without even realizing it. Highly recommend.",
    imageUrl: "https://placehold.co/100x100/E0F7FA/0097A7?text=MC&font=inter"
  }
];


const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {

      stars.push(<Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />);
    } else {

      stars.push(<Star key={i} className="w-5 h-5 text-gray-300" />);
    }
  }
  return <div className="flex gap-1">{stars}</div>;
};

const TestimonialCard = ({ name, relation, rating, testimonial, imageUrl }) => {
  return (

    <div className="shrink-0 w-full sm:w-[350px] lg:w-[380px] bg-white rounded-xl shadow-lg p-6 md:p-8 mx-3 snap-start">
      <div className="flex items-center mb-4">
        <img
          src={imageUrl}
          alt={name}
          className="w-14 h-14 rounded-full mr-4 border-2 border-blue-200 object-cover"
          onError={(e) => { e.target.src = 'https://placehold.co/100x100/cccccc/ffffff?text=User&font=inter'; }}
        />
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{relation}</p>
        </div>
        <div className="ml-auto">
          <StarRating rating={rating} />
        </div>
      </div>
      <div className="relative mt-6">
        <Quote className="absolute -top-3 -left-3 w-12 h-12 text-blue-100 -z-0" />
        <p className="relative z-10 text-lg text-gray-700 italic">
          "{testimonial}"
        </p>
      </div>
    </div>
  );
};


export default function App() {
  const scrollContainerRef = useRef(null);

  /**
   * @param {'left' | 'right'} direction 
   */
  const scroll = (direction) => {
    if (scrollContainerRef.current) {

      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8; 
      
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (

    <div className="bg-blue-50 font-inter antialiased w-full flex items-center">
      <div className="container mx-auto px-4 py-16 sm:py-24">

        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-blue-600 font-semibold uppercase tracking-wide">
            What Parents Are Saying
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Our Toys, Their Joy
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Real stories from happy families who love our playtime creations.
          </p>
        </div>


        <div className="relative">

          <div
            ref={scrollContainerRef}

            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth py-8  px-3 scrollbar-hide"
            style={{ scrollbarWidth: 'none' }} 
          >
            {testimonialData.map((item) => (
              <TestimonialCard key={item.id} {...item} />
            ))}
          </div>


          <button
            onClick={() => scroll('left')}
            className="absolute top-1/2 left-0 sm:left-4 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 text-gray-800 transition-all duration-200 z-20"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute top-1/2 right-0 sm:right-4 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 text-gray-800 transition-all duration-200 z-20"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
