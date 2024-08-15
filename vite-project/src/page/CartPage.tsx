import React from "react";
import { Trash2 } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface CartItem extends Product {
  quantity: number;
}

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = React.useState<CartItem[]>([
    {
      id: "1",
      name: "Modern Lamp",
      price: 129.99,
      image: "/api/placeholder/80/80",
      quantity: 1,
    },
    {
      id: "2",
      name: "Woven Blanket",
      price: 99.98,
      image: "/api/placeholder/80/80",
      quantity: 1,
    },
  ]);

  const recommendedProducts: Product[] = [
    {
      id: "3",
      name: "Leather Wallet",
      price: 59.99,
      image: "/api/placeholder/80/80",
    },
    {
      id: "4",
      name: "Silver Earrings",
      price: 39.99,
      image: "/api/placeholder/80/80",
    },
    {
      id: "5",
      name: "Canvas Backpack",
      price: 79.99,
      image: "/api/placeholder/80/80",
    },
  ];

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4">
        <main>
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b py-4"
              >
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <input
                    type="number"
                    value={item.quantity}
                    className="w-16 px-2 py-1 border rounded mr-4"
                    onChange={() => {}} // Add quantity change logic here
                  />
                  <button
                    onClick={() => removeItem(item.id)}
                    className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
            <div className="flex justify-between items-center mt-6">
              <p className="text-xl font-bold">
                Total Amount: ${totalAmount.toFixed(2)}
              </p>
              <button className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">
                Proceed to Checkout
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Recommended Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recommendedProducts.map((product) => (
                <div key={product.id} className="text-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover mb-2"
                  />
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-gray-600">${product.price.toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CartPage;



