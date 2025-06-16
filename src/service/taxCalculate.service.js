import { roundUp } from '../utils/rounding.utils.js';

export class TaxCalculator {
    constructor(item) {
        this.item = item;
    }

    static calculate(item) {
      let tax = 0;
      if (!item.isExempt) tax += 0.1 * item.price;
      if (item.isImported) tax += 0.05 * item.price;
      return roundUp(tax);
    }
}