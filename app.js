// ogMUXixqITk2lerg
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = require("./routes/book-routes");
const cors = require("cors");

const path = require("path");
require('dotenv').config({path: './config.env'});



app.use(express.json());
app.use(cors());
app.use("/books", router);

// mongoose.connect("mongodb+srv://admin:pnRAU4kUZzS8WjiY@cluster0.ut3oc8b.mongodb.net/?retryWrites=true&w=majority").then(() => console.log("Connected to the Database")).then(() => {
//     app.listen(5000);
// }).catch((err) =>console.log(err));



const port = process.env.PORT || 5000;
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname + "/client/build/index.html"),
      function (err) {
        if (err) {
          console.log(err);
        }
      }
    );
  });
}
mongoose
  .connect(
   process.env.URL
  )
  .then(() => console.log("Connected to the Database"))
  .then(() => {
    app.listen(port);
  })
  .catch((err) => console.log(err));
