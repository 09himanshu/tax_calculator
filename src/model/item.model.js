export class Item {
    constructor(quantity, name, price, isImported, isExempt) {
        if (quantity <= 0 || price < 0) {
            throw new Error('Invalid item data');
        }
        this.quantity = quantity;
        this.name = name;
        this.price = price;
        this.isImported = isImported;
        this.isExempt = isExempt;
    }
}