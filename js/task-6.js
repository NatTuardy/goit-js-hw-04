"use strict";

// Расставь отсутствующие this в методах
// объекта account.

// const account = {
//   owner: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["order-1", "order-2", "order-3"],
//   changeDiscount(value) {
//     this.discount = value;
//   },
//   showOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     balance -= cost;
//     orders.push(order);
//   }
// };

// account.changeDiscount(0.15);
// console.log(account.discount); // 0.15

// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']

// account.addOrder(5000, "order-4");
// console.log(account.balance); // 19000
// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']

// Исправь ошибки которые будут в
// консоли, чтобы скрипт заработал.

// const inventory = {
//   items: ["Knife", "Gas mask"],
//   add(itemName) {
//     console.log(`Adding ${itemName} to inventory`);

//     this.items.push(itemName);
//   },
//   remove(itemName) {
//     console.log(`Removing ${itemName} from inventory`);

//     this.items = this.items.filter(item => item !== itemName);
//   }
// };

// const invokeInventoryAction = function(itemName, action) {
//   console.log(`Invoking action on ${itemName}`);
//   action(itemName);
// };

// invokeInventoryAction("Medkit", inventory.add.bind(inventory));
// // Invoking action on Medkit
// // Adding Medkit to inventory

// console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

// invokeInventoryAction("Gas mask", inventory.remove.bind(inventory));
// // Invoking action on Gas mask
// // Removing Gas mask from inventory

// console.log(inventory.items); // ['Knife', 'Medkit']

// Напиши функцию calculateTotalPrice(allProdcuts, productName),
// которая получает массив объектов и имя продукта
//  (значение свойства name). Возвращает общую стоимость продукта
//   (цена * количество).

// Вызовы функции для проверки работоспособности твоей реализации.

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 }
];

const calculateTotalPrice = function(allProdcuts, productName) {
  let total;
  for (const product of allProdcuts) {
    if (product.name === productName) {
      total = product.price * product.quantity;
    }
  }
  return total;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(calculateTotalPrice(products, "Радар")); // 5200

console.log(calculateTotalPrice(products, "Дроид")); // 2800
