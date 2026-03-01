const Database = require("better-sqlite3");
const path = require("path");

const dbPath = path.join(process.cwd(), "keshav-mithai.db");
const db = new Database(dbPath);

db.pragma("journal_mode = WAL");
db.pragma("foreign_keys = ON");

db.exec(`
  DROP TABLE IF EXISTS order_items;
  DROP TABLE IF EXISTS orders;
  DROP TABLE IF EXISTS products;

  CREATE TABLE products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    price REAL NOT NULL,
    image TEXT NOT NULL,
    category TEXT NOT NULL,
    weight TEXT NOT NULL DEFAULT '500g',
    featured INTEGER NOT NULL DEFAULT 0,
    inStock INTEGER NOT NULL DEFAULT 1
  );

  CREATE TABLE orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    customerName TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    address TEXT NOT NULL,
    city TEXT NOT NULL,
    pincode TEXT NOT NULL,
    total REAL NOT NULL,
    status TEXT NOT NULL DEFAULT 'pending',
    createdAt TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE TABLE order_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    orderId INTEGER NOT NULL,
    productId INTEGER NOT NULL,
    productName TEXT NOT NULL,
    quantity INTEGER NOT NULL,
    price REAL NOT NULL,
    FOREIGN KEY (orderId) REFERENCES orders(id)
  );
`);

const products = [
  {
    name: "Kaju Katli",
    description: "Premium cashew fudge delicately crafted with finest cashews and pure sugar, adorned with edible silver leaf. Our signature sweet that melts in your mouth.",
    price: 650,
    image: "/images/kaju-katli.jpg",
    category: "Barfi",
    weight: "500g",
    featured: 1,
    inStock: 1,
  },
  {
    name: "Gulab Jamun",
    description: "Soft, spongy milk-solid dumplings soaked in rose-flavored sugar syrup infused with cardamom and saffron. A timeless classic from our kitchen.",
    price: 400,
    image: "/images/gulab-jamun.jpg",
    category: "Syrup Sweets",
    weight: "500g",
    featured: 1,
    inStock: 1,
  },
  {
    name: "Rasgulla",
    description: "Light and spongy cottage cheese balls soaked in delicate sugar syrup. Handmade fresh daily with love and tradition.",
    price: 350,
    image: "/images/rasgulla.jpg",
    category: "Syrup Sweets",
    weight: "500g",
    featured: 1,
    inStock: 1,
  },
  {
    name: "Motichoor Laddu",
    description: "Exquisite tiny boondi pearls bound together with ghee, sugar, and aromatic cardamom. Perfect round laddus for every celebration.",
    price: 450,
    image: "/images/motichoor-laddu.jpg",
    category: "Laddu",
    weight: "500g",
    featured: 1,
    inStock: 1,
  },
  {
    name: "Pista Barfi",
    description: "Rich pistachio fudge made with ground pistachios, milk, and sugar. Garnished with slivers of premium pistachios and saffron strands.",
    price: 750,
    image: "/images/pista-barfi.jpg",
    category: "Barfi",
    weight: "500g",
    featured: 0,
    inStock: 1,
  },
  {
    name: "Mysore Pak",
    description: "Traditional South Indian sweet made with generous amounts of pure ghee, gram flour, and sugar. Rich, crumbly, and utterly irresistible.",
    price: 500,
    image: "/images/mysore-pak.jpg",
    category: "Traditional",
    weight: "500g",
    featured: 0,
    inStock: 1,
  },
  {
    name: "Soan Papdi",
    description: "Flaky, melt-in-mouth sweet made with gram flour, ghee, and sugar. Layered with delicate crispy flakes and flavored with cardamom.",
    price: 300,
    image: "/images/soan-papdi.jpg",
    category: "Traditional",
    weight: "500g",
    featured: 0,
    inStock: 1,
  },
  {
    name: "Rasmalai",
    description: "Soft paneer discs immersed in thick, creamy saffron-flavored milk, garnished with chopped pistachios and almonds. A royal delicacy.",
    price: 500,
    image: "/images/rasmalai.jpg",
    category: "Syrup Sweets",
    weight: "500g",
    featured: 1,
    inStock: 1,
  },
  {
    name: "Besan Laddu",
    description: "Golden laddus made from roasted gram flour, pure ghee, powdered sugar, and cardamom. A festive favorite handcrafted with care.",
    price: 380,
    image: "/images/besan-laddu.jpg",
    category: "Laddu",
    weight: "500g",
    featured: 0,
    inStock: 1,
  },
  {
    name: "Badam Barfi",
    description: "Luxurious almond fudge prepared with finely ground almonds, milk, and a hint of saffron. Topped with edible silver foil.",
    price: 700,
    image: "/images/badam-barfi.jpg",
    category: "Barfi",
    weight: "500g",
    featured: 0,
    inStock: 1,
  },
  {
    name: "Jalebi",
    description: "Crispy, golden spirals of fermented batter deep-fried and soaked in saffron sugar syrup. Best served warm and fresh.",
    price: 250,
    image: "/images/jalebi.jpg",
    category: "Syrup Sweets",
    weight: "500g",
    featured: 0,
    inStock: 1,
  },
  {
    name: "Dry Fruit Mix Box",
    description: "An elegant assortment of our finest barfis - Kaju, Pista, Badam, and Coconut. Perfect gift box for festivals and celebrations.",
    price: 1200,
    image: "/images/dry-fruit-box.jpg",
    category: "Gift Boxes",
    weight: "1kg",
    featured: 1,
    inStock: 1,
  },
];

const insert = db.prepare(`
  INSERT INTO products (name, description, price, image, category, weight, featured, inStock)
  VALUES (@name, @description, @price, @image, @category, @weight, @featured, @inStock)
`);

const insertMany = db.transaction((items) => {
  for (const item of items) {
    insert.run(item);
  }
});

insertMany(products);

console.log(`Seeded ${products.length} products successfully!`);
db.close();
