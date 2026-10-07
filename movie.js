const prompt = require('prompt-sync')();

//Main function that allows the user to choose what they want to do
//This is called at least once in every function
function selector() {
    console.log("Movie Collection Manager")
    console.log("")
    console.log("1. Add Movie\n2. Remove Movie\n3. Search Movie\n4. Print All Movies\n5. Count Movies\n6. Display Movie in uppercase\n7. Exit");
    console.log("");
    let ask = Number(prompt("Enter Your Choice: "))
    if (!isNaN(ask) && ask <= 7) {
        if (ask === 1) {
            addMovie();
        } else if (ask === 2) {
            removeMovie();
        } else if (ask === 3) {
            searchMovie();
        } else if (ask === 4) {
            printMovies();
        } else if (ask === 5) {
            countMovies();
        } else if (ask === 6) {
            uppercaseMovies();
        } else if (ask === 7) {
            console.log("Thank you for using the Movie Collection Manager")
        }
    } else {
        selector();
    }
}

// Lets user answer a question until they answer with yes or no
// Also gets called at least once per function.
function ask(selection) {
    if (selection === "add") {
        let response = prompt("Would you like to add another Movie? (yes/no): ").toLowerCase();
        if (response === "yes") {
            return response;
        } else if (response === "no") {
            return response;
        } else {
            return ask("add");
        }
    } else if (selection === "remove") {
        let response = prompt("Would you like to remove another Movie? (yes/no): ").toLowerCase();
        if (response === "yes") {
            return response;
        } else if (response === "no") {
            return response;
        } else {
            return ask("remove");
        }
    } else if (selection === "removeTwo") {
        let response = prompt("Would you like to try again? (yes/no): ").toLowerCase();
        if (response === "yes") {
            return response;
        } else if (response === "no") {
            return response;
        } else {
            return ask("removeTwo");
        }
    } else if (selection === "searchMovies") {
        let response = prompt("Would you like to search for another Movie? (yes/no): ").toLowerCase();
        if (response === "yes") {
            return response;
        } else if (response === "no") {
            return response;
        } else {
            return ask("searchMovies");
        }
    } else if (selection === "allMovies") {
        let response = prompt("Would you like to go back? (yes/no): ").toLowerCase();
        if (response === "yes") {
            return response;
        } else if (response === "no") {
            return response;
        } else {
            return ask("allMovies");
        }
    } else if (selection === "countMovies") {
        let response = prompt("Would you like to go back? (yes/no): ").toLowerCase();
        if (response === "yes") {
            return response;
        } else if (response === "no") {
            return response;
        } else {
            return ask("countMovies");
        }
    } else if (selection === "uppercaseMovies") {
        let response = prompt("Would you like to go back? (yes/no): ").toLowerCase();
        if (response === "yes") {
            return response;
        } else if (response === "no") {
            return response;
        } else {
            return ask("uppercaseMovies");
        }
    }
}

function addMovie() {
    console.log(`Current Movies: ${movies.join(', ')}`);
    let newMovie = prompt("Enter New Movie: ").toLowerCase();
    movies.push(newMovie);
    console.log("Movie added Successfully");
    //The lines below are in every function asking if you want to call the function again
    let again = ask("add");
    if (again === "yes") {
        addMovie();
    } else if (again === "no") {
        selector();
    }
}

function removeMovie() {
    console.log(`Current Movies: ${movies.join(', ')}`);
    let remove = prompt("What movie would you like to remove: ").toLowerCase();
    if (movies.includes(remove)) {
        movies.splice(movies.indexOf(remove), 1);
        console.log(`New Movies List: ${movies.join(', ')}`);
        let again = ask("remove");
        if (again === "yes") {
            removeMovie();
        } else {
            selector();
        }
    } else {
        // These extra lines are so the user can try again if they made a mistake typing the movie name
        console.log("Movie does not exist");
        let again = ask("removeTwo");
        if (again === "yes") {
            removeMovie();
        } else {
            selector();
        }
    }
}

function searchMovie() {
    console.log(`Current Movies: ${movies.join(', ')}`);
    let find = prompt("Enter Movie title to search: ").toLowerCase();
    if (movies.includes(find)) {
        console.log(`Movie: \"${find}\" Found!`);
    } else {
        console.log("Movie not Found.")
    }
    let again = ask("searchMovies");
    if (again === "yes") {
        searchMovie();
    } else {
        selector();
    }
}

function printMovies() {
    //formatted allows the movies to output in a different way from the regular array
    let formatted = []
    for (let i = 0; i < movies.length; i++) {
        //This pushes the movies to output as: 1. movie1 2. movie2 3. movie3 etc...
        formatted.push(`${i + 1}. ${movies[i]}`);
    }
    //This pushes the movies to a new line and tabbed so they look like:
    /*
        1. movie1
        2. movie2
        3. movie3
        etc.
    */
    console.log("\t" + formatted.join("\n\t"));
    let again = ask("allMovies");
    if (again === "yes") {
        selector();
    } else {
        printMovies();
    }
}

function countMovies() {
    let amount = movies.length;
    console.log(`There are ${amount} Movies in your collection`);
    let again = ask("countMovies");
    if (again === "yes") {
        selector();
    } else {
        countMovies();
    }
}

function uppercaseMovies() {
    let question = prompt("What Movie would you like to see in uppercase: ").toUpperCase();
    console.log(question);
    let again = ask("uppercaseMovies");
    if (again === "yes") {
        selector();
    } else {
        uppercaseMovies();
    }
}

//creates movies array and calls main function.
var movies = []
selector();