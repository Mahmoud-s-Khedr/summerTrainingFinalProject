const express = require("express");
const pageRouter = express.Router();
const path = require("path");

pageRouter.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../veiws/index.html"));
});

pageRouter.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "../veiws/index.html"));
});

pageRouter.get("/add", (req, res) => {
    res.sendFile(path.join(__dirname, "../veiws/add.html"));
});

pageRouter.get("/view", (req, res) => {
    res.sendFile(path.join(__dirname, "../veiws/view.html"));
});

module.exports = pageRouter;