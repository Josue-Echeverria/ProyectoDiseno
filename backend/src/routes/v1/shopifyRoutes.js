const express = require('express');
const { getShopifyProducts } = require('../services/shopifyService');
const router = express.Router();

router.get('/products', async (req, res) => {
    const shopUrl = req.query.shop;
    const accessToken = req.query.token;
    try {
        const products = await getShopifyProducts(shopUrl, accessToken);
        res.json(products);
    } catch (error) {
        res.status(500).send('Error fetching products from Shopify');
    }
});

module.exports = router;
