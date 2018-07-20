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

function removeFromCart(item) {
  cart.splice()
}


/*
describe("removeFromCart()", function() {
  it("removes the specified item from the cart", function() {
    addToCart("vanilla");
    addToCart("watermelon");
    addToCart("yams");

    removeFromCart("watermelon");

    const firstItemName = getCart()[0].itemName;
    const secondItemName = getCart()[1].itemName;

    expect(firstItemName).toEqual("vanilla");
    expect(secondItemName).toEqual("yams");

    removeFromCart("yams");

    expect(getCart().length).toEqual(1);
  });

  it("alerts you if you're trying to remove an item that isn't in your cart", function() {
    // Repeat item name from previous test to prevent hard-coding.
    expect(removeFromCart("yams")).toEqual("That item is not in your cart.");
  });
});



4. The `removeFromCart()` function accepts one argument, the name of the item that should be removed.
    + If the item *is* present in the cart, the function should remove the object from the cart and then return the updated cart.
    + ***HINT***: Check each object's itemName value key to see if it matches the parameter, then remove it if it matches. You might find [Array.prototype.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) to be useful.
    + If the cart does not contain a matching item, the function should return `That item is not in your cart.`
*/


function placeOrder(cardNumber) {
  // write your code here
}
