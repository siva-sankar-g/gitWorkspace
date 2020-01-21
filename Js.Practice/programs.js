// Smallest number in the given Array

var numberarray = [21, 46, 22, 48, 220, 488, 5550, 1926], min_number = Infinity;


for (var i = 0; i < numberarray.length; i++) {
    if (numberarray[i] <= min_number) {
        min_number = numberarray[i]
    }
}

console.log(min_number)


// Largest number in the given array 

var numberarray = [-21, -46, -22, -48, -220, -488, -5550, -1926], max_number = -Infinity;

for (var i = 0; i < numberarray.length; i++) {
    if (numberarray[i] >= max_number) {
        max_number = numberarray[i]
    }
}

console.log(max_number)

// using While loop  largest number

var length = numberarray.length

while (length--) {
    if (numberarray[length] >= max_number) {
       max_number = numberarray[length]
       //console.log('hi siva sanakar')
    }
}
console.log(max_number)

function pyramid(forward, reverse){
 
for ( var i = 1; i <= forward; i++){
    var a = '';
    for(var j = 1; j <= i; j++){
        a += ' ' + j;
    }
    console.log(a)
}
for ( var i = reverse; i >= 1; i--){
    var a = '';
    for(var j = 1; j <= i; j++){
        a += ' ' + j;
    }
    console.log(a)
}

}

//pyramid(10,9)

// forward   1 1 1 1 1
 //          2 2 2 2
 //          3 3 3
 //          4 4
 //          5


    var c = 1;
for ( var i = 5; i >= 1; i--){
    var a = '';
    for(var j = 1; j <= i; j++){
        a += ' ' + c;
    }
    console.log(a)
    c++
}

// sorting of the given array to largest to smallest

var x = [92,96,42,23,2,523,202,203,2,496,523,400,502]

for (var i = 0; i < x.length; i++){
    for(var j = 0; j < x.length; j++){
        var first = x[j]
        var second = x[j + 1]

        if (first < second){
            x[j] = second;
            x[j +1] = first
        }
    }
}
console.log(x)



  



