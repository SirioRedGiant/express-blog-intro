const express = require("express");
const app = express();
const port = 3000;

const posts = [
  {
    titolo: "Il mio primo viaggio",
    contenuto: "Descrizione del mio fantastico viaggio...",
    immagine: "/img/junglaCinese.jpg",
    tags: ["viaggi", "natura", "relax"],
  },
  {
    titolo: "Ricetta Cassoeula",
    contenuto: "stufato di verze e parti del maiale",
    immagine: "/img/cassoeula.jpg",
    tags: ["cucina", "italia", "food"],
  },
  {
    titolo: "Guida a Node.js",
    contenuto: "Impariamo come costruire un server da zero.",
    immagine: "/img/node.jpg",
    tags: ["programmazione", "backend", "js"],
  },
  {
    titolo: "Allenamento Mattutino",
    contenuto: "Perché svegliarsi presto fa bene al corpo(ma non alla mente).",
    immagine: "/img/fitness.jpg",
    tags: ["sport", "salute"],
  },
  {
    titolo: "I migliori vieogiochi che usciranno nel 2026",
    contenuto:
      "Lista della top 10 videogames secondo il noto recensore PincoPallo",
    immagine: "/img/gamesCollection.jpg",
    tags: ["game", "hobbie"],
  },
];

//^ Middleware --> asset statici
app.use(express.static("public"));

//! --- ROTTE ---

//^ Rotta principale
app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

//^ Rotta per la Bacheca
app.get("/bacheca", (req, res) => {
  res.json({
    posts: posts,
  });
});

//^ Avvio del server
app.listen(port, () => {
  console.log(`Server avviato --> http://localhost:${port}`);
});
