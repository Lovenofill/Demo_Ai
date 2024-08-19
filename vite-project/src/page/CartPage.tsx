import React, { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
import { Book } from "../data/mockdata";
import { notify } from "../components/helper";
import itemStore from "../stores/ItemStore";
import { observer } from "mobx-react-lite";
import { AddItemToCart } from "./ProductDetail";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { PathPublicRouter } from "../Routes/PathRoutes";

// interface Product {
//   id: string;
//   name: string;
//   price: number;
//   image: string;
// }

// interface CartItem extends Product {
//   quantity: number;
// }

export const EditIteminCart = () => {};

const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<Book[]>([]);

  const get = () => {
    const storedItems = window.localStorage.getItem("product");
    if (storedItems !== null) {
      setCartItems(JSON.parse(storedItems));
    }
  };

  useEffect(() => {
    get();
  }, []);

  console.log("cartItems", cartItems);

  

  const removeItem = (id: number) => {
    const test = cartItems.filter((item) => item.id !== id);

    setCartItems(test);

    if (test !== null) {
      itemStore.setItem(test);
      window.localStorage.setItem("product", JSON.stringify(test));
      // notify("เอาสินค้าออกจากลงตะกร้าแล้ว");
    }
  };

  const alertRemove = (id: number) =>
    Swal.fire({
      title: "คุณแน่ใจใช่ไหม?",
      text: "คุณจะไม่สามารถเปลี่ยนกลับสิ่งนี้ได้!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ใช่ ลบเลย!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeItem(id);
        Swal.fire({
          title: "ลบแล้ว!",
          text: "ลบออกจากตะกร้าแล้ว",
          icon: "success",
        });
      }
    });

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4">
        <main>
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">ตระกร้าสินค้า</h2>
            {cartItems.map((item: Book) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b py-4"
              >
                <div className="flex items-center">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-20 h-20 object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <input
                    type="number"
                    value={item.quantity}
                    className="w-16 px-2 py-1 border rounded mr-4"
                    // onChange={(e) =>
                    //   AddItemToCart(item, parseInt(e.target.value))
                    // } // Add quantity change logic here
                    disabled
                  />
                  <button
                    onClick={() => {
                      alertRemove(item.id);
                    }}
                    className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
            <div className="flex justify-between items-center mt-6">
              <p className="text-xl font-bold">
                {/* Total Amount: ${totalAmount.toFixed(2)} */}
              </p>
              <button className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"   onClick={() =>navigate(PathPublicRouter.checkout, {})}>
                ชำระเงิน
              </button>
            </div>
          </div>

          {/* <div className="bg-white rounded-lg shadow-md p-6">
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
          </div> */}
        </main>
      </div>
    </div>
  );
};

export default observer(CartPage);
