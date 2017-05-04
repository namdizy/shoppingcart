const faker = require('faker');
const PRODUCT_COUNT = 10;
const products = [];
const productDB = require('./schema/products').Product;


for(var i=0; i<PRODUCT_COUNT; i++) {
    products.push({
        id: faker.random.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.image(),
        description: faker.lorem.sentence(),
        status: 'in list'
    });
}

module.exports =  {
    saveData: function () {
      productDB.remove({}, function(err) {
          if (err) {
            console.log(err)
          } else {
            console.log('empty db')
          }
        }
      );
        for(var i = 0; i< products.length; i++){
            const productsToSave = new productDB(products[i]);

            productsToSave.save(function (err) {
            if(err){
              console.log('error saving page');
            }
          })
        }

    }
};
