const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5173;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.post("/signup", function (req, res) {
    const data = req.body; // Use req.body to capture the request body
    console.log(data); 3
    res.send("Signup route"); // Add a response to avoid hanging requests
});

app.listen(PORT, () => {
    console.log(`Running on port number ${PORT}`);
});