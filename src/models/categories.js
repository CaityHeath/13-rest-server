'use strict';

const uuid = require('uuid/v4');

const schema = {
  id: {required: true},
  name: {required: true},
};

class Categories {

  constructor() {
    this.database = [];
  }

  get(id) {
    let response = id ? this.database.filter(record => record.id === id) : this.database;

    return Promise.resolve(response);
  }
  
  post(entry) {
    entry.id = uuid();
    let record = this.sanitize(entry);

    if(record.id){ this.database.push(record); 
    }
    return Promise.resolve(record);
  }

  put(id, entry) {
    console.log(entry);
    let record = this.sanitize(entry);
    console.log({record});
    let ident = parseInt(id);
    let idx; 
    for(let i = 0; i < this.database.length; i++){
      if(this.database[i].id === ident){
        this.database[i] = record;
        idx = i;
      }
    }
    console.log(this.database[idx]);
    return Promise.resolve(this.database[idx]);
  }

  delete(id) {
    let input = parseInt(id);
    this.database = this.database.filter((record) => record.id !== input);
    
    return Promise.resolve(); 
  }

  sanitize(entry) {
    let valid = true;
    let record = {};

    for(let key in schema){ 

      if(schema[key].required ){
        if(entry[key]){
          record[key] = entry[key];
          console.log('recordkey',record[key]);
        }else{ valid = false; }
      } else { record[key] = entry[key]; }
    }
    return valid ? record : undefined;
  }

}

module.exports = Categories;
