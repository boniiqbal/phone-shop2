const path = require('path')
const fs = require('fs')

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'product.json');

const getProductFromFile = (cb) => {
   fs.readFile(p, (err, fileContent) => {
      if (!err) {
         cb(JSON.parse(fileContent))
      } else {
         cb([]);
      }    
   })
}

module.exports = class Product {
   constructor(judul) {
      this.title = judul;
   }

   save() {
      getProductFromFile(product => {
         product.push(this);
         fs.writeFile(p, JSON.stringify(product), (err) => {
            console.log(err)
         })
      })
   }

   static fetchAll(cb) {
      getProductFromFile(cb);
   }
}