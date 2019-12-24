// FUNCTIONS WITH OR WITHOUT ARGUMENTS

// find whether the give number even 

function isEven(even) {
    if (even % 2 == 0)
        console.log('The given Number :' + even + " " + 'is even number');
    if (even % 2 == 1)
        console.log('The given Number :' + even + " " + 'is not even number');
}
isEven(9)

// Print all even numbers upto n

function even(n) {
    for (var i = 0; i <= n; i++) {
        if (i % 2 == 0)
            console.log(i);
    }
}
even(13)

// Print all even numbers upto n in Reverse order

function evenReverse(n) {
    for (var i = n; i >= 0; i--) {
        if (i % 2 == 0)
            console.log(i);
    }
}
evenReverse(10)

// Print sum of even numbers upto n

function evenSum(n) {
    var sum = 0;
    for (var i = 0; i <= n; i++) {
        if (i % 2 == 0) {
            sum += i;

        }
    }
    console.log(sum)
}
evenSum(6)

// Print sum of odd numbers upto n

function oddSum(n) {
    var sum = 0;
    for (var i = 0; i <= n; i++) {
        if (i % 2 == 1) {
            sum += i;

        }
    }
    console.log(sum)
}
oddSum(5)

// Print factorial of a given  number

function factorial(n) {
    var facto = 1;
    for (var i = n; i >= 1; i--) {
        facto *= i;
    }
    console.log(facto);
}
factorial(5)

// Print the Position of employee based on his Salary

var employee = {
    'id' : 1001,
    "name" : "siva",
    "grade" : 'A',
    "salary" : 0,
    "position" : function(salary){
        if ( salary < 20000){
            this.salary = salary;
            return "Engineer" +': '+ 'The salary is' + ' ' + this.salary;
        }
        if (salary >= 20000 && salary <= 40000){
            this.salary = salary;
            return "Senior Manager"+': '+ 'The salary is' + ' ' + this.salary;
        }
        if ( salary > 40000){
            this.salary = salary;
            return "Executive" +': ' + 'The salary is' + ' ' + this.salary;
        }

    }
} 
console.log(employee.position(9000))


// Print the total marks of every Student



function stuedentTotal(studentName){
    var std = [{"id": 1001,"name" : "siva","m1" : 100,"m2":80,"m3":90,"m4":70,"m5":110,"m6":95,"total":0},
    {"id": 1002,"name" : "siva","m1" : 100,"m2":80,"m3":90,"m4":89,"m5":110,"m6":95,"total":0},
    {"id": 1003,"name" : "Raju","m1" : 80,"m2":80,"m3":90,"m4":70,"m5":110,"m6":95,"total":0},
    {"id": 1004,"name" : "Phani","m1" : 90,"m2":90,"m3":100,"m4":100,"m5":105,"m6":95,"total":0},
    {"id": 1005,"name" : "Jai","m1" : 100,"m2":80,"m3":90,"m4":70,"m5":110,"m6":96,"total":0},
    {"id": 1006,"name" : "Dora","m1" : 100,"m2":60,"m3":80,"m4":89,"m5":100,"m6":95,"total":0},
    {"id": 1007,"name" : "Sanjay","m1" : 80,"m2":80,"m3":90,"m4":70,"m5":101,"m6":98,"total":0},
    {"id": 1008,"name" : "Karthik","m1" : 100,"m2":80,"m3":95,"m4":88,"m5":110,"m6":95,"total":0},
    {"id": 1009,"name" : "Venky","m1" : 120,"m2":90,"m3":90,"m4":70,"m5":110,"m6":95,"total":0},
    {"id": 1010,"name" : "Vamsi","m1" : 100,"m2":80,"m3":80,"m4":46,"m5":100,"m6":92,"total":0}]

    // var student = std.filter(function(val, ind){
    //     var tot = val.m1 + val.m2 + val.m3;
    //     val.total = tot;
    //     return (val.name == studentName)
    // })
    // console.log(student[0].name + ' '+ 'total Marks are'+ " "+ student[0].total);
    std.forEach(function(val,ind){
        val.total = val.m1+val.m2+val.m3+val.m4+val.m5+val.m6;
        console.log("StudentName :"+ " "+val.name +" " + "Total Marks are :" +" "+ val.total);
    })
}
stuedentTotal()
