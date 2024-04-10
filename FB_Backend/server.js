require("./config/connectDB.js");
const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
require("dotenv").config();

// const { setupWebSocket } = require("./services/setupWebSocket");

const user = require("./routes/userRoute.js");
const seller = require("./routes/sellerRoute.js");
// const product = require("./routes/productRoute.js");
// const review = require("./routes/reviewRoute.js");
// const cart = require("./routes/cartRoute.js");
// const otp = require("./routes/otpRoute.js");
// const order = require("./routes/orderRoute.js");
// const faq = require("./routes/faqRoute.js");
// const graph = require("./routes/graphRoute.js")

const PORT = 8080;
const app = express();

app.use(cors());

app.use(express.json());

const server = http.createServer(app);
const io = new Server(server);

// setupWebSocket(io);

app.use("/api/users", user);
app.use("/api/sellers", seller);
// app.use("/product", product);
// app.use("/review", review);
// app.use("/cart", cart);
// app.use("/otp", otp);
// app.use("/order", order);
// app.use("/faq", faq);
// app.use("/graph", graph)


server.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
