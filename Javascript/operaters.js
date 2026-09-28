// logical operaters
console.log("logical");
console.log(50 > 100 && 40<100);
console.log(50 < 100 && 40<100);

console.log(50 > 100 || 40<100);
console.log(50 > 100 || 40>100);

console.log("ABC" && "PQR");
console.log("" && NaN);
console.log(0 && NaN);


// bitwise operator
console.log("Bitwise");
console.log(100 | 1000);

console.log(100 & 1000);


//turnary
console.log("turnary")
var age=70

var empRetired = age < 60 ? "Working Employee" : "Retired Employee";
console.log(empRetired)