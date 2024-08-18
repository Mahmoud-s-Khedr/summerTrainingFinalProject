const express = require("express");
const ctrl = require("../controller/ctrl");
const apiRouter = express.Router();


apiRouter.post("/veiwctrl", ctrl.viewCtrl);
apiRouter.post("/addctrl", ctrl.addCtrl);
apiRouter.post("/deletectrl", ctrl.deleteCtrl);

module.exports = apiRouter