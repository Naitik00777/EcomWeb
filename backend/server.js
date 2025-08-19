import express from "express";
import cors from "cors";
import 'dotenv/config';
// import cookieParser from "cookie-parser";
import connectDB from './config/mongodb.js'
import connectCloudinary from "./config/cloudinary.js";
// import authRouter from './routes/authRoutes.js'
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// APP Config
const app = express()
const port = process.env.PORT || 4000
connectDB();
connectCloudinary();

// Middlewares
app.use(express.json());
app.use(cors());
// app.use(cookieParser());

// API Endpoints
app.get("/", (req, res) => res.send("API Working"))
// app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

app.listen(port, () => console.log(`Server started on PORT:${port}`))
