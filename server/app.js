
const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");
const app = express();

app.use(cors());
dotenv.config({ path: "./config.env" });
app.use(express.json());

app.use("/api/user", userRoutes);
app.use(require("./routes/route"));
require("./database/connection");

app.get("/", (req, res) => {
  res.json("Hello WORLD");
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is listening to the port http://localhost:${port}`);
});
