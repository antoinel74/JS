function pickLearner(inputAr, n) {
  for (let i = inputAr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [inputAr[i], inputAr[j]] = [inputAr[j], inputAr[i]]; // Switching index with random j generated below
  }
  return inputAr.slice(0, n);
}

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

let n = Math.floor(Math.random() * inputAr.length) + 1; // Randomize a number between 1 and the max number of element in the InputAr Array
console.log("Here are the " + n + " learners selected :");
const randomLearners = pickLearner(inputAr, n);
console.log(randomLearners);
