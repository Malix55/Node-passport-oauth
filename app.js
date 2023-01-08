const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();

const PORT = 5000;

//set view engine
app.use(expressLayouts);
app.set("view engine", "ejs");

//routes
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/user"));

app.listen(PORT, () => {
  console.log(`server running : ${PORT}`);
});
