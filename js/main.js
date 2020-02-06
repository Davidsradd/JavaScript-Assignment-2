//switch

var greatestBasketballPlayer = prompt ("What is the full name of the greatest basketball player of all time?");

switch(greatestBasketballPlayer){
    case "Kobe Bryant":
    alert("You're Right! Kobe Bryant is the GREATEST basketball player of all Time!");
    break;

    case "Micheal Jordan":
    alert("Not quite, good guess though.");
    break;

    default:
    alert("Not even close buddy.");
}

//create function

function display(name)
{
    alert(" Hello " + name);
}

//call function /pass info into function
display("Rudy");
display("David");

//return data from a function

function subtractNumbers (a, b){
    var subtractionResult= a -b;
    return subtractionResult;
}

var subtractNumbers2= subtractNumbers(28,4);
alert(subtractNumbers2);
