const express = require ("express")
const router = express.Router()

const CustomerController = require ("../controllers/CustomerController")
const upload = require("../middleware/upload")
const authenticate = require("../middleware/authenticate")


router.get('/', authenticate, CustomerController.Show_All_Customers)
router.get('/show_by_id', authenticate, CustomerController.Show_Customer_by_ID)
router.post('/add', authenticate, upload.single('customer_image'), CustomerController.Add_Customer)
router.post('/update', authenticate, CustomerController.Update_Customer)
router.post('/delete', authenticate, CustomerController.Delete_Customer)

module.exports = router