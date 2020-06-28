function banner(n) {
    return "######### Challenge " + n + " #########";
}

console.log(banner(1));

let prntTo5 = 1

while (prntTo5 <= 5) {
    console.log(prntTo5);
    prntTo5 = prntTo5 + 1;
}

prntTo5;

console.log(banner(2));


function toSix(choice) {
    let one = 1;    
    while (one <= choice) {
        console.log(one);
        one = one + 1;
    }
}

toSix(6);

console.log(banner(3));

function includeBoth(num1, num2) {
        while (num1 <= num2) {
            console.log(num1);
            num1 = num1 + 1;
        }
}

includeBoth(-2, 1);

console.log(banner(4));

function oddEven(given) {
    let num3 = 1;

    while (num3 <= given) {
    if (num3 % 2 === 0) {
      console.log(num3 + " Even");
    }  else {
      console.log(num3 + " Odd");
    }
    
    num3 = num3 +1;
}
}
 
oddEven(5);

console.log(banner(5));

function evenOnly(notOdd) {
    let num = 1;

    while (num <= notOdd) {
        if (num % 2 === 0) {
            console.log(num);
        }
        num = num + 1;
    }
}

evenOnly(11);

console.log(banner(6));

let goingDown = 10;

while (goingDown >= 1) {
    console.log(goingDown);
    goingDown = goingDown - 1;
}

goingDown;

console.log(banner(7));

let tenDown = 10;

while (tenDown >= 1) {
    console.log(tenDown);
    tenDown = tenDown - 1;
}

console.log("Blast off!")

tenDown;

console.log(banner(8));

function countDownThrees(start) {
    let param = 1;
    let num = start;
    while (param <= num) {
        console.log(num);
        num = num - 3;
    }
}

countDownThrees(20);

console.log(banner(9));

function helloNumbered() {
    let message = 1;
    while (message <= 7) {
        console.log(message + ". Hello!");
        message = message + 1;
    }
}

helloNumbered();

console.log(banner(10));

function sayWhat(phrase) {
    let num = 1;
    while (num <= 7) {
        console.log(num + ". " + phrase);
        num = num + 1;
    }
}

sayWhat("Ohh snap!");

console.log(banner(11));

function repeatPhrase(words, repeatCount) {
    let num = 1;
    while (num <= repeatCount) {
        console.log(words);
        num = num + 1;
    }
}

repeatPhrase("Good-bye", 4);
repeatPhrase("Get out!", 6);

console.log(banner(12));

function character(letterEachLine) {
    let num = 0
    while (num < letterEachLine.length) {
        console.log(letterEachLine[num]);
        num = num + 1;
    }
}

character("think");

console.log(banner(13));

function other(skipLetter) {
    let num = 1;
    while (num < skipLetter.length) {
        console.log(skipLetter[num]);
        num = num + 2;
    }
}

other("Nobody");

console.log(banner(14));

function reverse(str) {
    let num = str.length;
    while (num >= 0) {
        console.log(str[num])
        num = num - 1;
    }
}

reverse("Mesuara");