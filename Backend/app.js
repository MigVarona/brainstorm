import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/", );
app.use("/marketplace", buyersRouter);
app.use("/newproduct", sellersRouter);