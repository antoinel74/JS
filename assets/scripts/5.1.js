function askTVseries() {
  let name = prompt("What's your favourite TV show ?");
  let year = parseInt(prompt("What's the release year ?"));
  let castmember = prompt("Enter the castmembers separated by a coma :");
  let cast = castmember.split(",");
  let tvSeries = {
    name: name,
    year: year,
    cast: cast,
  };
  const json = JSON.stringify(tvSeries, null, 2);
  console.log(json);
}

askTVseries();

// Create a function containin an  object with 3 informations and return it
// Ask the user to prompt the information, cast member must be separated by a coma
// Display the object in json format within the console
