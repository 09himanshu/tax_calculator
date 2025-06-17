let array = [
  // Books & Educational
  'book', 'books', 'novel', 'novels', 'magazine', 'magazines', 'comic', 'comics',
  'dictionary', 'dictionaries', 'encyclopedia', 'encyclopedias',
  'textbook', 'textbooks', 'journal', 'journals',

  // Medicines & Health
  'pill', 'pills', 'tablet', 'tablets', 'capsule', 'capsules', 'gel', 'gels',
  'ointment', 'ointments', 'syrup', 'syrups', 'spray', 'sprays', 'cream', 'creams',
  'painkiller', 'painkillers', 'antibiotic', 'antibiotics', 'antacid', 'antacids',
  'antiseptic', 'antiseptics', 'cough syrup', 'cough syrups',
  'cold tablet', 'cold tablets', 'allergy medicine', 'allergy medicines',
  'nasal spray', 'nasal sprays', 'eye drops',
  'vitamin', 'vitamins', 'multivitamin', 'multivitamins',
  'calcium tablet', 'calcium tablets', 'iron supplement', 'iron supplements',
  'omega-3 capsule', 'omega-3 capsules',
  'paracetamol tablet', 'paracetamol tablets',
  'ibuprofen gel', 'ibuprofen gels', 'aspirin',
  'antifungal cream', 'antifungal creams',
  'antibacterial ointment', 'antibacterial ointments',

  // Food & Groceries
  'chocolate', 'chocolates', 'candy', 'candies', 'apple', 'apples', 'banana', 'bananas',
  'orange', 'oranges', 'tomato', 'tomatoes', 'potato', 'potatoes', 'onion', 'onions',
  'carrot', 'carrots', 'spinach', 'cabbage', 'cabbages', 'cucumber', 'cucumbers',
  'fruit', 'fruits', 'vegetable', 'vegetables', 'rice', 'wheat flour', 'bread',
  'noodles', 'pasta', 'oats', 'cornflakes', 'lentils', 'beans', 'barley', 'milk',
  'butter', 'cheese', 'yogurt', 'egg', 'eggs', 'chicken', 'mutton', 'fish', 'prawn',
  'prawns', 'sausage', 'sausages', 'bacon', 'ham', 'biscuit', 'biscuits',
  'cookie', 'cookies', 'chips', 'popcorn', 'ice cream', 'sandwich', 'sandwiches',
  'burger', 'burgers', 'pizza', 'pizzas', 'salt', 'sugar', 'vinegar', 'spices',
  'pepper', 'ketchup', 'mayonnaise', 'soy sauce', 'water'
];
  

export const GENERICS = (name) => {
    return array.some(keyword => name.includes(keyword))
}