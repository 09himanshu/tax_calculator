import { Item } from '../model/item.model.js';

export class InputParser {
  static parse(input) {
    const normalizedInput = input.replace(/\s+/g, ' ').trim();

    const itemRegex = /(\d+) (.*?) at (\d*\.\d{2})/g;
    const items = [];
    let match;

    while ((match = itemRegex.exec(normalizedInput)) !== null) {

      const quantity = parseInt(match[1]);
      const name = match[2].trim();
      const price = parseFloat(match[3]);
      const isImported = name.includes('imported');
      const isExempt = this.isExemptItem(name);

      items.push(new Item(quantity, name, price, isImported, isExempt));
    }

    if (items.length === 0) {
      throw new Error('No valid items found in input');
    }

    return items;
  }

  static isExemptItem(name) {
    const exemptKeywords = ['book', 'novel', 'magazine', 'comic', 'dictionary', 'encyclopedia',
      'textbook', 'journal', 'chocolate', 'chocolates', 'bar', 'candy', 'fruit', 'vegetable', 'meat', 
      'bread', 'snack', 'cookie', 'biscuit', 'pasta', 'rice', 'cheese', 'milk', 'egg', 'eggs', 'beverage', 
      'drink', 'pills', 'medicine', 'drug', 'tablet', 'ointment', 'syrup', 'vaccine', 'bandage', 'injection', 
      'first aid', 'painkiller', 'antibiotic', 'supplement', 'vitamin', 'mask', 'sanitizer'];
    return exemptKeywords.some(keyword => name.includes(keyword));
  }
}

