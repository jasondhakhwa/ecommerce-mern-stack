const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
// const multer = require("multer")
const morgan = require("morgan");

const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");
const cartRouter = require("./routes/cart");

//backend frontend connection was blocked so cors is used
const cors = require("cors");
app.use(cors()) //and this

dotenv.config()
const PORT = 5000;

mongoose.connect(
    process.env.MONGO_URL
).then(() => {
    console.log("Data Base Connected")
}).catch((err) => {
    console.log(err);
})

app.get('/api/test', () => {
    console.log("Check")
})

//middlewares
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use(express.json());
app.use('/api/user/', userRouter);
app.use('/api/auth/', authRouter);
app.use('/api/product/', productRouter);
app.use('/api/cart/', cartRouter);

app.listen(process.env.PORT || PORT, () => {
    console.log("Backend Server Started: PORT " + PORT);
})