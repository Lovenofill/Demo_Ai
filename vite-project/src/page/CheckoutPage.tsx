import React from 'react';

type OrderItem = {
  name: string;
  price: number;
  image: string;
};

const CheckoutForm: React.FC = () => {
  const orderItems: OrderItem[] = [
    { name: "Smartphone XYZ", price: 599.99, image: "/api/placeholder/50/50" },
    { name: "Wireless Headphones", price: 199.99, image: "/api/placeholder/50/50" },
    { name: "Portable Speaker", price: 349.99, image: "/api/placeholder/50/50" },
  ];

  const subtotal = orderItems.reduce((sum, item) => sum + item.price, 0);
  const shipping = 25.00;
  const tax = 92.00;
  const total = subtotal + shipping + tax;

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 bg-gray-100">
      <div className="w-full md:w-2/3 bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="col-span-1 p-2 border rounded" type="text" placeholder="First Name" />
          <input className="col-span-1 p-2 border rounded" type="text" placeholder="Last Name" />
          <input className="col-span-2 p-2 border rounded" type="email" placeholder="Email Address" />
          <input className="col-span-2 p-2 border rounded" type="tel" placeholder="Phone Number" />
          <input className="col-span-2 p-2 border rounded" type="text" placeholder="Street Address" />
          <input className="col-span-1 p-2 border rounded" type="text" placeholder="City" />
          <input className="col-span-1 p-2 border rounded" type="text" placeholder="State/Province" />
          <input className="col-span-1 p-2 border rounded" type="text" placeholder="ZIP/Postal Code" />
          <input className="col-span-1 p-2 border rounded" type="text" placeholder="Country" />
        </form>

        <h2 className="text-2xl font-bold mt-8 mb-6">Payment Information</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="col-span-2 p-2 border rounded" type="text" placeholder="Cardholder Name" />
          <input className="col-span-2 p-2 border rounded" type="text" placeholder="Card Number" />
          <input className="col-span-1 p-2 border rounded" type="text" placeholder="Expiration Date (MM/YY)" />
          <input className="col-span-1 p-2 border rounded" type="text" placeholder="CVV" />
        </form>
      </div>

      <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow h-fit">
        <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
        {orderItems.map((item, index) => (
          <div key={index} className="flex items-center mb-4">
            <img src={item.image} alt={item.name} className="w-12 h-12 object-cover mr-4" />
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-gray-600">${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
        <div className="border-t pt-4 mt-4">
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold text-lg mt-4">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
        <button className="w-full bg-orange-500 text-white py-3 rounded mt-6 hover:bg-orange-600 transition-colors">
          Complete Purchase
        </button>
      </div>
    </div>
  );
};

export default CheckoutForm;