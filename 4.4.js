let inputAr = [
  "Alexandre VDW",
  "Alexandre Vens",
  "Antoine Lansman",
  "Bastien Venturi",
  "Carole Gérard",
  "Dorian VDW",
  "Elisabeth Leyders",
  "Elodie Ali",
  "Justin Michel",
  "Justine Frigo",
  "Justine Leleu",
  "Kimi Lefort",
  "Layla",
  "Liwdine Careme",
  "Lucas Beuloie",
  "Marie Tara",
  "Mathias Barbier",
  "Okly",
  "Pierre Marien",
  "Robin Piot",
  "Rosalie Bougard",
  "Stephane Comblez",
  "Tim Desmet",
  "Toms",
  "Valentin Lefort",
  "Virgine Dourson",
];

let n = Math.floor(Math.random() * inputAr.length) + 1;

function pickLearner(inputAr, n) {
  console.log(inputAr[Math.floor(Math.random() * inputAr.length)]);
}
pickLearner(inputAr, n);
