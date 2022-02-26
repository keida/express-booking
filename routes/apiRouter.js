var express = require('express');
var router = express.Router();
const categoryController = require('../controllers/categories');
const checkoutController = require('../controllers/checkouts');
const orderController = require('../controllers/orders.js');
const productController = require('../controllers/products');
const roleController = require('../controllers/roles');
const storageController = require('../controllers/storages');
const userController = require('../controllers/users');
/* GET categories listing. */

router.get('/category', categoryController.getAllCategories);
router.post('/create-category', categoryController.createCategories);
router.get('/find-category/:id', categoryController.getCategory);
router.post('/update-category/:id', categoryController.updateCategory);
router.post('/delete-category/:id', categoryController.deleteCategory);

/* GET checkouts listing. */

router.get('/checkout', checkoutController.getAllCheckouts);
router.post('/create-checkout', checkoutController.createCheckouts);

/* GET orders listing. */

router.get('/order', orderController.getAllOrders);
router.post('/create-order', orderController.createOrders);

/* GET products listing. */

router.get('/product', productController.getAllProducts);
router.post('/create-product', productController.createProducts);

/* GET roles listing. */

router.get('/role', roleController.getAllRoles);
router.post('/create-role', roleController.createRoles);

/* GET storages listing. */

router.get('/storage', storageController.getAllStorages);
router.post('/create-storage', storageController.createStorages);

/* GET users listing. */

router.get('/user', userController.getAllUsers);
router.post('/create-user', userController.createUsers);

module.exports = router;
