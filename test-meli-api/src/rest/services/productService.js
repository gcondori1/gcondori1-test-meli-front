const productDao = require('../dao/productDao');

module.exports = {
  getProductById(id) {
    return productDao.findById(id);
  },
  getProductsByQuery(query) {
    return productDao.findByQuery(query);
  },
};
