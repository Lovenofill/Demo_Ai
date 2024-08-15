import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export const ProductDetail = () => {
  const { state } = useLocation();

  console.log("state", state);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleQuantityChange = (e: any) => {
    setQuantity(parseInt(e.target.value));
  };

  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % state.imagesList.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + state.imagesList.length) % state.imagesList.length
    );
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2">
          <div className="relative">
            <img
              src={state.imagesList[currentImageIndex]}
              alt="Black Leather Jacket"
              className="w-full h-auto"
            />
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          <div className="flex mt-4 gap-2 overflow-x-auto">
            {state.imagesList.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="w-20 h-20 object-cover cursor-pointer flex-shrink-0"
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">{state.title}</h1>
          <p className="text-xl md:text-2xl font-semibold mb-4">
            ${state.price}
          </p>
          <p className="mb-4 text-sm md:text-base">
            This black leather jacket is crafted from high-quality leather,
            providing both style and comfort. Perfect for casual outings, it
            features a modern cut and durable zipper. Available in various sizes
            to fit your needs.
          </p>
          {/* <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
            <label htmlFor="size" className="font-semibold">Size:</label>
            <select id="size" className="border rounded px-2 py-1">
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div> */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
            <label htmlFor="quantity" className="font-semibold">
              Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
              className="border rounded px-2 py-1 w-16"
            />
          </div>
          <button className="w-full sm:w-auto bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition-colors">
            Add to Cart
          </button>
          <div className="mt-8">
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Customer Reviews
            </h2>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                Jane Smith: Great jacket! Fits perfectly and looks stylish.
              </li>
              <li>John Doe: Amazing quality and very comfortable to wear.</li>
              <li>
                Emily Johnson: Love the material and the fit. Would recommend!
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
