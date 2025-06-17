export class Receipt {
    constructor() {
        this.items = [];
        this.salesTaxes = 0;
        this.total = 0;
    }

    addItem(item, taxedPrice) {
        if(item.quantity && item.basePrice) {
            this.items.push({
                quantity: item.quantity,
                name: item.name,
                // price: taxedPrice
                price: item.quantity*item.basePrice
            });
            this.salesTaxes += taxedPrice - (item.basePrice * item.quantity);
            this.total += taxedPrice;
        }
    }

    generateReceipt() {
        let receipt = '';
        this.items.forEach(item => {
            receipt += `${item.quantity} ${item.name}: ${item.price.toFixed(2)}\n`;
        });
        receipt += `Sales Taxes: ${this.salesTaxes.toFixed(2)}\n`;
        receipt += `Total: ${this.total.toFixed(2)}`;
        return receipt;
    }
}

