import React, { useState, useEffect, useMemo } from "react";
import { useLoaderData } from "react-router";
import ToyCard from "../../components/ToyCard";
import useTitle from "../../hooks/useTitle";
import { Search, Filter, X } from "lucide-react";

const AllToys = () => {
  useTitle("All Toys");
  const loadedToys = useLoaderData();

  // State for Filters
  const [toys, setToys] = useState(loadedToys);
  const [searchText, setSearchText] = useState("");
  const [sortOrder, setSortOrder] = useState("default");

  // Filter States
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState(150); // Default Max Price
  const [inStockOnly, setInStockOnly] = useState(false);
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  // Dynamic Data Extraction (Gets unique categories & max price from data)
  const categories = useMemo(
    () => ["All", ...new Set(loadedToys.map((item) => item.subCategory))],
    [loadedToys]
  );
  const maxPriceInData = useMemo(
    () => Math.max(...loadedToys.map((item) => item.price)),
    [loadedToys]
  );

  // Main Filter Logic
  useEffect(() => {
    let filtered = [...loadedToys];

    // 1. Filter by Search
    if (searchText) {
      filtered = filtered.filter((toy) =>
        toy.toyName.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    // 2. Filter by Category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((toy) => toy.subCategory === selectedCategory);
    }

    // 3. Filter by Price
    filtered = filtered.filter((toy) => toy.price <= priceRange);

    // 4. Filter by Stock
    if (inStockOnly) {
      filtered = filtered.filter((toy) => toy.availableQuantity > 0);
    }

    // 5. Sorting
    if (sortOrder === "asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      filtered.sort((a, b) => b.price - a.price);
    }

    setToys(filtered);
  }, [
    searchText,
    selectedCategory,
    priceRange,
    inStockOnly,
    sortOrder,
    loadedToys,
  ]);

  // Reset Handler
  const handleReset = () => {
    setSearchText("");
    setSelectedCategory("All");
    setPriceRange(maxPriceInData);
    setInStockOnly(false);
    setSortOrder("default");
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Header & Mobile Filter Toggle */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-3xl font-extrabold text-gray-800">
            All Toys <span className="text-teal-600">Collection</span>
          </h1>

          <button
            className="lg:hidden btn btn-outline btn-sm gap-2 w-full md:w-auto"
            onClick={() => setShowMobileFilter(!showMobileFilter)}
          >
            <Filter size={16} /> Filters
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 relative">
          {/* LEFT SIDEBAR FILTER */}
          <aside
            className={`
                        lg:w-1/4 w-full h-fit bg-teal-50 border border-teal-100 p-6 rounded-2xl z-50 sticky top-24
                        ${showMobileFilter ? "block" : "hidden lg:block"}
                    `}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-lg text-gray-800">Filter By</h3>
              <button
                onClick={handleReset}
                className="text-xs font-bold text-teal-600 hover:text-orange-500 transition-colors"
              >
                Reset
              </button>
            </div>

            {/* Price Filter */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <label className="font-bold text-sm text-gray-700">
                  Max Price
                </label>
                <span className="text-sm font-bold text-teal-700">
                  ${priceRange}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max={Math.ceil(maxPriceInData)}
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="range range-xs range-accent"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>$0</span>
                <span>${Math.ceil(maxPriceInData)}</span>
              </div>
            </div>

            {/* Stock Toggle */}
            <div className="flex justify-between items-center mb-8 py-2 border-b border-teal-100">
              <label className="font-bold text-sm text-gray-700">
                In Stock Only
              </label>
              <input
                type="checkbox"
                className="toggle toggle-accent toggle-sm"
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
              />
            </div>

            {/* Category Filter */}
            <div>
              <h4 className="font-bold text-sm text-gray-700 mb-4">Category</h4>
              <div className="space-y-3">
                {categories.map((cat, idx) => (
                  <label
                    key={idx}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all
                                            ${
                                              selectedCategory === cat
                                                ? "border-teal-600"
                                                : "border-gray-300 group-hover:border-teal-400"
                                            }
                                        `}
                    >
                      {selectedCategory === cat && (
                        <div className="w-2.5 h-2.5 bg-teal-600 rounded-full"></div>
                      )}
                    </div>
                    <input
                      type="radio"
                      name="category"
                      className="hidden"
                      value={cat}
                      checked={selectedCategory === cat}
                      onChange={() => setSelectedCategory(cat)}
                    />
                    <span
                      className={`text-sm ${
                        selectedCategory === cat
                          ? "font-bold text-teal-700"
                          : "text-gray-600"
                      }`}
                    >
                      {cat}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* RIGHT SIDE: PRODUCT GRID */}
          <main className="w-full lg:w-3/4">
            {/* Search & Sort Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6 bg-gray-50 p-3 rounded-xl">
              {/* Search */}
              <div className="relative w-full sm:w-auto grow max-w-md">
                <input
                  type="text"
                  placeholder="Search toys..."
                  className="input input-sm input-bordered w-full pl-9 rounded-full focus:outline-none focus:border-teal-500"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>

              {/* Sort */}
              <select
                className="select select-sm select-bordered rounded-full w-full sm:w-auto focus:outline-none focus:border-teal-500"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="default">Sort by: Default</option>
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
              </select>
            </div>

            {/* Active Filters Summary */}
            <div className="mb-4 text-sm text-gray-500">
              Showing <strong>{toys.length}</strong> results
            </div>

            {/* Grid */}
            {toys.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {toys.map((toy) => (
                  <ToyCard key={toy.toyId} toy={toy} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-gray-600">
                  No toys found
                </h3>
                <p className="text-gray-400">
                  Try adjusting your filters or search criteria.
                </p>
                <button
                  onClick={handleReset}
                  className="btn btn-link text-teal-600 mt-2"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
