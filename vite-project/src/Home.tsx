import { useState } from "react";
import { Book, books, categories } from "./data/mockdata";
import "./index.css";
import { IoShirtSharp } from "react-icons/io5";
import { LiaTshirtSolid } from "react-icons/lia";
import { PiPantsThin } from "react-icons/pi";
import { GiLargeDress } from "react-icons/gi";
import { GiConverseShoe } from "react-icons/gi";
import { PiWatch } from "react-icons/pi";
import { PathPublicRouter } from "./Routes/PathRoutes";
import { useNavigate } from "react-router-dom";

export const Home = () => {
 
  const navigate = useNavigate();
  const [data, setData] = useState<Book[]>(books || []);
  const [test, setTest] = useState<string>("");

  const onChangeSearch = (e: string) => {
    if (e === "" || e === test) {
      setTest("");
      setData(books);
    } else {
      const find = books.filter((x) =>
        x.category.toLowerCase().includes(e.toLowerCase())
      );

      setData(find);
    }
  };

  const iconArray: any = [
    <LiaTshirtSolid size={60} />,
    <IoShirtSharp size={60} />,
    <PiPantsThin size={60} />,
    <GiLargeDress size={60} />,
    <GiConverseShoe size={60} />,
    <PiWatch size={60} />,
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <main className="container mx-auto px-4 py-8 flex-grow">
          <div className="flex flex-col lg:flex-row items-center justify-between mb-8">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                ศูนย์รวมเสื้อผ้าและเครื่องประดับทั้งหญิงและชาย 
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
              เสื้อผ้าและเครื่องประดับที่คู่ควรกับทุกคน
              </p>
            </div>
            <div className="w-full lg:w-1/2 lg:pl-8">
              <img
                src="https://files.vogue.co.th/uploads/AVAVAV_SS24_-_COVER_HORI.jpg"
                alt="Eco-friendly concept"
                className="rounded-full w-full h-64 lg:h-80 object-cover"
              />
            </div>
          </div>

          {/* Categories Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-black">ประเภท</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-black">
              {categories.map((category) => (
                <div
                  key={category.name}
                  onClick={() => {
                    setTest(category.name);
                    onChangeSearch(category.name);
                  }}
                  className="category-item flex flex-col items-center p-4 bg-white shadow rounded-lg cursor-pointer"
                  style={{
                    backgroundColor: category.name === test ? "gray" : "white",
                  }}
                >
                  {/* <div className="category-icon text-4xl md:text-5xl mb-2"> */}
                  {iconArray[category.icon - 1]}
                  {/* </div> */}
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
                <h3 className="text-lg font-semibold mb-2">โปรโมชันสำหรับสมาชิกใหม่</h3>
                <p className="text-gray-500 mb-4">สมัครสมาชิกครั้งแรกรับส่วนลดไปเลย</p>
                <div className="text-green-500 font-bold text-xl">ส่วนลด 30% </div>
                <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg">
                  สมัครสมาชิกตอนนี้
                </button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-2">โปรโมชัน Mid month sale</h3>
                <p className="text-gray-500 mb-4">ส่วนลดสำหรับกลางเดือนเมื่อซื้อครบ 10,000 บาท</p>
                <div className="text-green-500 font-bold text-xl">รับส่วนลดทันที20% </div>
                <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg">
                  ซื้อเลยตอนนี้
                </button>
              </div>
              {/* <div className="bg-red-500 p-6 rounded-lg shadow-lg text-white text-center">
                <h3 className="text-lg font-semibold mb-4">ECO SALE</h3>
                <p className="text-sm mb-4">Limited time offer</p>
                <div className="text-3xl font-bold">1H 59M 7S</div>
              </div> */}
            </div>

            {/* Middle and Right Columns: Trending eco-products */}
            <div className="lg:col-span-2 space-y-8">
              <h1>สินค้า</h1>
              {/* <div className="flex flex-wrap justify-between items-center mb-4">
                <button className="w-full sm:w-auto bg-green-500 text-white px-4 py-2 rounded-lg shadow mb-2 sm:mb-0">
                  Eco-friendly deals
                </button>
                <button className="w-full sm:w-auto bg-green-500 text-white px-4 py-2 rounded-lg shadow">
                  Trending eco-products
                </button>
              </div> */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.map((deal, index) => (
                  <div
                    key={index}
                    className="eco-product bg-white shadow rounded-lg overflow-hidden"
                    onClick={() =>
                      navigate(PathPublicRouter.productDetail, {
                        state: deal,
                      })}
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
                          {deal.price} ฿
                        </span>
                        <span className="old-price text-gray-500 line-through ml-2">
                          {deal.oldPrice} ฿
                        </span>
                      </p>
                      {/* {deal.addToCart && (
                        <div className="text-center py-2 bg-gray-300 rounded-lg mt-2 cursor-pointer hover:bg-gray-400 transition duration-200">
                          Add to cart
                        </div>
                      )} */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section: Top Eco Picks */}
          {/* <div className="mt-8">
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
          </div> */}
        </main>
      </div>
    </>
  );
};
