// SneakPeak shared data + cart logic (core logic preserved from original project)
const U = (id) => "https://images.unsplash.com/" + id + "?auto=format&fit=crop&w=1000&q=80";

export const PRODUCTS = [
  {
    id: 1, brand: "Puma", name: "Palermo", subtitle: "Hyperlink Blue-Flame Flicker-Gum",
    price: 5249, originalPrice: 6999,
    img: "assets/images/img_palermo_side.png", hoverImg: "assets/images/img_palermo_diagonal.png",
    images: ["assets/images/img_palermo_side.png", "assets/images/img_palermo_top.png", "assets/images/img_palermo_rear.png", "assets/images/img_palermo_rear_394x394.png", "assets/images/img_palermo_diagonal.png", "assets/images/img_palermo_rear_1.png"],
    sizes: [7, 8, 9, 10, 11],
    vendors: [
      { name: "SoleTrade Mumbai", price: 5249, rating: 4.4, verified: true, city: "Mumbai" },
      { name: "Velocity Kicks", price: 5999, rating: 4.6, verified: true, city: "Delhi" },
      { name: "StepUp Gurgaon", price: 6999, rating: 4.1, verified: true, city: "Delhi" }
    ],
    details: { style: "402693_07", color: "Hyperlink Blue-Flame Flicker-Gum", material: "Suede & Leather", fit: "Regular", profile: "Low Boot" },
    description: "The Palermo brings back the timeless appeal of a terrace classic with a vintage silhouette and premium materials."
  },
  {
    id: 2, brand: "Adidas Originals", name: "Samba OG", subtitle: "Core Black Cloud White Gum",
    price: 8999, originalPrice: 10999,
    img: "assets/images/img_rectangle_12_276x310.png", hoverImg: U("photo-1606107557195-0e29a4b5b4aa"),
    images: ["assets/images/img_rectangle_12_276x310.png", U("photo-1606107557195-0e29a4b5b4aa")],
    sizes: [6, 7, 8, 9, 10, 11],
    vendors: [
      { name: "SneakerHead Delhi", price: 8999, rating: 4.7, verified: true, city: "Delhi" },
      { name: "HypeYard Bengaluru", price: 9200, rating: 4.5, verified: true, city: "Bengaluru" }
    ],
    details: { color: "Core Black / Cloud White / Gum", material: "Leather & Suede", fit: "Regular", profile: "Low" },
    description: "The terrace icon. Full-grain leather upper, gum sole, and five decades of history in every stitch."
  },
  {
    id: 3, brand: "Nike", name: "Dunk Low", subtitle: "Panda Black White",
    price: 10999, originalPrice: 12999,
    img: "assets/images/img_rectangle_12_1.png", hoverImg: U("photo-1600269452121-4f2416e55c28"),
    images: ["assets/images/img_rectangle_12_1.png", U("photo-1600269452121-4f2416e55c28")],
    sizes: [7, 8, 9, 10, 11, 12],
    vendors: [
      { name: "KicksCorner Bangalore", price: 10999, rating: 4.5, verified: true, city: "Bengaluru" },
      { name: "SoleSearch Mumbai", price: 11500, rating: 4.8, verified: true, city: "Mumbai" }
    ],
    details: { color: "Black / White", material: "Leather", fit: "Regular", profile: "Low" },
    description: "From the hardwood to the streets — the Dunk Low stays a staple with clean colour-blocking and everyday comfort."
  },
  {
    id: 4, brand: "Asics", name: "Japan S", subtitle: "Pure White Minimalist",
    price: 7999, originalPrice: 9999,
    img: "assets/images/img_rectangle_12_2.png", hoverImg: U("photo-1600185365483-26d7a4cc7519"),
    images: ["assets/images/img_rectangle_12_2.png", U("photo-1600185365483-26d7a4cc7519")],
    sizes: [7, 8, 9, 10],
    vendors: [
      { name: "TokyoSports Mumbai", price: 7999, rating: 4.3, verified: true, city: "Mumbai" },
      { name: "Eastern Sneaks", price: 8200, rating: 4.2, verified: true, city: "Kolkata" }
    ],
    details: { color: "White / Green", material: "Leather", fit: "Regular", profile: "Low" },
    description: "A court classic reduced to its essentials — crisp lines, low profile, goes with everything."
  },
  {
    id: 5, brand: "Reebok", name: "Floatzig Symmetros", subtitle: "White - Orange",
    price: 8999, originalPrice: 13999,
    img: "assets/images/img_rectangle_12_3.png", hoverImg: U("photo-1543512214-318c7553f230"),
    images: ["assets/images/img_rectangle_12_3.png", U("photo-1543512214-318c7553f230")],
    sizes: [7, 8, 9, 10],
    vendors: [
      { name: "Inflcit Kicks", price: 8999, rating: 4.7, verified: true, city: "Kolkata" },
      { name: "Delhi Grails", price: 9500, rating: 4.4, verified: true, city: "Delhi" }
    ],
    details: { color: "White / Orange", material: "Mesh & Synthetic", fit: "Regular", profile: "Runner" },
    description: "Zig-energy cushioning in a daily runner built for distance and the commute alike."
  },
  {
    id: 6, brand: "New Balance", name: "204L", subtitle: "White Runners",
    price: 7999, originalPrice: 12999,
    img: "assets/images/img_rectangle_12_4.png", hoverImg: U("photo-1525966222134-fcfa99b8ae77"),
    images: ["assets/images/img_rectangle_12_4.png", U("photo-1525966222134-fcfa99b8ae77")],
    sizes: [7, 8, 9, 10],
    vendors: [
      { name: "TokyoSports Mumbai", price: 7999, rating: 4.3, verified: true, city: "Mumbai" },
      { name: "KicksCorner Bangalore", price: 8400, rating: 4.5, verified: true, city: "Bengaluru" }
    ],
    details: { color: "Triple White", material: "Suede & Mesh", fit: "Regular", profile: "Low" },
    description: "A lifestyle spin on the 2004 racing flat — tonal white suede with a low, fast silhouette."
  }
];

export const fmt = (n) => "₹" + Number(n).toLocaleString("en-IN");

const KEY = "sneakpeak_cart";
export const cart = {
  get() { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; } },
  set(items) { localStorage.setItem(KEY, JSON.stringify(items)); },
  add(pid, size, vendor, price, qty = 1) {
    const items = this.get();
    const hit = items.find((i) => i.pid === pid && i.size === size && i.vendor === vendor);
    if (hit) hit.qty += qty; else items.push({ pid, size, vendor, price, qty });
    this.set(items);
    return items;
  },
  update(idx, qty) { const items = this.get(); if (items[idx]) { items[idx].qty = Math.max(1, qty); this.set(items); } return items; },
  remove(idx) { const items = this.get(); items.splice(idx, 1); this.set(items); return items; },
  clear() { this.set([]); },
  count() { return this.get().reduce((s, i) => s + i.qty, 0); },
  subtotal() { return this.get().reduce((s, i) => s + i.price * i.qty, 0); }
};

export const byId = (id) => PRODUCTS.find((p) => p.id === Number(id));
