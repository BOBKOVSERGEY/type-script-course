enum PaymentStatus {
    Reserved,
    Processed,
    Reversed
}
class Payment {
    id: number;
    status: PaymentStatus = PaymentStatus.Reserved;
    createdAt: Date = new Date();
    updatedAt: Date;

    constructor(id: number) {
        this.id = id;
    }

    getPaymentLifeTime(): number {
        return new Date().getTime() - this.createdAt.getTime()
    }

    unReservePayment(): void {
        if (this.status === PaymentStatus.Processed) {
            throw new Error('Payment already processed')
        }
        this.status = PaymentStatus.Reversed;
        this.updatedAt = new Date();
    }
}

const payment = new Payment(1);
payment.unReservePayment()
console.log(payment)
const time = payment.getPaymentLifeTime()

console.log(time)