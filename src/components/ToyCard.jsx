import React, { useEffect } from "react";
import { Link } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import { Star, ShoppingCart } from "lucide-react";

const ToyCard = ({ toy }) => {
  const {
    toyId,
    pictureURL,
    toyName,
    description,
    price,
    rating,
    availableQuantity,
  } = toy;

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    // Added 'h-full' and 'flex flex-col' to ensure equal height
    <div
      className="card h-full bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden border hover:-translate-y-1 border-gray-100 group flex flex-col"
      data-aos="fade-up"
    >
      <figure className="relative h-60  bg-gray-50 group-hover:bg-gray-100 transition-colors">
        <img
          src={pictureURL}
          alt={toyName}
          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Badge if low stock */}
        {availableQuantity < 50 && (
          <div className="absolute top-4 right-4 badge badge-warning gap-1 font-bold">
            Low Stock
          </div>
        )}
      </figure>

      <div className="card-body p-6 flex flex-col grow">
        <div className="flex justify-between items-start">
          <h2 className="card-title text-lg font-bold text-gray-800 leading-tight line-clamp-2">
            {toyName}
          </h2>
        </div>

        <div className="flex items-center gap-1 mt-2 mb-4">
          <Star size={16} className="text-yellow-400 fill-yellow-400" />
          <span className="font-semibold text-gray-600">{rating}</span>
          <span className="text-xs text-gray-400">
            • {availableQuantity} In Stock
          </span>
        </div>

        {/* Spacer to push button to bottom */}
        <div className="grow line-clamp-2">{description}</div>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400">Price</span>
            <span className="text-xl font-extrabold text-teal-600">
              ${price}
            </span>
          </div>
          <Link
            to={`/toy/${toyId}`}
            className="btn btn-sm md:btn-md bg-gray-900 text-white hover:bg-rose-500 border-none rounded-full px-6 flex items-center gap-2 transition-all"
          >
            View Details <ShoppingCart size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
