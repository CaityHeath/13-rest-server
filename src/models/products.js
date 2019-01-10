'use strict';

let schema = require('./products-schema');

class Products {

  constructor() {
  }

  get(_id) {
    let queryObj = _id ? {_id} : {};
    return schema.find(queryObj);
  }
  
  post(entry) {
    let record = new schema(entry);
    return record.save();
  }

  put(_id, record) {
    schema.update({_id}, {$set: {record} });
    return schema.find({_id});
  }

  delete(_id) {
    let id = schema.find({_id});
    schema.deleteOne({id});
    return;
  }

}

module.exports = Products;
