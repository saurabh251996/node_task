const express=require('express')
const router=express.Router()
const productController=require('../controller/product')
const categoryController=require('../controller/categories')



router.post('/addProduct',productController.addProduct)
router.get('/getProduct',productController.getProduct)


//get category

router.get('/getProductByCategory',categoryController.getData)
router.post('/addCategory',categoryController.addCategory)

module.exports = router ;
