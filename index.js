const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("veiws"));

const pageRouter = require("./routing/routpages");
const apiRouter = require("./routing/api");

app.use(pageRouter);
app.use(apiRouter);




app.listen(3000, () => console.log("server is running on port 3000"));