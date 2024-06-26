"use strict";
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus[PaymentStatus["Reserved"] = 0] = "Reserved";
    PaymentStatus[PaymentStatus["Processed"] = 1] = "Processed";
    PaymentStatus[PaymentStatus["Reversed"] = 2] = "Reversed";
})(PaymentStatus || (PaymentStatus = {}));
class Payment {
    constructor(id) {
        this.status = PaymentStatus.Reserved;
        this.createdAt = new Date();
        this.id = id;
    }
    getPaymentLifeTime() {
        return new Date().getTime() - this.createdAt.getTime();
    }
    unReservePayment() {
        if (this.status === PaymentStatus.Processed) {
            throw new Error('Payment already processed');
        }
        this.status = PaymentStatus.Reversed;
        this.updatedAt = new Date();
    }
}
const payment = new Payment(1);
payment.unReservePayment();
console.log(payment);
const time = payment.getPaymentLifeTime();
console.log(time);
