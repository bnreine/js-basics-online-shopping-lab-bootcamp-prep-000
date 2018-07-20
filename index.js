var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


function addToCart(item) {
 cart.push({ itemName: item, itemPrice: Math.floor((99*Math.random()+1))});
 return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length===0) {
    return 'Your shopping cart is empty.';
  }
  else if (cart.length===1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }  
   else {
    var message=`In your cart, you have `;
    for (var i=0; i<(cart.length-1); i++) {
      message+=`${cart[i].itemName} at $${cart[i].itemPrice}, `;
    }
    message+=`and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
    return message;
  }
}

function total() {
  var totalCost=0;
  for (var i=0; i<cart.length; i++) {
    totalCost+=cart[i].itemPrice;
  }
  return totalCost;
}


/*
3. The `total()` function accepts no arguments, iterates through the `cart` array, and returns the current total value of the items in the cart.

describe("total()", function() {
  it("adds up the price of all items in the cart", function() {
    addToCart("sorghum");
    addToCart("tarragon");

    const sorghumCost = getCart()[0].itemPrice;
    const tarragonCost = getCart()[1].itemPrice;

    let totalCost = sorghumCost + tarragonCost;

    expect(total()).toBe(totalCost);

    addToCart("urchin");

    const urchinCost = getCart()[2].itemPrice;

    totalCost += urchinCost;

    expect(total()).toBe(totalCost);
  });
});
*/







function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
