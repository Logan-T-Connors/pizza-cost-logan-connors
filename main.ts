// Ask the user for the diameter of the pizza
let diameter = game.askForNumber("Enter the diameter of the pizza (in inches):")
// Assume a constant price per square inch for the pizza
let PRICE_PER_SQUARE_INCH = 0.1
// Calculate the radius of the pizza
let radius = diameter / 2
// Calculate the area of the pizza
let area = Math.PI * radius * radius
// Calculate the subtotal and total
let subtotal = area * PRICE_PER_SQUARE_INCH
// Assume 13% tax, adjust as needed
let total = subtotal * 1.13
// Display the subtotal and total rounded to 2 decimal places
game.splash("Subtotal: $" + Math.round(subtotal * 100) / 100)
game.splash("Total: $" + Math.round(total * 100) / 100)
