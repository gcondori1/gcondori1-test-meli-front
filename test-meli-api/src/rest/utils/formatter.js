const authorName = process.env.AUTHOR_NAME;
const authorLastName = process.env.AUTHOR_LASTNAME;

module.exports = {
  formatProduct(product) {
    const {
      id,
      title,
      currency_id,
      price,
      condition,
      pictures,
      shipping,
      sold_quantity,
      plain_text
    } = product;
    return {
      author: {
        name: authorName,
        lastname: authorLastName
      },
      item: {
        id,
        title,
        price: {
          currency: currency_id,
          amount: Math.trunc(price),
          decimals: (price) % 1,
        },
        picture: pictures[0] ? pictures[0].url : '',
        condition,
        free_shipping: shipping.free_shipping,
        sold_quantity,
        description: plain_text,
      }
    };
  },

  formatProductList(productList, categories) {
    const productItems = productList.map(({
      id,
      title,
      currency_id,
      price,
      thumbnail,
      condition,
      shipping,
      address
    }) => (
      {
        id,
        title,
        price: {
          currency: currency_id,
          amount: Math.trunc(price),
          decimals: (price) % 1
        },
        picture: thumbnail,
        condition,
        free_shipping: shipping.free_shipping,
        state: address.state_name
      }));
    const categoryNames = categories.map((item) => item.name);
    return {
      author: {
        name: authorName,
        lastname: authorLastName
      },
      categories: categoryNames,
      items: productItems
    };
  }
};
