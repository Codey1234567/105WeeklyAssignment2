const prompt = require('prompt-sync')();

//main call function for the whole program
function selector() {
    console.log("Student Grade Manager")
    console.log("")
    console.log("1. Add Grade\n2. Remove Grade\n3. Calculate Average\n4. Find Highest Grade\n5. Print All Grades\n6. Exit");
    console.log("");
    let ask = Number(prompt("Enter Your Choice: "))
    if (!isNaN(ask) && ask <= 6) {
        if (ask === 1) {
            addGrade();
        } else if (ask === 2) {
            removeGrade();
        } else if (ask === 3) {
            calcAverage();
        } else if (ask === 4) {
            showHighest();
        } else if (ask === 5) {
            showAllGrades();
        } else if (ask === 6) {
            console.log("Thank you for using the Student Grade Manager");
        }
    } else {
        selector();
    }
}

//Used at least once in each function to allow user to keep using the program
function ask(selection) {
    if (selection === "add") {
        let response = prompt("Would you like to add another grade? (yes/no): ").toLowerCase();
        if (response === "yes") {
            return response;
        } else if (response === "no") {
            return response;
        } else {
            return ask("add");
        }
    } else if (selection === "remove") {
        let response = prompt("Would you like to remove another grade? (yes/no): ").toLowerCase();
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
    } else if (selection === "highest") {
        let response = prompt("Would you like to go back? (yes/no): ").toLowerCase();
        if (response === "yes") {
            return response;
        } else if (response === "no") {
            return response;
        } else {
            return ask("highest");
        }
    } else if (selection === "allGrades") {
        let response = prompt("Would you like to go back? (yes/no): ").toLowerCase();
        if (response === "yes") {
            return response;
        } else if (response === "no") {
            return response;
        } else {
            return ask("allGrades");
        }
    }
}

function addGrade() {
    console.log(`Current Grades: ${grades.join(', ')}`);
    let newGrade = Number(prompt("Enter New Grade: "));
    if (newGrade >= 0 && newGrade <= 100) {
        grades.push(newGrade);
        //puts a space between each item in the array
        console.log(`Updated Grades: ${grades.join(', ')}`)
    } else {
        console.log("Must be a number between 0-100");
        addGrade();
    }
    //these lines used in each function to call the ask function
    let again = ask("add");
    if (again === "yes") {
        addGrade();
    } else if (again === "no") {
        selector();
    }
}

function removeGrade() {
    console.log(`Current Grades: ${grades.join(', ')}`);
    let remove = Number(prompt("What grade would you like to remove: "));
    if (!isNaN(remove)) {
        if (grades.includes(remove)) {
            grades.splice(grades.indexOf(remove), 1);
            console.log(`new grades list: ${grades.join(', ')}`);
            let again = ask("remove");
            if (again === "yes") {
                removeGrade();
            } else {
                selector();
            }
        } else {
            //calls the ask function if the user tries to remove a grade that isn't in the array.
            console.log("Grade does not exist");
            let again = ask("removeTwo");
            if (again === "yes") {
                removeGrade();
            } else {
                selector();
            }
        }
    }
}

function calcAverage() {
    console.log(`Current Grades: ${grades.join(', ')}`);
    let totalSum = 0;
    //adds all the items in the array together
    for (let i = 0; i < grades.length; i++) {
        totalSum+=grades[i];
    }
    //find the average using basic formula
    let average = totalSum / grades.length;
    console.log(`Average: ${average}`);
}

function showHighest() {
    let highest = 0;
    for (let i = 0; i < grades.length; i++) {
        //allows the highest variable to become the highest item in the array.
        if (grades[i] > highest) {
            highest = grades[i];
        }
    }
    console.log(`Current Grades: ${grades.join(', ')}`);
    console.log(`Highest Grade: ${highest}`);
    let again = ask("highest");
    if (again === "yes") {
        selector();
    } else {
        showHighest();
    }
}

function showAllGrades() {
    let formatted = []
    for (let i = 0; i < grades.length; i++) {
        //formats all grades to: 1. grade1 2. grade2 3. grade3 etc...
        formatted.push(`${i + 1}. ${grades[i]}`);
    }
    //formats them to tab and go on a new line to show:
    /*
        1. grade1
        2. grade2
        3. grade3
        etc...
    */
    console.log("\t" + formatted.join("\n\t"));
    let again = ask("allGrades");
    if (again === "yes") {
        selector();
    } else {
        showAllGrades();
    }
}

//starts the program by creating the grades variable and calling the selector function
var grades = [ ]
selector();