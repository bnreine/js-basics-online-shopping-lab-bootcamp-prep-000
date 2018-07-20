var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({ itemName: item, itemPrice: Math.floor((99*math.random()+1))});
}



/*
describe("addToCart()", function() {
  it("can add items to the cart", function() {
    addToCart("apples");

    expect(getCart().length).toEqual(1);

    addToCart("bananas");

    expect(getCart().length).toEqual(2);
  });

  it("turns items into JavaScript objects before adding them to the cart", function() {
    addToCart("carrots");

    let itemConstructor = getCart()[0].constructor;

    expect(itemConstructor).toEqual(Object);
  });

  it("properly structures the cart item as object with a key of `itemName` and the corresponding value { itemName: itemName } format", function() {
    addToCart("daikon");

    let itemName = getCart()[0].itemName;

    expect(itemName).toEqual("daikon");
  });

  it("sets the price (integer between 1 and 100) on the cart object using the key `price`", function() {
    addToCart("eggplant");

    let itemPrice = getCart()[0].itemPrice;

    expect(itemPrice).toBeLessThanOrEqualTo(100)
                     .toBeGreaterThanOrEqualTo(1);
  });

  it("chooses the price at random", function() {
    // Note: this test has a 1-in-10,000 chance of a false negative.
    addToCart("figs");
    addToCart("grapes");
    addToCart("halloumi");

    let pricesArray = getCart().map(cartItem => cartItem.itemPrice);
    let areAnyPricesEqual = pricesArray[0] === pricesArray[1] && pricesArray[1] === pricesArray[2];

    expect(areAnyPricesEqual).toBe(false);
  });

  it("returns a message indicating that the item has been added", function() {
    expect(addToCart("ice cream")).toEqual("ice cream has been added to your cart.");

    expect(addToCart("juice")).toEqual("juice has been added to your cart.");
  });
});






1. The `addToCart()` function accepts one argument, the name of an item.
    + Use that passed-in string to create a new object representing the item. The object should consist of two key-value pairs : `{ itemName: name of the item, itemPrice: price of the item, }`. As more items are added, the `cart` should start to look something like this: `[ {  itemName:"bananas", itemPrice: 17 }, { itemName:"pancake batter",itemPrice: 5 }, { itemName:"eggs", itemPrice: 49 }]`.
    + The price of each item should be a randomly-generated integer between 1 and 100.
      * ***HINT***: Look into `Math.random()` and `Math.floor()`.
    + Upon the successful addition of a new item to the cart, the function should return `<itemName> has been added to your cart.` .
*/



function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
