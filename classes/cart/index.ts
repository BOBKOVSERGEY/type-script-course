class Product {
    constructor(
        public id: number,
        public name: string,
        public title: string,
        public price: number
    ) {}
}

class Delivery {
    constructor(
        public date: Date
    ) {
    }
}

class HomeDelivery extends Delivery {
    constructor(
        public date: Date,
        public address: string
    ) {
        super(date)
    }
}

class ShopDelivery extends Delivery {
    constructor(
        public shopId: number
    ) {
        super(new Date())
    }
}

type DeliveryOptions  = HomeDelivery | ShopDelivery;

class Cart {
    private products: Product[] = [];
    private delivery: DeliveryOptions;

    public addProduct(product: Product) {
        this.products.push(product)
    }

    public deleteProduct(productID: number): void {
        this.products = this.products
            .filter((p: Product) => p.id !== productID)
    }

    public getSum(): number {
        return this.products
            .map((p: Product) => p.price)
            .reduce((p1: number, p2: number) => p1 + p2);
    }

    public setDelivery(delivery: DeliveryOptions) {
        this.delivery = delivery;
    }

    public checkOut() {
        if (this.products.length === 0) {
            throw new Error('Cart is empty')
        }
        if (!this.delivery) {
            throw new Error('Delivery is not set')
        }
        return { success: true }
    }
}

const cart = new Cart();

cart.addProduct(new Product(
    1,
    'Milk',
    'Milk',
    10
));
cart.addProduct(new Product(
    2,
    'Bread',
    'Bread',
    20
));
cart.addProduct(new Product(
    3,
    'Chocolate',
    'Chocolate',
    30
));

cart.deleteProduct(3);
//cart.setDelivery(new HomeDelivery(new Date(), 'Moscow'));

console.log(cart.getSum());
console.log(cart.checkOut());
