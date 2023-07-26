import express from 'express';
import bodyParser from 'body-parser';
import mongoose, { ConnectOptions } from 'mongoose';

import { AdminRoute, VendorRoute } from './routes';
import { MONGO_URL } from './config';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/admin", AdminRoute);
app.use("/vendor", VendorRoute);

app.use("/", (req, res) => {
    return res.json("Hello from Food Order Backend!");
});

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
} as ConnectOptions);

app.listen(8000, () => {
    console.log("App is running on port 8000");
});