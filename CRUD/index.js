const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "./config/config.env" });

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json({ extended: true }));
app.use("/api/crud", require("./routes/crud.routes"));

const start = async () => {
  try {
    await mongoose.connect(process.env.mongooseURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });

    app.listen(PORT, () => {
      console.log(`Server has been started on port: ${PORT}...`);
    });
  } catch (error) {
    console.log("Server Error", error.message);
    process.exit(1);
  }
};

start();
