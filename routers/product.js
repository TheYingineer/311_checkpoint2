const express = require('express')
const productController = require('../controllers/product')
// const { checkJwt } = require('../middleware')
const router = express.Router()

router.get('/product', productController.getAllProduct)

router.get('/product/:id', productController.getProductById)

router.post('/product', productController.createProduct)

router.put('/product/:id', productController.updateProductById)

router.delete('/product/:id', productController.deleteProductById)

module.exports = router
