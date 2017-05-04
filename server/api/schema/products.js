
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productShema = new Schema({
    id: {
        type: String
    },
    name: {
        type: String
    },
    price: {
        type: String
    },
    image: {
        type: String
    },
    description: {
        type: String
    },
    status: {
      type: String
    }

});

const Product = mongoose.model('Product', productShema);
const Cart = mongoose.model('Cart', productShema);

module.exports = {
    Product: Product,
    Cart: Cart
};
