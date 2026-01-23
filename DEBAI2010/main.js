const log = (msg) => {
  console.log(msg);
};

// Câu 1
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

// Câu 2
const products = [
  new Product(1, "MacBook Pro", 45000000, 5, "Laptop", true),
  new Product(2, "iPhone 15 Pro", 35000000, 0, "Phone", true),
  new Product(3, "AirPods Pro", 6500000, 20, "Accessories", true),
  new Product(4, "Magic Mouse", 2500000, 10, "Accessories", false),
  new Product(5, "Dell XPS 13", 42000000, 3, "Laptop", true),
  new Product(6, "Samsung SSD", 3200000, 15, "Accessories", true)
];

// Câu 3
log("Câu 3:");
console.table(products.map(p => ({
  name: p.name,
  price: p.price
})));

// Câu 4
log("Câu 4:");
products.filter(p => p.quantity > 0).forEach(p => log(p.name));

// Câu 5
log("Câu 5:");
log(products.some(p => p.price > 30000000));

// Câu 6
log("Câu 6:");
log(
  products
    .filter(p => p.category === "Accessories")
    .every(p => p.isAvailable)
);

// Câu 7
log("Câu 7:");
log(
  products
    .reduce((sum, p) => sum + p.price * p.quantity, 0)
    .toLocaleString("vi-VN") + " VND"
);

// Câu 8
log("Câu 8:");
for (const p of products) {
  log(`${p.name} - ${p.category} - ${p.isAvailable ? "Đang bán" : "Ngừng bán"}`);
}

// Câu 9
log("Câu 9:");
for (const key in products[0]) {
  log(`${key}: ${products[0][key]}`);
}

// Câu 10
log("Câu 10:");
products
  .filter(p => p.isAvailable && p.quantity > 0)
  .map(p => p.name)
  .forEach(name => log(name));
