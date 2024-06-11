const express = require("express");
const app = express();
const cors = require("cors");
const authRoutes = require("./src/routes/authRoutes");
const userProfileRoutes = require("./src/routes/userProfileRoutes");
const addressRoutes = require("./src/routes/addressRoutes");
const userRoutes = require("./src/routes/userRoutes");
const product = require("./src/routes/productRoutes");
const stokProduct = require("./src/routes/stokProductRoutes");
const store = require("./src/routes/storeRoutes");
const transaction = require("./src/routes/transactionRoutes");
const shipping = require("./src/routes/shippingRoutes");
const cart = require("./src/routes/cartRoutes");
const payment = require("./src/routes/paymentRoutes");
const discount = require("./src/routes/discountRoutes");
const productsImage = require("./src/routes/productImageRoutes");
const rajaongkir = require("./src/routes/RAJAONGKIT");

require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/userProfiles", userProfileRoutes);
app.use("/addresses", addressRoutes);
app.use("/products", product);
app.use("/stokProducts", stokProduct);
app.use("/stores", store);
app.use("/transactions", transaction);
app.use("/shipping", shipping);
app.use("/carts", cart);
app.use("/payments", payment);
app.use("/discounts", discount);
app.use("/rajaongkir", rajaongkir);
app.use("/productImages", productsImage);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
