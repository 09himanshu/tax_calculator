let array = [
  'book', 'novel', 'magazine', 'comic', 'dictionary', 'encyclopedia',
  'textbook', 'journal', 'medicine', 'pill', 'tablet', 'capsule', 'gel', 'ointment', 'syrup', 'spray', 'cream',
  'painkiller', 'antibiotic', 'antacid', 'antiseptic', 'cough syrup', 'cold tablet', 'allergy medicine', 'nasal spray', 
  'eye drops', 'vitamin c', 'multivitamin', 'calcium tablet', 'iron supplement', 'omega-3 capsule', 'paracetamol tablet',
  'ibuprofen gel', 'aspirin', 'antifungal cream', 'antibacterial ointment',   'chocolate', 'candy', 'apple', 'banana', 'orange', 
  'tomato', 'potato', 'onion', 'carrot', 'spinach', 'cabbage', 'cucumber', 'fruit', 'vegetable', 'rice', 'wheat flour', 'bread',
  'noodles', 'pasta', 'oats', 'cornflakes', 'lentils', 'beans', 'barley', 'milk', 'butter', 'cheese', 'yogurt', 'egg', 'chicken', 
  'mutton', 'fish', 'prawn', 'sausage', 'bacon', 'ham', 'biscuit', 'cookie', 'chips', 'popcorn', 'ice cream', 'sandwich', 'burger', 'pizza',
  'salt', 'sugar', 'vinegar', 'spices', 'pepper', 'ketchup', 'mayonnaise', 'soy sauce', 'water'
]
  

export const GENERICS = (name) => {
    return array.some(keyword => name.includes(keyword))
}