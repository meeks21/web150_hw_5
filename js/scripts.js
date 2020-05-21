


// Creates variables
var sum = 0;
var timesRun = 0;
var scores = 0;

// Creates a function
averageScore();

function averageScore(){
    // places a while loop inside of the function that collects users input and stores it in the scores variable. The loop ends when 999 is entered
    while(scores !== 999) {
        scores = parseInt(prompt("Enter test score\n" + "Or enter 999 to end entries\n")); /*parseInt function converts the input which will be viewed as a strings into intergers */

        sum += scores;  /*plus equals adds each score that is entered to the previous score*/

        timesRun++;    /*Increments the timesRun variable by one each time the loop runs */
        
    }
}

var average = (sum - 999)/(timesRun - 1); /*Must subtract the last entry of 999 from the sum total and subtract 1 from the timesRun variable because we dont want to include the last entry */
alert("Average score is " + average);

