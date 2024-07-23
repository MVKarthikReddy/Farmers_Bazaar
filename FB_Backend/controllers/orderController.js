const Order = require("../models/orderSchema");
const { decreaseProductStocks } = require("../services/productServices");
const Razorpay = require('razorpay')

// payment For Order 

const payForOrder = async (req,res) => {

  try{
    const payment = new Razorpay({ 
      key_id: process.env.RAZOR_PAY_KEY_ID, 
      key_secret: process.env.RAZOR_PAY_KEY_SECRET
    })

    const options = req.body
  
    const order = await payment.orders.create(options)

    if(!order){
      return res.status(500).send("Something went wrong")
    }

    res.json(order)


  }catch (error) {
    res.status(500).send("Something went wrong!");
    console.log(error);
  }
}

// Add Order
const addOrder = async (req, res) => {
  try {
    let data = Order(req.body);
    // console.log(data)

    let result = await data.save({ writeConcern: { w: "majority" } });

    await decreaseProductStocks(data.productId, data.orderQty);
    res
      .status(200)
      .send({ message: `Order for ${data.name} successfully received` });
  } catch (error) {
    res.status(500).send("Something went wrong!");
    console.log(error);
  }
};

// Retrieve Order by Seller ID
const showOrdersBySeller = async (req, res) => {
  try {
    let data = await Order.find({ sellerId: req.params.sellerId });
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send("Something went wrong!");
    console.log(error);
  }
};

module.exports = {
  addOrder,
  showOrdersBySeller,
  payForOrder,
};
