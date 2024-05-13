const express = require("express");
const app = express();
const cors = require("cors");

// MIDDLEWARE
app.use(cors());
app.use(express.json());

app.listen(5000, () => {
  console.log("Le serveur a démarré sur le port 5000");
});
