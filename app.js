// ogMUXixqITk2lerg
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = require("./routes/book-routes");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/books", router);

// mongoose.connect("mongodb+srv://admin:pnRAU4kUZzS8WjiY@cluster0.ut3oc8b.mongodb.net/?retryWrites=true&w=majority").then(() => console.log("Connected to the Database")).then(() => {
//     app.listen(5000);
// }).catch((err) =>console.log(err));

mongoose
  .connect(
    "mongodb+srv://admin:ogMUXixqITk2lerg@cluster0.ut3oc8b.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to the Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
