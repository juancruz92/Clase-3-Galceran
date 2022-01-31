export const PRODUCTS = [
  {
    id: 0,
    name: "Zapatilla Nike",
    description: "Nike Dunk",
    price: 15000,
    img: "https://picsum.photos/200",
    category: "Urban"
  }, {
    id: 1,
    name: "Zapatilla Adidas",
    description: "Adidas Grand Court",
    price: 16000,
    img: "https://picsum.photos/200",
    category: "Urban"
  }, {
    id: 2,
    name: "Zapatilla Reebok",
    description: "Reebok Nanoflex TR",
    price: 12000,
    img: "https://picsum.photos/200",
    category: "Running"
  }, {
    id: 3,
    name: "Zapatilla Le Coq Sportif",
    description: "Le Coq Sportif Noah",
    price: 11000,
    img: "https://picsum.photos/200",
    category: "Running"
  }
];

export function getProductos () {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(PRODUCTS), 2000)
  });
};