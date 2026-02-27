const express = require("express");
const app = express();
const port = 3000;

//^ Rotta principale
app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

//^ Avvio del server
app.listen(port, () => {
  console.log(`Server avviato --> http://localhost:${port}`);
});
