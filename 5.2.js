function shuffleCast(cast) {
  for (let i = cast.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cast[i], cast[j]] = [cast[j], cast[i]];
  }
}
// Function to shuffle the cast using the Fisher Yates Method (index switching)

function randomizeCast(tvSeries) {
  const cast = tvSeries.cast;
  shuffleCast(cast);
}
// Call the shuffle on the wanted array

let name = prompt("What's your favourite TV show ?");
let year = parseInt(prompt("What's the release year ?"));
let castmember = prompt("Enter the castmembers separated by a coma :");
let cast = castmember.split(",");
// Ask the user to prompt the information, cast member must be separated by a coma

let tvSeries = {
  name: name,
  year: year,
  cast: cast,
};
// Create an  object containing 3 informations

// Display the original info + the randomized list
console.log("Original cast : " + tvSeries.cast);
randomizeCast(tvSeries);
console.log("Randomized cast :" + tvSeries.cast);
