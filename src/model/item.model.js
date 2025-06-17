export class Item {
    constructor(quantity, name, price, isImported, isExempt) {
        this.quantity = quantity;
        this.name = name;
        this.basePrice = price;
        this.isImported = isImported;
        this.isExempt = isExempt;
    }

    getTotalPrice() {
        return this.basePrice * this.quantity;
    }
}

