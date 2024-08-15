import React from "react";
import { Search, ShoppingCart, User } from "lucide-react";

const categories = [
  { name: "Dogs", icon: "🐕" }, // Replace with actual icon/image
  { name: "Cats", icon: "🐈" }, // Replace with actual icon/image
  { name: "Fish", icon: "🐟" }, // Replace with actual icon/image
  { name: "Birds", icon: "🐦" }, // Replace with actual icon/image
  { name: "Small pets", icon: "🐹" }, // Replace with actual icon/image
  { name: "Reptiles", icon: "🦎" }, // Replace with actual icon/image
];

const ecoFriendlyDeals = [
  {
    title: "Eco-friendly pet bed",
    price: "$8.99",
    oldPrice: "$13.99",
    imgSrc: "url-to-image",
    addToCart: true,
  },
  {
    title: "Organic chicken treats",
    price: "$8.99",
    oldPrice: "$13.99",
    imgSrc: "url-to-image",
    addToCart: true,
  },
  {
    title: "Sustainable pet bed",
    price: "$8.99",
    oldPrice: "$13.99",
    imgSrc: "url-to-image",
    addToCart: true,
  },
  {
    title: "Healthy plant-based snacks",
    price: "$5.99",
    oldPrice: "$12.99",
    imgSrc: "url-to-image",
    addToCart: true,
  },
  {
    title: "Eco-friendly utensils set",
    price: "$9.99",
    oldPrice: "$13.99",
    imgSrc: "url-to-image",
    addToCart: true,
  },
  {
    title: "Eco-friendly notebooks pack",
    price: "$6.99",
    oldPrice: "$11.99",
    imgSrc: "url-to-image",
    addToCart: true,
  },
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <svg
              className="h-8 w-8 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="ml-2 text-xl font-semibold text-gray-800">
              EcoShop
            </span>
          </div>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                HOME
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                SHOP
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                BLOG
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                CONTACT
              </a>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            <Search className="h-5 w-5 text-gray-600" />
            <ShoppingCart className="h-5 w-5 text-gray-600" />
            <User className="h-5 w-5 text-gray-600" />
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8 flex-grow flex items-center justify-between">
        <div className="w-full lg:w-1/10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Discover sustainable products for a greener lifestyle
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Browse by category, brand, or eco-friendly deals
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Search for eco-friendly products"
              className="flex-grow px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="bg-green-500 text-white mr-20 px-6 py-2 rounded-r-lg hover:bg-green-600 transition duration-200">
              Search
            </button>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2">
          <img
            src="https://picsum.photos/2000/2000"
            alt="Eco-friendly concept"
            className="rounded-full w-full h-full object-cover"
          />
        </div>
      </main>
      {/* categories */}
      <div className="container mx-auto p-4">
        {/* Categories Section */}
        <div className="categories mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">Categories</h2>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 text-black">
            {categories.map((category) => (
              <div
                key={category.name}
                className="category-item flex flex-col items-center p-4 bg-white shadow rounded-lg cursor-pointer"
              >
                <div className="category-icon text-5xl mb-2">
                  {category.icon}
                </div>
                <span className="text-lg">{category.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Eco-friendly deals */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-2">Eco-friendly</h3>
              <p className="text-gray-500 mb-4">by Dr. Eco</p>
              <div className="text-orange-500 font-bold text-xl">30% OFF</div>
              <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-lg">
                Shop Now
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-2">New Eco-Friendly</h3>
              <p className="text-gray-500 mb-4">Discover our latest</p>
              <div className="text-orange-500 font-bold text-xl">20% OFF</div>
              <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-lg">
                Explore
              </button>
            </div>
            <div className="bg-red-500 p-6 rounded-lg shadow-lg text-white text-center">
              <h3 className="text-lg font-semibold mb-4">ECO SALE</h3>
              <p className="text-sm mb-4">Limited time offer</p>
              <div className="text-3xl font-bold">1H 59M 7S</div>
            </div>
          </div>

          {/* Middle Column: Trending eco-products */}
          <div className="col-span-2 space-y-8">
            <div className="flex justify-between items-center mb-4">
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow">
                Eco-friendly deals
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow">
                Trending eco-products
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {ecoFriendlyDeals.map((deal, index) => (
                <div
                  key={index}
                  className="eco-product bg-white shadow rounded-lg overflow-hidden"
                >
                  <img
                    src={deal.imgSrc}
                    alt={deal.title}
                    className="product-image w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <p className="product-title text-lg font-semibold mb-2">
                      {deal.title}
                    </p>
                    <p className="product-price text-gray-800">
                      <span className="current-price text-green-500">
                        {deal.price}
                      </span>
                      <span className="old-price text-gray-500 line-through ml-2">
                        {deal.oldPrice}
                      </span>
                    </p>
                    {deal.addToCart && (
                      <div className="text-center py-2 bg-gray-300 rounded-lg mt-2">
                        Add to cart
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section: Top Eco Picks */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Top Eco Picks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <img
                src="url-to-image"
                alt="Reusable kitchenware"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Reusable kitchenware</h3>
                <button className="mt-2 bg-orange-500 text-white py-2 px-4 rounded-lg">
                  Discover
                </button>
              </div>
            </div>
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <img
                src="url-to-image"
                alt="Eco-Friendly Fashion"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Eco-Friendly Fashion</h3>
                <button className="mt-2 bg-orange-500 text-white py-2 px-4 rounded-lg">
                  Get Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
