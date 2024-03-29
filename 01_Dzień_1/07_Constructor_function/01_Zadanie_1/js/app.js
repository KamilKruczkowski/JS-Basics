function Basket() {
  this.products = [];
  this.sum = 0;
}

Basket.prototype.addProduct = function(name, price) {
  this.products.push(
    {
      name, // name: name
      price // price: price
    }
  );

  this.sum += price;
}

Basket.prototype.showBasket = function() {
  this.products.forEach(function(product) {
    console.log(`Produkt: ${product.name}, cena: ${product.price}`)
  });

  console.log(`Cena do zapłaty: ${this.sum}`);
}

const aliceBasket = new Basket();
aliceBasket.addProduct("pomidor",10);
aliceBasket.addProduct("arbuz",40);
aliceBasket.showBasket();

const bruceBasket = new Basket();
bruceBasket.addProduct("rice", 10);
bruceBasket.addProduct("grzyby mun",50);
bruceBasket.addProduct("tofu",20);
bruceBasket.showBasket();