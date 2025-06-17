import { Item } from '../model/item.model.js';
import { GENERICS } from '../utils/generics.utils.js';

export class InputParser {
  static parse(input) {
    const normalizedInput = input.replace(/\s+/g, ' ').trim();
    const itemRegex = /(\d+)\s*([^\d]+?)\s+a\s*t\s+(\d+\.\d{2})/gi;

    const itemMap = new Map();

    let match;
    while ((match = itemRegex.exec(normalizedInput)) !== null) {
      const quantity = parseInt(match[1]);
      const name = match[2].trim().toLowerCase();
      const price = parseFloat(match[3]);
      const isImported = name.includes('imported');
      const isExempt = GENERICS(name);

      const itemKey = `${name}_${price}`;

      if (itemMap.has(itemKey)) {
        itemMap.get(itemKey).quantity += quantity;
      } else {
        itemMap.set(itemKey, {
          quantity,
          name,
          price,
          isImported,
          isExempt
        });
      }
    }

    const items = Array.from(itemMap.values()).map(
      ({ quantity, name, price, isImported, isExempt }) =>
        new Item(quantity, name, price, isImported, isExempt)
    );

    if (items.length === 0) {
      throw new Error('No valid items found in input');
    }

    return items;
  }
}
