const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
require("dotenv").config();

const { setupWebSocket } = require("./services/setupWebSocket");

const connectDb = require('./config/connectDB')
connectDb()

const user = require("./routes/userRoute.js");
const seller = require("./routes/sellerRoute.js");
const product = require("./routes/productRoute.js");
const review = require("./routes/reviewRoute.js");
const cart = require("./routes/cartRoute.js");
// const otp = require("./routes/otpRoute.js");
const order = require("./routes/orderRoute.js");
const faq = require("./routes/faqsRoute.js");
const graph = require("./routes/graphRoute.js")

const PORT = 5000 || process.env.PORT;
const app = express();

app.use(cors());

app.use(express.json());

const server = http.createServer(app);
const io = new Server(server);

setupWebSocket(io);

// Middleware to set CORS headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', `${process.env.FRONTEND_URL}`); // Allow specific origin
  res.header('Access-Control-Allow-Credentials', 'true'); // Allow credentials
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200); // Handle preflight requests
  }
  
  next();
});

app.use("/api/users", user);
app.use("/api/sellers", seller);
app.use("/api/product", product);
app.use("/review", review);
app.use("/cart", cart);
// app.use("/otp", otp);
app.use("/order", order);
app.use("/faqs", faq);
app.use("/graph", graph)


server.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
