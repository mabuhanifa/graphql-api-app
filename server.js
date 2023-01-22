const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
app.use(express.json());
app.use(cors());
const data = require("./mock.json");

app.get("/", function (req, res) {
    res.send(data)
});

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
