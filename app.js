const express = require("express");
const app = express();

app.use(express.static("views"));

app.get("/api", function (req, res) {
    res.send([1, 2, 3])
})

module.exports = app;