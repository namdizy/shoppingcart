/**
 * Created by Nnamdi on 5/2/2017.
 */
const express = require('express');
const router = express.Router();
const cartDB= require('../api/schema/products').Cart;
const productListDB = require('../api/schema/products').Product;

router.route('/productsList')
  .get(function (req, res) {
    productListDB.find(function (err, result) {
      if (err) return console.error(err);
      res.send(result);
    })
  })
  .post(function (req, res) {

    var product = req.body;
    var query = {'id': product.id};

    productListDB.findOneAndUpdate(query, product, {upsert:true}, function(err, doc){
      if (err) return res.send(500, { error: err });
      return res.send(doc);
    });
  });

router.route('/cart')
  .get(function (req, res) {
    cartDB.find(function (err, result) {
      if(err) return console.error(err);
      res.send(result);
    })
  })
  .post(function (req, res) {
    var toSave = req.body;
    const cart = new cartDB(toSave);
    cart.save(function (err) {
      if(err) return console.error(err);
    })
  });

router.post('/removeFromCart', function (req, res) {
  var product = req.body;
  var query = {'id': product.id};

  productListDB.findOneAndUpdate(query, product, {upsert:true}, function(err, doc){
    if (err) return res.send(500, { error: err });
    cartDB.remove(query, function(err) {
        if (err) console.log('remove from cart', err);
        else res.send(doc);
      }
    );
  });
});

router.post('/checkOut', function (req, res) {
  var productList = req.body;
  var length = productList.length;

  cartDB.remove({}, function(err) {
      if (err) console.log(err);
      else {
        for(var i = 0; i <length; i++){
          var query = {'id': productList[i].id };
          productListDB.findOneAndUpdate(query, productList[i], {upsert: true}, function (err, doc) {
            if (err) return res.send(500, { error: err });
            res.send(doc);
          })
        }
      }
    }
  );

});

router.get('/', function (req, res) {
  res.send('app works some');
});


module.exports = router;
