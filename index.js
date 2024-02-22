import express from 'express';
import productsRouter from './Backend/routes/productsRouter.js';
// import sellersRouter from './Backend/routes/sellersRouter.js';

import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT || 3030

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

/* app.use("/", ); */
app.use("/products", productsRouter);
// app.use("/newproduct", sellersRouter);

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT)
})