const express = require("express");
const path = require("path");

const app = express();

// serve everything in the repo
app.use(express.static(__dirname));

// force homepage to your file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "Game.html"));
});

// important for Render
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});