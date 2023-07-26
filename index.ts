import express from 'express';

const app = express();

app.use("/", (req, res) => {
    return res.json("Hello from Food Order Backend!");
});

app.listen(8000, () => {
    console.log("App is running on port 8000");
});