console.log("PRINTING ALL NUMBERS BETWEEN -10 and 19");
for (let index = -10; index < 20; index++) {
    console.log(index);
}

console.log("PRINTING ALL EVEN NUMBERS BETWEEN 10 and 40");
for (let index = 10; index <= 40; index+=2) {
    console.log(index);
}

console.log("PRINTING ALL ODD NUMBERS BETWEEN 300 and 333");
for (let index = 300; index <= 333; index++){
    if (index % 2 !== 0) {
        console.log(index);
    }
}

console.log("PRINTING ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 and 50");
for (let index = 5; index <= 50; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
        console.log(index);
    }
}