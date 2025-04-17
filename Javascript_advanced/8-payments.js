function processPayments(amount) {
    console.log(`Collecting payments of ${amount}`)
};

function processOrder(orderId, amount) {
    console.log(`${orderId} is being processed`);
    processPayments(amount);
    console.log(`${orderId} has been fully processed`);
};

console.log("Processing orders");
processOrder(12321, 10.99);
processOrder(12322, 12.99);
processOrder(12323, 15.00);
console.log("All the orders have been processed");