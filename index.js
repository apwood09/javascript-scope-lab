// global scope: burger variable 
const burgers = ['Hamburger', 'Cheeseburger']
// global scope: featureDrink variable 
let featuredDrink = 'Strawberry Milkshake'; 

// function  addburger
function addBurger() {  
    const newBurger = 'Flatburger'; 
    burgers.push(newBurger);
    
    if(true) {
        const anotherNewBurger = 'Maple Bacon Burger';
        burgers.push(anotherNewBurger); 
    }
}

function changeFeaturedDrink() {
    featuredDrink = 'The JavaShake'; 
}