"use strict";
class Product {
    constructor(id, name, title, price) {
        this.id = id;
        this.name = name;
        this.title = title;
        this.price = price;
    }
}
class Delivery {
    constructor(date) {
        this.date = date;
    }
}
class HomeDelivery extends Delivery {
    constructor(date, address) {
        super(date);
        this.date = date;
        this.address = address;
    }
}
class ShopDelivery extends Delivery {
    constructor(shopId) {
        super(new Date());
        this.shopId = shopId;
    }
}
class Cart {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    deleteProduct(productID) {
        this.products = this.products
            .filter((p) => p.id !== productID);
    }
    getSum() {
        return this.products
            .map((p) => p.price)
            .reduce((p1, p2) => p1 + p2);
    }
    setDelivery(delivery) {
        this.delivery = delivery;
    }
    checkOut() {
        if (this.products.length === 0) {
            throw new Error('Cart is empty');
        }
        if (!this.delivery) {
            throw new Error('Delivery is not set');
        }
        return { success: true };
    }
}
const cart = new Cart();
cart.addProduct(new Product(1, 'Milk', 'Milk', 10));
cart.addProduct(new Product(2, 'Bread', 'Bread', 20));
cart.addProduct(new Product(3, 'Chocolate', 'Chocolate', 30));
cart.deleteProduct(3);
//cart.setDelivery(new HomeDelivery(new Date(), 'Moscow'));
console.log(cart.getSum());
console.log(cart.checkOut());
