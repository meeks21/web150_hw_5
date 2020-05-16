



var scores = [];

while(true){
    var input = prompt("Enter test score \r\n" + "Or enter 999 to end entries");

    if(input === 999 || input === null){
        break;
        document.write("Average score is ");
        
    }
    scores.push(parseInt(input));
    console.log(scores);


}
