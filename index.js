function randomPrice() {
  return Math.floor(Math.random() * Math.floor(100)) + 1;
}

var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({[item]: randomPrice()});
  console.log(`${item} has been added to your cart.`)
  return cart;
}function viewCart() {
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
  }
  // If my cart length is more than one, I want to log different responses
  // namely it should be along the lines of 'In your cart, you have bananas at $17, pancake batter at 18$, and coconuts at 20$.'
  var inMyCart = `In your cart, you have`;
  var getOwnPropertyNames;
  var getOwnPrice;
  
  if (cart.length === 1){
      inMyCart += ` ${Object.getOwnPropertyNames(cart[0]).join()} at $${Object.values(cart[0]).join()}.`;
      console.log(inMyCart);
    }
  for (var i=0;i<cart.length; i++){
    
    getOwnPropertyNames = Object.getOwnPropertyNames(cart[i]).join();
    getOwnPrice = Object.values(cart[i]).join();
    
    if (i < cart.length - 1){
      inMyCart += ` ${getOwnPropertyNames} at $${getOwnPrice}`;
      if (cart.length > 2){
        inMyCart += `,`;
      }
    }
    if (i === cart.length - 1){
      inMyCart += ` and ${getOwnPropertyNames} at $${getOwnPrice}.`;
    }
  }
  console.log(inMyCart);
}

function total() {
  var total = 0;
  for (var i = 0; i < cart.length; i++){
    total += parseInt(Object.values(cart[i]).join());
  }
  return total;
}

function removeFromCart(item) {
  cart.forEach(function(element, index, array){
    console.log(cart[element]);
  })
}

function placeOrder(cardNumber) {
  // write your code here
}
