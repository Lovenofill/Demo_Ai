import { books } from "./data/mockdata";
import "./index.css";

export const Home = () => {
  const categories = [
    { name: "Dogs", icon: "🐕" }, // Replace with actual icon/image
    { name: "Cats", icon: "🐈" }, // Replace with actual icon/image
    { name: "Fish", icon: "🐟" }, // Replace with actual icon/image
    { name: "Birds", icon: "🐦" }, // Replace with actual icon/image
    { name: "Small pets", icon: "🐹" }, // Replace with actual icon/image
    { name: "Reptiles", icon: "🦎" }, // Replace with actual icon/image
  ];

  //   const ecoFriendlyDeals = [
  //     {
  //       title: "Eco-friendly pet bed",
  //       price: "$8.99",
  //       oldPrice: "$13.99",
  //       imgSrc: "url-to-image",
  //       addToCart: true,
  //     },
  //     {
  //       title: "Organic chicken treats",
  //       price: "$8.99",
  //       oldPrice: "$13.99",
  //       imgSrc: "url-to-image",
  //       addToCart: true,
  //     },
  //     {
  //       title: "Sustainable pet bed",
  //       price: "$8.99",
  //       oldPrice: "$13.99",
  //       imgSrc: "url-to-image",
  //       addToCart: true,
  //     },
  //     {
  //       title: "Healthy plant-based snacks",
  //       price: "$5.99",
  //       oldPrice: "$12.99",
  //       imgSrc: "url-to-image",
  //       addToCart: true,
  //     },
  //     {
  //       title: "Eco-friendly utensils set",
  //       price: "$9.99",
  //       oldPrice: "$13.99",
  //       imgSrc: "url-to-image",
  //       addToCart: true,
  //     },
  //     {
  //       title: "Eco-friendly notebooks pack",
  //       price: "$6.99",
  //       oldPrice: "$11.99",
  //       imgSrc: "url-to-image",
  //       addToCart: true,
  //     },
  //   ];
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <main className="container mx-auto px-4 py-8 flex-grow">
          <div className="flex flex-col lg:flex-row items-center justify-between mb-8">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Discover sustainable products for a greener lifestyle
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Browse by category, brand, or eco-friendly deals
              </p>
              <div className="flex flex-col sm:flex-row">
                <input
                  type="text"
                  placeholder="Search for eco-friendly products"
                  className="w-full sm:w-2/3 px-4 py-2 rounded-t-lg sm:rounded-l-lg sm:rounded-t-none border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 mb-2 sm:mb-0"
                />
                <button className="w-full sm:w-1/3 bg-green-500 text-white px-6 py-2 rounded-b-lg sm:rounded-r-lg sm:rounded-b-none hover:bg-green-600 transition duration-200">
                  Search
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:pl-8">
              <img
                src="https://i.pinimg.com/564x/d5/3f/0a/d53f0a603be882e8ca88e61596733c9b.jpg"
                alt="Eco-friendly concept"
                className="rounded-full w-full h-64 lg:h-80 object-cover"
              />
            </div>
          </div>

          {/* Categories Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-black">
              Categories
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-black">
              {categories.map((category) => (
                <div
                  key={category.name}
                  className="category-item flex flex-col items-center p-4 bg-white shadow rounded-lg cursor-pointer"
                >
                  <div className="category-icon text-4xl md:text-5xl mb-2">
                    {category.icon}
                  </div>
                  <span className="text-sm md:text-lg text-center">
                    {category.name}
                  </span>
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

            {/* Middle and Right Columns: Trending eco-products */}
            <div className="lg:col-span-2 space-y-8">
              <div className="flex flex-wrap justify-between items-center mb-4">
                <button className="w-full sm:w-auto bg-green-500 text-white px-4 py-2 rounded-lg shadow mb-2 sm:mb-0">
                  Eco-friendly deals
                </button>
                <button className="w-full sm:w-auto bg-green-500 text-white px-4 py-2 rounded-lg shadow">
                  Trending eco-products
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {books.map((deal, index) => (
                  <div
                    key={index}
                    className="eco-product bg-white shadow rounded-lg overflow-hidden"
                  >
                    <img
                      src={deal.imageUrl}
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
                        <div className="text-center py-2 bg-gray-300 rounded-lg mt-2 cursor-pointer hover:bg-gray-400 transition duration-200">
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
                  src="/api/placeholder/400/300"
                  alt="Reusable kitchenware"
                  className="w-full h-40 md:h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">
                    Reusable kitchenware
                  </h3>
                  <button className="mt-2 bg-orange-500 text-white py-2 px-4 rounded-lg w-full sm:w-auto">
                    Discover
                  </button>
                </div>
              </div>
              <div className="bg-white shadow rounded-lg overflow-hidden">
                <img
                  src="/api/placeholder/400/300"
                  alt="Eco-Friendly Fashion"
                  className="w-full h-40 md:h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">
                    Eco-Friendly Fashion
                  </h3>
                  <button className="mt-2 bg-orange-500 text-white py-2 px-4 rounded-lg w-full sm:w-auto">
                    Get Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
