import express from 'express';

import { AdminRoute, VendorRoute } from './routes';

const app = express();

app.use("/admin", AdminRoute)
app.use("/vendor", VendorRoute)

app.use("/", (req, res) => {
    return res.json("Hello from Food Order Backend!");
});

app.listen(8000, () => {
    console.log("App is running on port 8000");
});