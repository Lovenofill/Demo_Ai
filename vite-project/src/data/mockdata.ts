export interface Book {
  id: number;
  title: string;
  price: number;
  oldPrice: number;
  imageUrl: string;
  isNew?: boolean;
  imagesList: string[];
  category: string;
  details:string;
  quantity?: number
}


export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

const ListURL= [
  [
    "https://image.uniqlo.com/UQ/ST3/th/imagesgoods/470299/sub/thgoods_470299_sub7.jpg?width=750",
    "https://image.uniqlo.com/UQ/ST3/th/imagesgoods/470299/sub/thgoods_470299_sub23.jpg?width=750",
    "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/470299/sub/goods_470299_sub13.jpg?width=750",
    "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/470299/sub/goods_470299_sub14.jpg?width=750",
  ],
  [
    "https://image.uniqlo.com/UQ/ST3/th/imagesgoods/476175/sub/thgoods_476175_sub7.jpg?width=750",
    "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/476175/sub/goods_476175_sub14.jpg?width=750",
    "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/476175/sub/goods_476175_sub17.jpg?width=750",
    "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/476175/sub/goods_476175_sub18.jpg?width=750",
  ],
  [
    "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/460150/sub/goods_460150_sub14.jpg?width=750",
    "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/460150/sub/goods_460150_sub15.jpg?width=750",
    "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/460150/sub/goods_460150_sub17.jpg?width=750",
    "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/460150/sub/goods_460150_sub13.jpg?width=750",
  ],
  [
    "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/473076/sub/goods_473076_sub13.jpg?width=750",
    "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/473076/sub/goods_473076_sub14.jpg?width=750",
    "https://image.uniqlo.com/UQ/ST3/th/imagesgoods/473076/sub/thgoods_473076_sub24.jpg?width=750",
    "https://image.uniqlo.com/UQ/ST3/th/imagesgoods/473076/sub/thgoods_473076_sub9.jpg?width=750",
  ],
  [
    "https://drx7pnvuocl0e.cloudfront.net/media/catalog/product/cache/1385b635fbcd2b4a1bd7d222a65ada37/v/n/vn0a3wmavne_2.png",
    "https://drx7pnvuocl0e.cloudfront.net/media/catalog/product/cache/1385b635fbcd2b4a1bd7d222a65ada37/v/n/vn0a3wmavne_4.png",
    "https://drx7pnvuocl0e.cloudfront.net/media/catalog/product/cache/1385b635fbcd2b4a1bd7d222a65ada37/v/n/vn0a3wmavne_3.png",
    "https://drx7pnvuocl0e.cloudfront.net/media/catalog/product/cache/1385b635fbcd2b4a1bd7d222a65ada37/v/n/vn0a3wmavne_5.png",
  ],
  [
    "https://media.rolex.com/image/upload/q_auto:eco/f_auto/c_limit,w_1200/v1711724047/rolexcom/collection/family-pages/classic-watches/datejust/family-page/2024/classic-watches-datejust-the-date-a-modern-milestone-M126333-0009_2310jva_001",
    "https://media.rolex.com/image/upload/q_auto:eco/f_auto/c_limit,w_1600/v1715334861/rolexcom/collection/family-pages/classic-watches/datejust/family-page/2024/classic-watches-datejust-landing-page-editorial-push-behind-the-seal-comfort-wmfinalassembly_2212jb_0001",
    "https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7-majesty/c_limit,w_640/v1/catalogue/2024/upright-c/m278344rbr-0034",
    "https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7/c_limit,w_640/v1/catalogue/2024/showcase/m278344rbr-0034",
  ],
  [
    "https://image.uniqlo.com/UQ/ST3/th/imagesgoods/472891/item/thgoods_69_472891.jpg?width=750",
    "https://image.uniqlo.com/UQ/ST3/th/imagesgoods/472891/sub/thgoods_472891_sub3.jpg?width=750",
    "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/472891/sub/goods_472891_sub17.jpg?width=750",
    "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/472891/sub/goods_472891_sub14.jpg?width=750",
  ],
  [
    "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/471695/sub/goods_471695_sub13.jpg?width=750",
    "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/471695/sub/goods_471695_sub14.jpg?width=750",
    "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/471695/sub/goods_471695_sub23.jpg?width=750",
    "https://image.uniqlo.com/UQ/ST3/th/imagesgoods/471695/sub/thgoods_471695_sub7.jpg?width=750",
  ],
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
    title: "เสื้อเชิ้ต ผ้าเจอร์ซี่เดนิม แขนยาว ทรงหลวม",
    price: 1200,
    oldPrice: 1800,
    imageUrl:
      "https://image.uniqlo.com/UQ/ST3/th/imagesgoods/470299/item/thgoods_67_470299.jpg?width=750",
    imagesList: ListURL[0],
    category: categories[0].name,
    details:"ผ้าเจอร์ซี่บรัชเนื้อละเอียดสัมผัสนุ่มให้ลุคคล้ายผ้าเดนิม ทรงหลวมจัดสไตล์แบบสวมใส่ตัวเดียวหรือเล่นเลเยอร์ได้อย่างลงตัว"
  },
  {
    id: 1,
    title: "เสื้อยืดแขนสั้น mofusand UT",
    price: 990,
    oldPrice: 1250,
    imageUrl:
      "https://image.uniqlo.com/UQ/ST3/th/imagesgoods/476175/item/thgoods_00_476175.jpg?width=750",
    imagesList: ListURL[1],
    isNew: false,
    category: categories[1].name,
    details:"mofusand เป็นซีรีส์ภาพประกอบแมวที่น่ารักและเหนือจริงเล็กน้อย UT สำหรับผู้หญิงที่รอคอยมานานจากซีรีส์แมวยอดนิยมและน่ารักพร้อมธีมผลไม้และสัตว์ทะเลมีจำหน่ายแล้ว"
  },
  {
    id: 2,
    title: "กางเกงผ้าคอตตอนขา 5 ส่วน ทรงหลวม",
    price: 1500,
    oldPrice: 2000,
    imageUrl:
      "https://image.uniqlo.com/UQ/ST3/th/imagesgoods/460150/item/thgoods_31_460150.jpg?width=750",
    imagesList: ListURL[2],
    category: categories[2].name,
    details:"- ผ้าคอตตอนผสมสวมใส่สบายเพื่อการเคลื่อนไหวที่คล่องตัว ขอบเอวยางยืดพร้อมเชือกดึงสำหรับปรับเอวให้กระชับ ตัวเลือกที่ตอบโจทย์ทุกโอกาส ทรงขาสอบสไตล์รีแล็กซ์เพื่อการสวมใส่สบายและการเคลื่อนไหวที่คล่องตัว"
  },
  {
    id: 3,
    title:  "ชุดกระโปรงแขนสั้นมีวอลุ่ม",
    price: 1500,
    oldPrice: 1800,
    imageUrl:
    "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/473076/sub/goods_473076_sub11.jpg?width=750",
    imagesList: ListURL[3],
    category: categories[3].name,
    details:"ขอบเอวเย็บรูดสวมใส่กระชับสบาย ช่วงคอแต่งจีบพร้อมสายปรับขนาด  ผ้าคอตตอนปอปปลิ้น 100% ทรงยาวบานเข้ารูป ตอบโจทย์สำหรับใส่ไปเที่ยวพักผ่อนหรือสวมใส่เป็นเสื้อผ้าประจำวัน"
  },
  {
    id: 4,
    title: "VANS COMFYCUSH OLD SKOOL - (CLASSIC) BLACK/TRUE WHIT",
    price: 3400,
    oldPrice: 4000,
    imageUrl:
      "https://drx7pnvuocl0e.cloudfront.net/media/catalog/product/cache/1385b635fbcd2b4a1bd7d222a65ada37/v/n/vn0a3wmavne_2.png",
    imagesList: ListURL[4],
    category: categories[4].name,
    details:"VANS ComfyCush Old Skoolรุ่นที่ได้รับความนิยมเป็นอันดับต้นๆ ต้อง VANS Old Skool รุ่นแรกที่ติดแถบ Jazz Side Stripe สีขาว ตัดกับสีดำของผ้าแคนวาส ผสมผสาน Suede (หนังกลับ) เพิ่มความทนทาน คาแรคเตอร์เก๋าๆ เท่ มีสไตล์ มองไกลๆ ก็รู้ว่านี่แหละคือ VANS, ComfyCush Old Skool อัปเกรดส่วนรองรับการเคลื่อนไหวในการเล่นสเก็ตบอร์ด"
  },
  {
    id: 5,
    title: "Rolex Datejust",
    price: 100000,
    oldPrice: 150000,
    imageUrl:
      "https://media.rolex.com/image/upload/q_auto:eco/f_auto/c_limit,w_1200/v1711724038/rolexcom/collection/family-pages/classic-watches/datejust/family-page/2024/classic-watches-datejust-continually-updated-standards-M126200-0023_2403jva_001",
    imagesList: ListURL[5],
    category: categories[5].name,
    details:"Datejust คือนาฬิการุ่นคลาสสิกที่สมบูรณ์แบบของ Rolex และเป็นนาฬิการุ่นดั้งเดิมที่แสดงให้เห็นถึงความสำเร็จที่สำคัญทั้งหมดของแบรนด์ ด้วยกลไกการทำงานโครโนมิเตอร์ ระบบขึ้นลานอัตโนมัติ และตัวเรือนกันน้ำ พร้อมส่วนแสดงวันที่ในช่องหน้าต่างพิเศษบนหน้าปัด นับตั้งแต่การสร้างสรรค์ นาฬิกาเรือนนี้ก็มีการพัฒนาอย่างต่อเนื่อง โดยนำเสนอความเป็นไปได้ด้านสุนทรียภาพมากมายในขณะเดียวกันก็รวบรวมความรู้ความชำนาญของ Rolex ไว้"
  },
  {
    id: 6,
    title: "เสื้อยืดแขนสั้น Harry Potter UT ลายหมวกคัดสรร",
    price: 900,
    oldPrice: 1000,
    imageUrl:
      "https://image.uniqlo.com/UQ/ST3/th/imagesgoods/472891/sub/thgoods_472891_sub7.jpg?width=750",
    imagesList: ListURL[6],
    category: categories[0].name,
    details:"การผจญภัยของ Harry Potter ได้สร้างความพิเศษไม่เหมือนใครให้กับวัฒนธรรมป๊อปนับตั้งแต่วินาทีแรกที่เขาได้ก้าวเท้าสู่สถานีรถไฟคิงส์ครอสบนชานชาลาที่เก้าเศษสามส่วนสี่ คอลเลคชันนี้นอกจากจะยกทัพดีไซน์สุดพิเศษของบ้านทั้งสี่หลัง ได้แก่ กริฟฟินดอร์ ฮัฟเฟิลพัฟ เรเวนคลอ และสลิธีรินแล้ว ยังอัดแน่นไปด้วยองค์ประกอบที่หลากหลายจากเรื่อง Harry Potter ทั้งไม้กายสิทธิ์ คาถา และหมวกคัดสรรด้วย เสื้อยืดนี้พร้อมแสดงให้เห็นถึงเสน่ห์อันเป็นตำนานของ Harry Potter อย่างแท้จริง"
  },
  {
    id: 7,
    title: "เสื้อกล้าม เสริมบรา แขนกุด สไตล์อเมริกัน",
    price: 950,
    oldPrice: 1100,
    imageUrl:
      "https://image.uniqlo.com/UQ/ST3/th/imagesgoods/471695/item/thgoods_58_471695.jpg?width=750",
    imagesList: ListURL[7],
    category: categories[1].name,
    details:"ปรับใหม่ให้วงแขนดูแนบเนียนขึ้นตามเสียงตอบรับจากลูกค้า ดีไซน์เว้าหลังดูสวยเก๋ ผ้าลายนูนทึบแสงเนื้อละเอียด อวดช่วงไหล่ในลุคที่สบายตา คัพบราในตัวช่วยให้ไม่ต้องกังวลว่าจะเห็นสายบรา ตอบโจทย์ทั้งสไตล์เล่นเลเยอร์และใส่แบบตัวเดียว ความยาวสวมใส่ได้หลายโอกาสแมตช์คู่กับกางเกงเอวสูงได้สะดวก ดีไซน์สไตล์ Ringer กุ๊นปลายแขนและคอเสื้อสีสดใส แต่งกุ๊นกว้างช่วยเสริมสไตล์ให้โดดเด่น ให้การซัพพอร์ตอย่างมั่นใจ 360 องศา"
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
