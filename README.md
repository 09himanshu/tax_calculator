# Sales Tax Calculator

This is a Node.js command-line application to calculate sales tax and generate a receipt from a shopping basket input, based on specified tax rules.

## 📌 Problem Statement

You are given a list of shopping items with their prices. Your task is to generate a receipt including:

- Itemized prices with tax included.

- Total sales taxes.

- Total amount.

### Tax Rules:

- Basic Sales Tax (10%) applies to all goods except books, food, and medical products.

- Import Duty (5%) applies to all imported goods (no exemptions).

- Taxes are rounded up to the nearest 0.05.

### Input Example:
```
1 book at 12.49
1 music CD at 14.99
1 chocolate bar at 0.85
```

### Output Example:
```
1 book: 12.49
1 music CD: 16.49
1 chocolate bar: 0.85
Sales Taxes: 1.50
Total: 29.83
```

## 🚀 Getting Started

### 1. Clone the Repository

```
git clone https://github.com/09himanshu/tax_calculator.git
cd tax_calculator
```

### 2. Add Input File

Create an input file like input/input1.txt with one item per line.

### 3. Run the Program
```
node src/index.js ./inputs/input1.txt
```

### 4. Check the file src/utils/generic.utils.js
This file contains a list of reserved keywords for identifying food, books, and medical products. I've tried to include common terms, but coverage may vary depending on the test cases — feel free to customize or expand it as needed.

## 👨‍💻 Author

**Himanshu Sah**
