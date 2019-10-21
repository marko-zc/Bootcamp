console.log("PRINTING ALL NUMBERS BETWEEN -10 and 19");
var num1 = -10;

while (num1 <= 19) {
    console.log(num1);
    num1++;
}

console.log("PRINTING ALL EVEN NUMBERS BETWEEN 10 and 40");
var num2 = 10;

while (num2 <= 40) {
    console.log(num2);
    num2 += 2;
}
console.log("PRINTING ALL ODD NUMBERS BETWEEN 300 and 333");
var num3 = 300;

while (num3 <= 333) {
    if (num3 % 2 !== 0) {
        console.log(num3);
    }
    num3+=1;
}

console.log("PRINTING ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 and 50");
var num4 = 5;
while (num4 <= 50) {
    if (num4 % 5 === 0 && num4 % 3 === 0) {
        console.log(num4);
    }
    num4+=1;
}