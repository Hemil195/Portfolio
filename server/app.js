require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
require("./db/conn");
const router = require("./Routes/router");
const port = 6002;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
