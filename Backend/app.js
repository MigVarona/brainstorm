import express from 'express';
import buyersRouter from './routes/buyersRouter.js';
import sellersRouter from './routes/sellersRouter.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/", );
app.use("/marketplace", buyersRouter);
app.use("/newproduct", sellersRouter);

app.listen(8080, () => {
    console.log('Server is running on port 8080')
})