interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  oldPrice: number;
  imageUrl: string;
  isNew?: boolean;
  addToCart: boolean;
  imagesList: string[];
}
interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}
const List: string[] = [
  "https://i.pinimg.com/564x/10/5e/52/105e52e36c3c0138057ad4439345dd33.jpg",
  "https://i.pinimg.com/564x/da/aa/35/daaa35a4f296c6e91f1758084d3c1e84.jpg",
  "https://i.pinimg.com/564x/02/e7/49/02e749ac2486c8c3fbe901d0a1fbf16a.jpg",
  "https://i.pinimg.com/564x/71/13/da/7113da1aaa5bbec5ab211eeb045cb79b.jpg",
];
export const books: Book[] = [
  {
    id: 0,
    title: "Natural Living Essentials",
    author: "Alex Green",
    price: 8.99,
    oldPrice: 13.99,
    imageUrl:
      "https://i.pinimg.com/564x/c4/8b/77/c48b77924ccb4df2c0f54b202efdff4a.jpg",
    imagesList: List,
    addToCart: true,
  },
  {
    id: 1,
    title: "Green Lifestyle Hacks",
    author: "Ella Rivers",
    price: 8.99,
    oldPrice: 13.99,
    imageUrl:
      "https://i.pinimg.com/564x/cf/22/5d/cf225d295a8dbed11fb3f6b474c29c5d.jpg",
    imagesList: List,
    isNew: true,
    addToCart: true,
  },
  {
    id: 2,
    title: "Organic Choices Catalog",
    author: "Sam Reed",
    price: 8.99,
    oldPrice: 13.99,
    imageUrl:
      "https://i.pinimg.com/564x/5c/c4/4a/5cc44aeb0f3120334e911cb6b61c80c1.jpg",
    imagesList: List,
    addToCart: true,
  },
  {
    id: 3,
    title: "Reduce, Reuse, Recycle Guide",
    author: "Olivia Woods",
    price: 8.99,
    oldPrice: 13.99,
    imageUrl:
      "https://i.pinimg.com/736x/85/96/bb/8596bbc13a10d535cf2a7a0fc0aea2fa.jpg",
    imagesList: List,
    addToCart: true,
  },
  {
    id: 4,
    title: "Eco-Conscious Living",
    author: "Lucas Greenfield",
    price: 8.99,
    oldPrice: 13.99,
    imageUrl:
      "https://i.pinimg.com/564x/6f/5c/92/6f5c92c77657f738f4abcbd2ace2d411.jpg",
    imagesList: List,
    addToCart: true,
  },
  {
    id: 5,
    title: "The Eco-Friendly Lifestyle",
    author: "Anna Evergreen",
    price: 8.99,
    oldPrice: 13.99,
    imageUrl:
      "https://i.pinimg.com/564x/c8/0d/65/c80d6580225fa74088a8d27936f7d7a1.jpg",
    imagesList: List,
    addToCart: true,
  },
  {
    id: 6,
    title: "Sustainability in Action",
    author: "Eco Ethics Foundation",
    price: 8.99,
    oldPrice: 13.99,
    imageUrl:
      "https://i.pinimg.com/564x/6f/a4/01/6fa4013e051223c821b4a4e35fe726db.jpg",
    imagesList: List,
    addToCart: true,
  },
  {
    id: 7,
    title: "Green Living Together",
    author: "Community Eco Group",
    price: 8.99,
    oldPrice: 13.99,
    imageUrl:
      "https://i.pinimg.com/564x/05/a9/f1/05a9f1e0b9367e693b4b3f86795c681f.jpg",
    imagesList: List,
    addToCart: true,
  },
];

export const recommendedProducts: Product[] = [
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
