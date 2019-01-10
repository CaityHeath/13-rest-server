'use strict';

const express = require('express');

const Product = require('../models/products.js');
//const Category = require('../models/categories.js');

const product = new Product();
//const category = new Category();

const router = express.Router();

// ROUTES
router.get('/api/v1/products', product.get);
router.post('/api/v1/products', product.post);

router.get('/api/v1/products/:id', product.get);
router.put('/api/v1/products/:id', product.put);
router.delete('/api/v1/products/:id', product.delete);

// FUNCTIONS
// function getProducts(request,response,next) {
//   // expects an array of objects back
//   products.get()
//     .then( data => {
//       const output = {
//         count: data.length,
//         results: data,
//       };
//       response.status(200).json(output);
//     })
//     .catch( next );
// }

// function getProduct(request,response,next) {
//   // expects an array with one object in it
//   products.get(request.params.id)
//     .then( result => response.status(200).json(result) )
//     .catch( next );
// }

// function postProducts(request,response,next) {
//   // expects the record that was just added to the database
//   products.post(request.body)
//     .then( result => response.status(200).json(result) )
//     .catch( next );
// }


// function putProducts(request,response,next) {
//   // expects the record that was just updated in the database
//   products.put(request.params.id, request.body)
//     .then( result => response.status(200).json(result) )
//     .catch( next );
// }

// function deleteProducts(request,response,next) {
//   // Expects no return value (the resource should be gone)
//   products.delete(request.params.id)
//     .then( result => response.status(200).json(result[0]) )
//     .catch( next );
// }

module.exports = router;
