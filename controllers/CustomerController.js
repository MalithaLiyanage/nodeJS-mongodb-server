const Customer = require('../models/Customer')

//Show the list of Customers
const Show_All_Customers = (req, res, next) => {
    Customer.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch (error => {
        res.json({
            message: "An Error Occured Showing All!"
        })
    })
}

// Show Customer By ID
const Show_Customer_by_ID = (req, res, next) => {
    let customerID = req.body.customerID
    Customer.findById(customerID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch (error => {
        res.json({
            message: "An error Ocurred Showing by ID!"
        })
        
    })
}

// Add Customer
const Add_Customer = (req, res, next) => {
    let customer = new Customer({
        customer_id: req.body.customer_id,
        customer_name: req.body.customer_name,
        customer_email: req.body.customer_email,
        customer_mobile: req.body.customer_mobile

    })

    if(req.file){
        customer.customer_image = req.file.path
    }
    customer.save()
    .then(response => {
        res.json({
            message: "Employee Added Successfully"
        })
        
    })
    .catch (response => {
        res.json({
            message: "An Error Occured Adding!"
        })
    })
}

// Update an Customer
const Update_Customer = (req, res, next) => {
    let customerID = req.body.customerID

    let updatedData = {
        customer_id: req.body.customer_id,
        customer_name: req.body.customer_name,
        customer_email: req.body.customer_email,
        customer_mobile: req.body.customer_mobile
    }

    Customer.findByIdAndUpdate(customerID, {$set: updatedData})
    .then (resonse => {
        res.json({
            message: "Customer Updated Successfully"
        })
    })
    .catch (response => {
        res.json ({
            message: "An Error Occured Updating!"
        })
    })
}

// Delete a Customer
const Delete_Customer = (req, res, next) => {
    let customerID = req.body.customerID
    Customer.findByIdAndRemove(customerID)
    .then(resonse => {
        res.json({
            message: "Customer Deleted Successfully"
        })
    })
    .catch(resonse => {
        res.json({
            message: "An error Occured Deleting!"
        })
    })
}

module.exports = {
    Show_All_Customers, Show_Customer_by_ID, Add_Customer, Update_Customer, Delete_Customer
}