//Console Calculator

var resultArr = [];

function cOwlc(num1, num2, operator) {

 
    var owlEmoji= `
,____,
[  O.0]
/)__)
--''--''--`

    var expression;


    let results;
    let firstInt;
    let secondInt;
  

    if (Number.isNaN(parseInt(num1)) == true) {
      
        num1 = num1.toUpperCase()

        switch (num1) {
           
            case "ZERO": firstInt = 0;
            break;

            case "ONE": firstInt = 1;
                break;

            case "TWO": firstInt = 2;
                break;

            case "THREE": firstInt = 3;
                break;

            case "FOUR": firstInt = 4;
                break;

            case "FIVE": firstInt = 5;
                break;

            case "SIX": firstInt = 6;
                break;

            case "SEVEN": firstInt = 7;
                break;

            case "EIGHT": firstInt = 8;
                break;

            case "NINE": firstInt = 9;
                break;
        }
        // console.log(firstInt)
        // console.log(num1)
    }

    else {
        firstInt = parseInt(num1)
    }


    secondInt = parseInt(num2)
    if (Number.isNaN(parseInt(num2)) == true) {
        num2 = num2.toUpperCase()
        switch (num2) {

            case "ZERO": secondInt = 0;
            break;
            case "ONE": secondInt = 1;
                break;

            case "TWO": secondInt = 2;
                break;

            case "THREE": secondInt = 3;
                break;

            case "FOUR": secondInt = 4;
                break;

            case "FIVE": secondInt = 5;
                break;

            case "SIX": secondInt = 6;
                break;

            case "SEVEN": secondInt = 7;
                break;

            case "EIGHT": secondInt = 8;
                break;

            case "NINE": secondInt = 9;
                break;
        }
      
    }

    else {
        secondInt = parseInt(num2)
    }
  


    if (operator == '+') {


        expression = firstInt + secondInt

        results = "The sum of" + " " + firstInt + " " + "owls" + " " + "and" + " " + secondInt + " " + "owls" + " " + "is" + " " + expression + " " + "owls.";


        console.log(results + owlEmoji)


    }

    else if (operator == '-') {


        expression = firstInt - secondInt

        results = "The difference of" + " " + firstInt + " " + "owls" + " "+ "and" + " " + secondInt + " " + "owls " + " " +  "is" + " " + expression + " " + "owls."


        console.log(results + owlEmoji)

    }

    else if (operator == '*') {

        expression = firstInt * secondInt

        results = "The product of" + " " + firstInt + " " + " " + "owls" + " " + "and" + " " + secondInt + " " + "owls" + " " + "is" + " " + expression + " " + "owls."



        console.log(results + owlEmoji)
    }

    else if (operator == '/') {

        expression = firstInt / secondInt

        expression = expression.toFixed(2)

        results = "The results of" + " " + firstInt + " " + "owls" + " " + "divided by" + " " + secondInt +" " + "owls" + " " + "is" + " " + expression + " " + "owls."

        console.log(results = owlEmoji)
    }

    else if (operator == '**'){

        expression = firstInt ** secondInt

        results = "The result of" + " "  + firstInt + " " + "owls" + " " + "and" + " " + secondInt + " " + "is" +" " + expression + " " + "owls."

        console.log(results + owlEmoji)
    }

    else if(operator == '%'){

        expression = firstInt % secondInt
        expression = expression.toFixed(2)

        results = "The remainder of" + " "  + firstInt + " " + "owls" + " " + "and" + " " + secondInt + " " + "owls" + " " + "is" +" " + expression +" " + "owls."
        
        console.log(results + owlEmoji)
    }

    else {
        return "No. Try again" + owlEmoji
    }

    resultArr.push(results)
    if (resultArr.length > 5) {
        resultArr.shift()
        
        
      

    }

    return resultArr
    
    
}



cOwlc("three", "four", '+')
cOwlc("five", "two", '-')
// console.log(cOwlc("three", "three", '*'))
cOwlc(3, 3, '/')
cOwlc("five", 3, '+');
cOwlc("six", 4, '+')
// console.log(cOwlc(3, "two", '-'))
cOwlc("four", 5, '*');
cOwlc("whatever", 4, "-")
// console.log(cOwlc(6, "hello", "/"))
cOwlc(5, "thRee", '*')
cOwlc(3, "siX", '+')
cOwlc(3,"four",'+')
console.log(cOwlc('ZeRo',2,'+'))
console.log(cOwlc(3,3,'**'))
console.log(cOwlc(30,5,'%'))


// var owlEmoji= `
// ,____,
// [  O.0]
// /)__)
// --''--''--`
// console.log(owlEmoji)


// ,____,
// [  O.0]
// /)__)
// --''--''--`