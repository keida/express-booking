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
router.post('/create-checkout', checkoutController.createCheckout);
+router.get('/find-checkout/:id', checkoutController.getCheckout);
router.post('/update-checkout/:id', checkoutController.updateCheckout);
router.post('/delete-checkout/:id', checkoutController.deleteCheckout);

/* GET orders listing. */

router.get('/order', orderController.getAllOrders);
router.post('/create-order', orderController.createOrder);
router.get('/find-order/:id', orderController.getOrder);
router.post('/update-order/:id', orderController.updateOrder);
router.post('/delete-order/:id', orderController.deleteOrder);

/* GET products listing. */

router.get('/product', productController.getAllProducts);
router.post('/create-product', productController.createProduct);
router.get('/find-product/:id', productController.getProduct);
router.post('/update-product/:id', productController.updateProduct);
router.post('/delete-product/:id', productController.deleteProduct);

/* GET roles listing. */

router.get('/role', roleController.getAllRoles);
router.post('/create-role', roleController.createRole);
router.get('/find-role/:id', roleController.getRole);
router.post('/update-role/:id', roleController.updateRole);
router.post('/delete-role/:id', roleController.deleteRole);

/* GET storages listing. */

router.get('/storage', storageController.getAllStorages);
router.post('/create-storage', storageController.createStorage);
router.get('/find-storage/:id', storageController.getStorage);
router.post('/update-storage/:id', storageController.updateStorage);
router.post('/delete-storage/:id', storageController.deleteRole);

/* GET users listing. */

router.get('/user', userController.getAllUsers);
router.post('/create-user', userController.createUser);
router.get('/find-user/:id', userController.getUser);
router.post('/update-user/:id', userController.updateUser);
router.post('/delete-user/:id', userController.deleteUser);

module.exports = router;
