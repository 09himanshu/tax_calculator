import fs from 'fs'
import path from 'path'
import { InputParser } from './service/input.service.js'
import { TaxCalculator } from './service/taxCalculate.service.js'
import { Receipt } from './model/recept.model.js'

function processInputFile(filePath) {
  try {
    const input = fs.readFileSync(filePath, 'utf8');
    const items = InputParser.parse(input);
    const receipt = new Receipt();

    items.forEach(item => {
      const taxedPrice = TaxCalculator.calculate(item);
      receipt.addItem(item, taxedPrice);
    });

    console.log(receipt.generateReceipt());
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error.message);
  }
}

// console.log(process.cwd())

const inputFile = path.join(process.cwd(), './inputs/input9.txt');
processInputFile(inputFile);
