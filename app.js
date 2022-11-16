const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const dogController = require("./Controllers/DogController");
const catController = require("./Controllers/CatController");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));

app.get("/", (req, res) => {
  res.send({ message: "server running" });
});

app.get("/dogs", dogController.getDogs);
app.get("/cats", catController.getCats);

app.listen(PORT, () => console.log(`working on port ${PORT}`));
