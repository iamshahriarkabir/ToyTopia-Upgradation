import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams, Link } from "react-router";
import { AuthContext } from "../../contexts/AuthProvider";
import useTitle from "../../hooks/useTitle";
import { toast } from "react-toastify";

const ToyDetails = () => {
  const { id } = useParams();
  const allToys = useLoaderData(); // Assuming loader returns all toys
  const { user } = useContext(AuthContext);
  const [toy, setToy] = useState(null);

  // Safety check for title
  useTitle(toy ? toy.toyName : "Toy Details");

  useEffect(() => {
    if (allToys && allToys.length > 0) {
      const foundToy = allToys.find((t) => t.toyId.toString() === id);
      setToy(foundToy);
    }
  }, [id, allToys]);

  if (!toy) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-bars loading-lg text-teal-600"></span>
      </div>
    );
  }

  const {
    pictureURL,
    toyName,
    sellerName,
    sellerEmail,
    price,
    rating,
    availableQuantity,
    description,
    subCategory,
  } = toy;

  const handleTryNow = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;

    // Show success message
    toast.success(
      `Thank you, ${name}! Your request to try "${toyName}" has been submitted.`
    );

    // Optional: clear form logic if needed
    // form.reset();
  };

  return (
    <div className="container mx-auto my-12 px-4">
      {/* Breadcrumb / Back Link */}
      <div className="mb-6">
        <Link
          to="/all-toys"
          className="btn btn-sm btn-ghost hover:bg-teal-50 text-teal-700"
        >
          &larr; Back to All Toys
        </Link>
      </div>

      <div className="card lg:card-side bg-base-100 shadow-xl overflow-hidden border border-gray-100">
        {/* Image Section */}
        <figure className="lg:w-1/2 bg-gray-50 p-8 flex items-center justify-center">
          <img
            src={pictureURL}
            alt={toyName}
            className="object-contain h-96 w-full hover:scale-105 transition-transform duration-500"
          />
        </figure>

        {/* Info Section */}
        <div className="card-body lg:w-1/2 p-8 lg:p-12">
          <div className="badge badge-accent badge-outline mb-2">
            {subCategory}
          </div>
          <h2 className="card-title text-3xl lg:text-4xl font-extrabold text-gray-800">
            {toyName}
          </h2>

          <div className="flex items-center gap-4 mt-2 mb-4">
            <div className="rating rating-sm">
              {[...Array(5)].map((_, i) => (
                <input
                  key={i}
                  type="radio"
                  name="rating-2"
                  className={`mask mask-star-2 ${
                    i < Math.round(rating) ? "bg-orange-400" : "bg-gray-200"
                  }`}
                  readOnly
                  checked={i < Math.round(rating)}
                />
              ))}
            </div>
            <span className="text-gray-500 font-semibold">
              ({rating} Reviews)
            </span>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            {description}
          </p>

          <div className="grid grid-cols-2 gap-4 text-sm bg-teal-50 p-4 rounded-lg border border-teal-100 mb-6">
            <div>
              <p className="text-gray-500">Seller</p>
              <p className="font-bold text-teal-900">{sellerName}</p>
            </div>
            <div>
              <p className="text-gray-500">Email</p>
              <p className="font-bold text-teal-900">{sellerEmail}</p>
            </div>
            <div>
              <p className="text-gray-500">Stock</p>
              <p
                className={`font-bold ${
                  availableQuantity > 0 ? "text-green-600" : "text-red-500"
                }`}
              >
                {availableQuantity > 0
                  ? `${availableQuantity} Available`
                  : "Out of Stock"}
              </p>
            </div>
            <div>
              <p className="text-gray-500">Price</p>
              <p className="font-bold text-2xl text-teal-700">${price}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Try Now Form Section */}
      <div className="mt-16 bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="bg-teal-600 p-6 text-center">
          <h3 className="text-2xl font-bold text-white">
            Interested in this Toy?
          </h3>
          <p className="text-teal-100">
            Fill out the form below to request a trial!
          </p>
        </div>

        <div className="p-8 lg:p-12">
          <form onSubmit={handleTryNow} className="max-w-2xl mx-auto space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold">Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  // If user is logged in, use their name, else empty
                  defaultValue={user?.displayName || ""}
                  placeholder="Enter your name"
                  className="input input-bordered w-full focus:outline-none focus:border-teal-500"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold">Your Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  // If user is logged in, use their email, else empty
                  defaultValue={user?.email || ""}
                  placeholder="Enter your email"
                  className="input input-bordered w-full focus:outline-none focus:border-teal-500"
                  required
                />
              </div>
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">
                  Phone Number (Optional)
                </span>
              </label>
              <input
                type="tel"
                placeholder="+880 1XX XXX XXXX"
                className="input input-bordered w-full focus:outline-none focus:border-teal-500"
              />
            </div>

            <div className="text-center pt-4">
              <button
                type="submit"
                className="btn btn-wide bg-yellow-400 hover:bg-yellow-500 text-teal-900 font-bold border-none text-lg"
              >
                Try Now Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
