const axios = require('axios');
const { formatProductList, formatProduct } = require('../utils/formatter');

const url = process.env.ML_API_URL;

module.exports = {
  async findById(id) {
    try {
      const { data } = await axios.get(`${url}/items/${id}`);
      return formatProduct(data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  async findByQuery(query) {
    try {
      const { data } = await axios.get(`${url}/sites/MLA/search?q=${query}`);
      const { results, filters } = data;
      const categories = filters.find((filter) => filter.id === 'category');
      return formatProductList(
        results,
        categories ? categories.values : [],
      );
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};
