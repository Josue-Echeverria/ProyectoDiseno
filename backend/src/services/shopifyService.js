const axios = require('axios');

const getShopifyProducts = async (shopUrl, accessToken) => {
    const response = await axios.get(`${shopUrl}/admin/api/2023-01/products.json`, {
        headers: {
            'X-Shopify-Access-Token': accessToken,
        },
    });
    return response.data.products;
};

module.exports = {
    getShopifyProducts,
};
