import laptop from "../assets/laptop.jpg";
import phone from "../assets/phone.jpg";
import headphones from "../assets/headphones.jpg";
import smartwatch from "../assets/smartwatch.jpg";
import camera from "../assets/camera.jpg";
import speaker from "../assets/speaker.jpg";
import tablet from "../assets/tablet.jpg";
import keyboard from "../assets/keyboard.jpg";
import mouse from "../assets/mouse.jpg";
import monitor from "../assets/monitor.jpg";
import printer from "../assets/printer.jpg";
import router from "../assets/router.jpg";

const products = [
  {
    id: 1,
    image: laptop,
    name: "Laptop",
    category: "Electronics",
    brand: "MSI",
    price: 250000,
    rating: 4.8,
    stock: 12,
    available: true,
  },
  {
    id: 2,
    image: phone,
    name: "Phone",
    category: "Electronics",
    brand: "Google",
    price: 125000,
    rating: 4.7,
    stock: 20,
    available: true,
  },
  {
    id: 3,
    image: headphones,
    name: "Headphones",
    category: "Accessories",
    brand: "Sony",
    price: 18000,
    rating: 4.6,
    stock: 0,
    available: false,
  },
  {
    id: 4,
    image: smartwatch,
    name: "Smart Watch",
    category: "Wearables",
    brand: "Apple",
    price: 95000,
    rating: 4.9,
    stock: 8,
    available: true,
  },
  {
    id: 5,
    image: camera,
    name: "Camera",
    category: "Photography",
    brand: "Sony",
    price: 175000,
    rating: 4.8,
    stock: 6,
    available: true,
  },
  {
    id: 6,
    image: speaker,
    name: "Bluetooth Speaker",
    category: "Audio",
    brand: "JBL",
    price: 22000,
    rating: 4.5,
    stock: 15,
    available: true,
  },
  {
    id: 7,
    image: tablet,
    name: "Tablet",
    category: "Electronics",
    brand: "Lenovo",
    price: 89000,
    rating: 4.3,
    stock: 5,
    available: true,
  },
  {
    id: 8,
    image: keyboard,
    name: "Mechanical Keyboard",
    category: "Accessories",
    brand: "Logitech",
    price: 14500,
    rating: 4.7,
    stock: 0,
    available: false,
  },
  {
    id: 9,
    image: mouse,
    name: "Wireless Mouse",
    category: "Accessories",
    brand: "Razer",
    price: 6500,
    rating: 4.4,
    stock: 25,
    available: true,
  },
  {
    id: 10,
    image: monitor,
    name: "Monitor",
    category: "Electronics",
    brand: "Asus ROG",
    price: 72000,
    rating: 4.8,
    stock: 7,
    available: true,
  },
  {
    id: 11,
    image: printer,
    name: "Printer",
    category: "Office",
    brand: "Canon",
    price: 55000,
    rating: 4.2,
    stock: 4,
    available: true,
  },
  {
    id: 12,
    image: router,
    name: "WiFi Router",
    category: "Networking",
    brand: "Asus",
    price: 12000,
    rating: 4.5,
    stock: 0,
    available: false,
  },
];

export default products;