function getday() {
    let dayoftheweek = prompt("Choose a number between 1 and 7");

    if (dayoftheweek ==1 ) {
        alert("Today is monday");
    }
    else if (dayoftheweek ==2 ) {
        alert("Today is tuesday");
    }
    else if (dayoftheweek ==3 ) {
        alert("Today is wednesday");
    }
    else if (dayoftheweek ==4 ) {
        alert("Today is thursday");
    }
    else if (dayoftheweek ==5 ) {
        alert("Today is friday");
    }
    else if (dayoftheweek ==6)  {
        alert("It's finally saturday !");
    }
    else if (dayoftheweek ==7)  {
        alert("It's already sunday !");
    }
    else {
        confirm("Please answer yes or no!");
        getday(); 
    }
}

getday();

