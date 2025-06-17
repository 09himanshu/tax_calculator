import { roundUp } from '../utils/rounding.utils.js';

export class TaxCalculator {
  static calculate(item) {
    let tax = 0;
    
    if (!item.isExempt) {
      tax += item.basePrice * 0.10;
    }

    if (item.isImported) {
      tax += item.basePrice * 0.05;
    }

    tax = roundUp(tax);

    const totalPrice = (item.basePrice + tax) * item.quantity;

    return totalPrice;
  }
}