import React, { useEffect, useState } from 'react';
import { Book } from '../data/mockdata';
import itemStore from '../stores/ItemStore';
import { notify } from '../components/helper';
import { PathPublicRouter } from '../Routes/PathRoutes';
import { useNavigate } from 'react-router-dom';

type OrderItem = {
  name: string;
  price: number;
  image: string;
};

const CheckoutForm: React.FC = () => {
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

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const shipping = 25.00;
  const tax = 92.00;
  const total = subtotal + shipping + tax;

  const removeItem = (id: number) => {
    const test = cartItems.filter((item) => item.id !== id);

    setCartItems(test);

    if (test !== null) {
      itemStore.setItem(test);
      window.localStorage.setItem("product", JSON.stringify(test));
      // notify("เอาสินค้าออกจากลงตะกร้าแล้ว");
    }
  };
const handlePayment = async()=>{
  notify("ชำระเงินสำเร็จ")
  cartItems.forEach((item:any) => removeItem(item.id));
  await navigate(PathPublicRouter.home)
}


  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 bg-gray-100">
      <div className="w-full md:w-2/3 bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6">ข้อมูลการจัดส่ง</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="col-span-1 p-2 border rounded" type="text" placeholder="ชื่อ" />
          <input className="col-span-1 p-2 border rounded" type="text" placeholder="นามสกุล" />
          <input className="col-span-2 p-2 border rounded" type="email" placeholder="อีเมลล์" />
          <input className="col-span-2 p-2 border rounded" type="tel" placeholder="เบอร์โทรศัพท์" />
          <input className="col-span-2 p-2 border rounded" type="text" placeholder="รายละเอียดที่อยู่" />
          <input className="col-span-1 p-2 border rounded" type="text" placeholder="อำเภอ / เขต" />
          <input className="col-span-1 p-2 border rounded" type="text" placeholder="จังหวัด" />
          <input className="col-span-1 p-2 border rounded" type="text" placeholder="รหัสไปรษณีย์" />
          <input className="col-span-1 p-2 border rounded" type="text" placeholder="ประเทศ" />
        </form>

        <h2 className="text-2xl font-bold mt-8 mb-6">ข้อมูลบัตรเครดิต</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="col-span-2 p-2 border rounded" type="text" placeholder="ประเภทบัตร" />
          <input className="col-span-2 p-2 border rounded" type="text" placeholder="หมายเลขบัตรเครดิต" />
          <input className="col-span-1 p-2 border rounded" type="text" placeholder="Expiration Date (MM/YY)" />
          <input className="col-span-1 p-2 border rounded" type="text" placeholder="CVV" />
        </form>
      </div>

      <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow h-fit">
        <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
        {cartItems.map((item, index) => (
          <div key={index} className="flex items-center mb-4">
            <img src={item.imageUrl} alt={item.title} className="w-12 h-12 object-cover mr-4" />
            <div>
              <p className="font-semibold">{item.title}</p>
              <p className="text-gray-600">{item.price.toFixed(2)} ฿</p>
            </div>
          </div>
        ))}
        <div className="border-t pt-4 mt-4">
          <div className="flex justify-between mb-2">
            <span>ราคาสินค้า</span>
            <span>{subtotal.toFixed(2)} ฿</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>ค่าจัดส่ง</span>
            <span>{shipping.toFixed(2)} ฿</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>ภาษี</span>
            <span>{tax.toFixed(2)} ฿</span>
          </div>
          <div className="flex justify-between font-bold text-lg mt-4">
            <span>ราคารวมทั้งหมด</span>
            <span>{total.toFixed(2)} ฿</span>
          </div>
        </div>
        <button className="w-full bg-orange-500 text-white py-3 rounded mt-6 hover:bg-orange-600 transition-colors" onClick={handlePayment}>
          ยืนยันการชำระเงิน
        </button>




      </div>
    </div>
  );
};

export default CheckoutForm;