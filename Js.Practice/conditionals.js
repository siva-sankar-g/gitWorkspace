// Electricity bill 

function electricityBill(units) {

    //var units = 1090;

    if (units >= 0 && units < 200) {
        console.log("The Electicity bill is : " + " " + units * 3)
    }
    if (units >= 200 && units < 400) {
        console.log("The Electicity bill is : " + " " + units * 4.50)
    }
    if (units >= 400 && units < 600) {
        console.log("The Electicity bill is : " + " " + units * 6.50)
    }
    if (units >= 600) {
        console.log("The Electicity bill is : " + " " + units * 8)
    }
}

electricityBill(190)

// Accessing the values from the given Array

var arr = [24,32,96,108,102,101,302,306,109,1006]

var n = 0; 
var sum = 0;

while(n < arr.length){
    console.log(arr[n])
    n = n + 1;
}

// sum of the above array values 

while(n < arr.length){
    sum = sum + arr[n];
    n = n + 1;
}
console.log(sum)

// Print all even numbers upto 1000 using While loop

var x = 0;

while(x <= 1000){
    if (x % 2 == 0){
        console.log(x)
    }
    x++;
}


// Print the Grade of a Student from the given student Object

var std = { 'id': 1002, 'name': 'Siva', 'm1': 80, 'm2': 90, 'm3': 70, 'm4': 60, 'm5': 50, 'm6': 35 }

var total = std.m1 + std.m2 + std.m3 + std.m4 + std.m5 + std.m6;
console.log(total)

if(total > 500){
    console.log(std.name+" "+"Grade is A")
}
if(total <= 500 && total > 400){
    console.log(std.name+" "+"Grade is B")
}
if(total <= 400 && total > 300){
    console.log(std.name+" "+"Grade is C")
}
if(total <= 300 && total > 200){
    console.log(std.name+" "+"Grade is D")
}
if(total <= 200){
    console.log(std.name+" "+"Grade is E (Failed)")
}

