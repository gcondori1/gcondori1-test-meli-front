const productService = require('../services/productService');

module.exports = (router) => {
  router.get('/items', async (req, res) => {
    const { q: query } = req.query;
    if (!query) {
      return res.status(400).send('Cannot be a empty query');
    }
    try {
      const productList = await productService.getProductsByQuery(query);
      return res.json(productList);
    } catch (error) {
      const { response, message } = error;
      if (response) {
        return res.status(response.status).send(message);
      }
      return res.status(500).send(message);
    }
  });

  router.get('/items/:id', async (req, res) => {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send('Id cannot be null');
    }
    try {
      const product = await productService.getProductById(id);
      return res.json(product);
    } catch (error) {
      const { response, message } = error;
      if (response) {
        return res.status(response.status).send(message);
      }
      return res.status(500).send(message);
    }
  });
};
