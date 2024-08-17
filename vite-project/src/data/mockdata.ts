import { ReactElement } from 'react';


export interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  oldPrice: number;
  imageUrl: string;
  isNew?: boolean;
  addToCart: boolean;
  imagesList: string[];
  category: string;
}


export interface Product {
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

export const categories = [
  { name: "เสื้อผู้ชาย", icon: 1 },
  { name: "เสื้อผู้หญิง", icon: 2 },
  { name: "กางเกง", icon: 3 },
  { name: "ชุดเดรส", icon: 4 },
  { name: "รองเท้าผ้าใบ", icon: 5 },
  { name: "เครื่องประดับ", icon: 6 },
]

export const books: Book[] = [
  {
    id: 0,
    title: "Natural Living Essentials",
    author: "Alex Green",
    price: 8.99,
    oldPrice: 13.99,
    imageUrl:
      "https://cf.shopee.co.th/file/9caed553814f80fe75416a7ab1d2f2db",
    imagesList: List,
    addToCart: true,
    category: categories[0].name
  },
  {
    id: 1,
    title: "Green Lifestyle Hacks",
    author: "Ella Rivers",
    price: 8.99,
    oldPrice: 13.99,
    imageUrl:
      "https://img.lazcdn.com/g/p/f616302aa6287914af960749a22624c9.jpg_360x360q75.jpg_.webp",
    imagesList: List,
    isNew: true,
    addToCart: true,
    category: categories[1].name
  },
  {
    id: 2,
    title: "Organic Choices Catalog",
    author: "Sam Reed",
    price: 8.99,
    oldPrice: 13.99,
    imageUrl:
      "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/461643/sub/goods_461643_sub14.jpg?width=494",
    imagesList: List,
    addToCart: true,
    category: categories[2].name
  },
  {
    id: 3,
    title: "Reduce, Reuse, Recycle Guide",
    author: "Olivia Woods",
    price: 8.99,
    oldPrice: 13.99,
    imageUrl:
      "https://cg.lnwfile.com/9vlv4q.jpg",
    imagesList: List,
    addToCart: true,
    category: categories[3].name
  },
  {
    id: 4,
    title: "Eco-Conscious Living",
    author: "Lucas Greenfield",
    price: 8.99,
    oldPrice: 13.99,
    imageUrl:
      "https://img.lazcdn.com/g/p/e8721a585a9274c4a3cf5e8f9c653b7f.jpg_720x720q80.jpg",
    imagesList: List,
    addToCart: true,
    category: categories[4].name
  },
  {
    id: 5,
    title: "The Eco-Friendly Lifestyle",
    author: "Anna Evergreen",
    price: 8.99,
    oldPrice: 13.99,
    imageUrl:
      "https://www.watchaser.com/cdn/shop/products/rolex-daytona-rainbow-white-gold-dubai-5_800x.png?v=1673041177",
    imagesList: List,
    addToCart: true,
    category: categories[5].name
  },
  {
    id: 6,
    title: "Sustainability in Action",
    author: "Eco Ethics Foundation",
    price: 8.99,
    oldPrice: 13.99,
    imageUrl:
      "https://g2000.co.th/cdn/shop/files/4112129200_01_058f95d2-ddaa-476d-aeec-3a3feba6d806_1080x.jpg?v=1710829485",
    imagesList: List,
    addToCart: true,
    category: categories[0].name
  },
  {
    id: 7,
    title: "Green Living Together",
    author: "Community Eco Group",
    price: 8.99,
    oldPrice: 13.99,
    imageUrl:
      "https://down-id.img.susercontent.com/file/5c8e886273ba3048a63cf6b926f9c585",
    imagesList: List,
    addToCart: true,
    category: categories[1].name
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
