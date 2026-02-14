export interface Product {
  id: number;
  name: string;
  nameUrdu: string;
  category: string;
  price: number;
  unit: string;
  image: string;
  description: string;
  descriptionUrdu: string;
  inStock: boolean;
  featured: boolean;
}

export interface SiteInfo {
  name: string;
  nameUrdu: string;
  owner: string;
  phone: string;
  email: string;
  address: string;
  addressUrdu: string;
}

export const siteInfo: SiteInfo = {
  name: "Hafiz Sajid Syed Crops Seeds",
  nameUrdu: "حافظ ساجد سیڈز",
  owner: "Hafiz Syed Sajid Hussain",
  phone: "0308 4591993",
  email: "sajidsyedhafizsajidsyed@gmail.com",
  address: "Village Adlana, Tehsil Bhawana, District Chiniot, Punjab, Pakistan",
  addressUrdu: "گاؤں عدلانہ، تحصیل بھوانہ، ضلع چنیوٹ، پنجاب، پاکستان"
};

export const products: Product[] = [
  {
    id: 1,
    name: "Wheat Seeds Premium",
    nameUrdu: "گندم کے بیج پریمیم",
    category: "Cereal",
    price: 2500,
    unit: "per maund",
    image: "/images/n1.jpeg",
    description: "High quality wheat seeds for maximum yield. Perfect for Pakistani climate.",
    descriptionUrdu: "زیادہ پیداوار کے لیے اعلیٰ معیار کے گندم کے بیج۔ پاکستانی موسم کے لیے بہترین۔",
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: "Cotton Seeds BT",
    nameUrdu: "روئی کے بیج بی ٹی",
    category: "Cash Crop",
    price: 3200,
    unit: "per kg",
    image: "/images/n2.jpeg",
    description: "BT cotton seeds with pest resistance. Higher yield guaranteed.",
    descriptionUrdu: "کیڑوں سے بچاؤ والے بی ٹی روئی کے بیج۔ زیادہ پیداوار کی ضمانت۔",
    inStock: true,
    featured: true
  },
  {
    id: 3,
    name: "Rice Basmati Seeds",
    nameUrdu: "باسمتی چاول کے بیج",
    category: "Cereal",
    price: 4500,
    unit: "per kg",
    image: "/images/n3.jpeg",
    description: "Premium basmati rice seeds for export quality grain production.",
    descriptionUrdu: "ایکسپورٹ کوالٹی اناج کی پیداوار کے لیے پریمیم باسمتی چاول کے بیج۔",
    inStock: true,
    featured: true
  },
  {
    id: 4,
    name: "Sunflower Hybrid Seeds",
    nameUrdu: "سورج مکھی ہائبرڈ بیج",
    category: "Oil Seeds",
    price: 1800,
    unit: "per kg",
    image: "/images/n4.jpeg",
    description: "High oil content sunflower hybrid seeds for commercial farming.",
    descriptionUrdu: "کمرشل فارمنگ کے لیے زیادہ تیل والے سورج مکھی ہائبرڈ بیج۔",
    inStock: true,
    featured: false
  },
  {
    id: 5,
    name: "Corn Hybrid Seeds",
    nameUrdu: "مکئی ہائبرڈ بیج",
    category: "Cereal",
    price: 2800,
    unit: "per kg",
    image: "/images/n5.jpeg",
    description: "High yield corn hybrid seeds suitable for all seasons.",
    descriptionUrdu: "تمام موسموں کے لیے موزوں زیادہ پیداوار والے مکئی ہائبرڈ بیج۔",
    inStock: true,
    featured: true
  },
  {
    id: 6,
    name: "Sugarcane Seeds",
    nameUrdu: "گنے کے بیج",
    category: "Cash Crop",
    price: 1500,
    unit: "per maund",
    image: "/images/n1.jpeg",
    description: "Disease resistant sugarcane seeds for maximum sugar recovery.",
    descriptionUrdu: "زیادہ چین کی بازیافت کے لیے بیماری سے مزاحم گنے کے بیج۔",
    inStock: true,
    featured: false
  },
  {
    id: 7,
    name: "Mustard Seeds",
    nameUrdu: "سرسوں کے بیج",
    category: "Oil Seeds",
    price: 2200,
    unit: "per kg",
    image: "/images/n2.jpeg",
    description: "High oil content mustard seeds for commercial cultivation.",
    descriptionUrdu: "کمرشل کاشت کے لیے زیادہ تیل والے سرسوں کے بیج۔",
    inStock: true,
    featured: false
  },
  {
    id: 8,
    name: "Vegetable Seeds Mix",
    nameUrdu: "سبزیوں کے بیج",
    category: "Vegetables",
    price: 500,
    unit: "per packet",
    image: "/images/n3.jpeg",
    description: "Premium quality vegetable seeds for home gardening.",
    descriptionUrdu: "ہوم گارڈننگ کے لیے پریمیم کوالٹی سبزیوں کے بیج۔",
    inStock: true,
    featured: false
  }
];

export const categories = [
  { name: "All", nameUrdu: "تمام" },
  { name: "Cereal", nameUrdu: "اناج" },
  { name: "Cash Crop", nameUrdu: "نقد فصل" },
  { name: "Oil Seeds", nameUrdu: "تیل کے بیج" },
  { name: "Vegetables", nameUrdu: "سبزیاں" }
];