import { useNavigate } from "react-router-dom";
import { Book, books } from "../data/mockdata";
import { PathPublicRouter } from "../Routes/PathRoutes";
import { useState } from "react";

export const Products = () => {
  const navigate = useNavigate();

  const [data, setData] = useState<Book[]>(books || []);
  const [search, setSearch] = useState("");

  const onChangeSearch = () => {
    if (search === "") {
      setData(books);
    } else {
      const find = books.filter((x) =>
        x.title.toLowerCase().includes(search.toLowerCase())
      );

      setData(find);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1">
        {/* <aside className="w-64 bg-gray-100 p-4">
          <div className="mb-4">
            <h4 className="text-lg font-semibold mb-2">
              Eco-friendly book type
            </h4>
            <div className="flex flex-col space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Book (10,448)
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> E-book (4,208)
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Eco-friendly
                audiobook
              </label>
            </div>
          </div>

          <button className="w-full bg-blue-500 text-white py-2 rounded mt-4">
            Clear Filters
          </button>
        </aside> */}

        <main className="flex-1 p-4">
          <div className="flex justify-between items-center mb-4">
            <div className="space-x-2">
              {/* <button className="px-3 py-1 border rounded flex items-center">
                <Star className="mr-1" size={16} /> Top rated
              </button>
              <button className="px-3 py-1 border rounded">Bestsellers</button>
              <button className="px-3 py-1 border rounded">New releases</button>
              <button className="px-3 py-1 border rounded">Eco-friendly</button> */}

              <div className="flex flex-col sm:flex-row">
                <input
                  type="text"
                  placeholder="ค้นหาสินค้า"
                  className="w-full sm:w-2/3 px-4 py-2 rounded-t-lg sm:rounded-l-lg sm:rounded-t-none border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 mb-2 sm:mb-0"
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button
                  onClick={() => onChangeSearch()}
                  className="w-full sm:w-1/3 bg-green-500 text-white px-6 py-2 rounded-b-lg sm:rounded-r-lg sm:rounded-b-none hover:bg-green-600 transition duration-200"
                >
                  ค้นหา
                </button>
              </div>
            </div>
            {/* <div className="flex items-center">
              <button className="p-1 border rounded mr-2">
                <Grid size={20} />
              </button>
              <button className="p-1 border rounded mr-2">
                <List size={20} />
              </button>
              <select className="border p-1 rounded">
                <option>Sort by: Recommended</option>
              </select>
            </div> */}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.length === 0 ? (
              <p>ไม่พบสินค้า</p>
            ) : (
              <>
                {data.map((books) => (
                  <div
                    key={books.id}
                    className="border rounded-lg overflow-hidden"
                  >
                    <div className="relative">
                      <img
                        src={books.imageUrl}
                        alt={books.title}
                        className="w-full h-48 object-cover"
                      />
                      {books.isNew && (
                        <span className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 text-xs rounded">
                          ใหม่
                        </span>
                      )}
                      {/* {books.isDiscover && (
                      <span className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 text-xs rounded">
                        Discover
                      </span>
                    )}
                    {books.discount && (
                      <span className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 text-xs rounded">
                        -{books.discount}%
                      </span>
                    )} */}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold">{books.title}</h3>
                      <p className="font-bold mt-2">{books.price} ฿</p>
                      <button
                        className="mt-2 w-full bg-green-500 text-white py-2 rounded"
                        onClick={() =>
                          navigate(PathPublicRouter.productDetail, {
                            state: books,
                          })
                        }
                      >
                        รายละเอียด
                      </button>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>

          {/* <div className="mt-4 flex justify-center">
           
            <span>Pagination placeholder</span>
          </div> */}
        </main>
      </div>
    </div>
  );
};
