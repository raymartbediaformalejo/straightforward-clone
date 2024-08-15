const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

const corsOptions = require("./config/corsOptions");
const productsRoutes = require("./service/product/product.routes.js");
const categoryRoutes = require("./service/category/category.routes.js");
const variationRoutes = require("./service/variation/variation.routes.js");
const sizeRoutes = require("./service/size/size.routes.js");
const userRoutes = require("./service/user/user.routes.js");
const addressRoutes = require("./service/address/address.routes.js");
const authRoutes = require("./service/auth/auth.routes.js");

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`Server is now running at http://localhost:${PORT}`)
);

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use("/products", productsRoutes);
app.use("/category", categoryRoutes);
app.use("/variation", variationRoutes);
app.use("/size", sizeRoutes);
app.use("/user", userRoutes);
app.use("/address", addressRoutes);
app.use("/auth", authRoutes);
