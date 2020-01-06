// Electricity bill 

// function electricityBill(units) {

//     //var units = 1090;

//     if (units >= 0 && units < 200) {
//         console.log("The Electicity bill is : " + " " + units * 3)
//     }
//     if (units >= 200 && units < 400) {
//         console.log("The Electicity bill is : " + " " + units * 4.50)
//     }
//     if (units >= 400 && units < 600) {
//         console.log("The Electicity bill is : " + " " + units * 6.50)
//     }
//     if (units >= 600) {
//         console.log("The Electicity bill is : " + " " + units * 8)
//     }
// }

// electricityBill(190)

// // Accessing the values from the given Array

// var arr = [24,32,96,108,102,101,302,306,109,1006]

// var n = 0; 
// var sum = 0;

// while(n < arr.length){
//     console.log(arr[n])
//     n = n + 1;
// }

// // sum of the above array values 

// while(n < arr.length){
//     sum = sum + arr[n];
//     n = n + 1;
// }
// console.log(sum)

// // Print all even numbers upto 1000 using While loop

// var x = 0;

// while(x <= 1000){
//     if (x % 2 == 0){
//         console.log(x)
//     }
//     x++;
// }


// // Print the Grade of a Student from the given student Object

// var std = { 'id': 1002, 'name': 'Siva', 'm1': 80, 'm2': 90, 'm3': 70, 'm4': 60, 'm5': 50, 'm6': 35 }

// var total = std.m1 + std.m2 + std.m3 + std.m4 + std.m5 + std.m6;
// console.log(total)

// if(total > 500){
//     console.log(std.name+" "+"Grade is A")
// }
// if(total <= 500 && total > 400){
//     console.log(std.name+" "+"Grade is B")
// }
// if(total <= 400 && total > 300){
//     console.log(std.name+" "+"Grade is C")
// }
// if(total <= 300 && total > 200){
//     console.log(std.name+" "+"Grade is D")
// }
// if(total <= 200){
//     console.log(std.name+" "+"Grade is E (Failed)")
// }


// Prime numbers from 1 to 10000 

// function primeNumbersBetween(start,end){
//     var Nprime = 0;
//     for(var i = start; i <= end ; i++){
//         var count = 0;
//         for(j = 1; j <= i; j++ ){
//             if(i % j == 0){
//                 count++;
//             }
//         }
//         if (count == 2){
//             console.log(i);
//             Nprime++;
//         }
//     }
//     console.log("The Number of Prime Numbers between " +" " + start + " " + "to" + " "+ end + " " + "is :" +" " + Nprime)
// }

// primeNumbersBetween(1,100)


//Evaluation of the given expressions

function linearEquation(equation1, equation2) {
    var schar1, schar2, xpos1, ypos1, xpos2, ypos2, a1, b1, a2, b2, c1, c2, e1eql, e2eql, x, y;

    schar1 = equation1.charAt(0);
    schar2 = equation2.charAt(0);
    if (schar1 != '+' && schar1 != '-') {
        equation1 = '+' + equation1;
    }
    if (schar2 != '+' && schar2 != '-') {
        equation2 = '+' + equation2;
    }
    xpos1 = equation1.search(/(x|a)/i);
    ypos1 = equation1.search(/(y|b)/i)

    a1 = Number(equation1.substring(0, xpos1))
    b1 = Number(equation1.substring(xpos1 + 1, ypos1))

    if (isNaN(equation1.charAt(xpos1 - 1))) {
        if (equation1.charAt(xpos1 - 1) == "+") {
            a1 = 1;
        }
        else {
            a1 = -1;
        }
    }
    if (isNaN(equation1.charAt(ypos1 - 1))) {
        if (equation1.charAt(ypos1 - 1) == '+') {
            b1 = 1;
        }
        else {
            b1 = -1;
        }
    }

    xpos2 = equation2.search(/(x|a)/i)
    ypos2 = equation2.search(/(y|b)/i)

    a2 = Number(equation2.substring(0, xpos2))
    b2 = Number(equation2.substring(xpos2 + 1, ypos2))

    if (isNaN(equation2.charAt(xpos2 - 1))) {
        if (equation2.charAt(xpos2 - 1) == "+") {
            a2 = 1;
        }
        else {
            a2 = -1;
        }
    }
    if (isNaN(equation2.charAt(ypos2 - 1))) {
        if (equation2.charAt(ypos2 - 1) == "+") {
            b2 = 1;
        }
        else {
            b2 = -1;
        }
    }

    e1eql = equation1.search('=')
    e2eql = equation2.search('=')

    c1 = Number(equation1.substring(ypos1 + 1, e1eql))
    c2 = Number(equation2.substring(ypos2 + 1, e2eql))

    if (Math.abs(a1) == Math.abs(a2)) {
        if (equation1.charAt(0) == equation2.charAt(0)) {
            y = -((-c1) + c2) / ((-b1) + b2);
            x = (-c1 - (a1 * y)) / b1;
            console.log('The x value is :' + ' ' + x)
            console.log('The y value is :' + ' ' + y)
            return 0;
        }
        else {
            y = -(c1 + c2) / (b1 + b2);
            x = (-c1 - (a1 * y)) / b1;
            console.log('The x value is :' + ' ' + x)
            console.log('The y value is :' + ' ' + y)
            return 0;
        }
    }

    if (Math.abs(b1) == Math.abs(b2)) {
        xpos1 = equation1.search(/(x|a)/i);
        xpos2 = equation2.search(/(x|a)/i);
        if (equation1.charAt(xpos1 + 1) == equation2.charAt(xpos2 + 1)) {
            x = -((-c1) + c2) / ((-a1) + a2);
            y = (-c1 - (a1 * x)) / b1;
            console.log('The x value is :' + ' ' + x)
            console.log('The y value is :' + ' ' + y)
            return 0;
        }
        else {
            x = -(c1 + c2) / (a1 + a2)
            y = (-c1 - (a1 * x)) / b1;
            console.log('The x value is :' + ' ' + x)
            console.log('The y value is :' + ' ' + y)
            return 0;
        }
    }
    if (Math.abs(a1) != Math.abs(a2)) {
        var a12 = a1 * Math.abs(a2)
        b1 = b1 * Math.abs(a2)
        c1 = c1 * Math.abs(a2)

        a2 = a2 * Math.abs(a1)
        b2 = b2 * Math.abs(a1)
        c2 = c2 * Math.abs(a1)
        if (Math.abs(a12) == Math.abs(a2)) {
            if (equation1.charAt(0) == equation2.charAt(0)) {
                y = -((-c1) + c2) / ((-b1) + b2);
                x = (-c1 - (a12 * y)) / b1;
                console.log('The x value is :' + ' ' + x)
                console.log('The y value is :' + ' ' + y)
                return 0;
            }
            else {
                y = -(c1 + c2) / (b1 + b2);
                x = (-c1 - (a12 * y)) / b1;
                console.log('The x value is :' + ' ' + x)
                console.log('The y value is :' + ' ' + y)
                return 0;
            }
        }
    }


}

linearEquation('a+b-25=0', 'a-b-11=0')


