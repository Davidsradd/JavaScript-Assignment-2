//switch

var greatestBasketballPlayer = prompt ("Who is the greatest basketball player of all time?");

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
    return
}

//call function /pass info into function
display("Rudy");
display("David");

//return data from a function

function setup(){
    var inches = feetToinches(36);
}

function feetToinches(feet){
    var inches = feet * 12;
    return inches;
}
