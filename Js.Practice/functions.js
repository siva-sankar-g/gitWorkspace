//  Write a JavaScript function to get the number of days in a month ................!!!!

// function getDaysInMonth(month, year) {
//     var months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
//     if (months[month - 1] == months[1]) {
//         if (year % 4 == 0) {
//             if (year % 100 == 0) {
//                 if (year % 400 == 0) {
//                     console.log(months[month - 1] + 1);
//                     return 0;
//                 }
//                 console.log(months[month - 1]);
//                 return 0;
//             }
//             console.log(months[month - 1] + 1);
//         }
//         else { console.log(months[month - 1]); return 0; }
//     }
//     else
//     console.log(months[month - 1]);
// }

// getDaysInMonth(2, 2100);

// function getDaysInMonth(month, year) {

//     // here JANUARY IS BASED ON 1
//     //  0 represents the last day in the previous month

//     console.log(new Date(year, month, 0).getDate());

//     // Here January is 0 based
//     // return new Date(year, month+1, 0).getDate();
// }

// getDaysInMonth(1, 2014)

//  Write a JavaScript function to get the month name from a particular date ..............!!!!

// function month_name(dateString) {
//     var monthNames = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//     console.log(monthNames[new Date(dateString).getMonth()])
// }

// month_name('10/11/2009')
// month_name('11/13/2014')
// month_name('12/11/2009')


//Write a JavaScript function to compare dates (i.e. greater than, less than or equal to)


// function dateCompare(datestr1, datestr2) {
//     var date1 = new Date(datestr1);
//     var date2 = new Date(datestr2);

//     if (date1 > date2) {
//         console.log(" date1 > date2 ")
//         //return " date1 > date2 " 
//     }
//     else if (date1 < date2) {
//         console.log("date2 > date1")
//         //return "date2 > date1"
//     }
//     else {
//         console.log("date1 = date2")
//         //return "date1 = date2" 
//     }
// }
// dateCompare("2013-11-14T00:00" , "2013-11-14T00:01");
//dateCompare("11/14/2013 00:01","11/14/2013 00:00");
//dateCompare("11/14/2013 00:01:58","11/14/2013 00:01:55");
//console.log(dateCompare(new Date("11/14/2013 00:01"),new Date("11/14/2013 00:00")));
//console.log(dateCompare(new Date("11/14/2013 00:00"),new Date("11/14/2013 00:01")));


//Write a JavaScript function to add specified minutes to a Date object.

// function setminutes(date, minutes){

//     var d = new Date(date).setMinutes(minutes);

//     console.log (new Date(d).toString());

// }
// setminutes('2014/11/02', 50)


// Write a JavaScript function to test whether a date is a weekend.

function is_weekend(date){
    var d = new Date(date).getDay();
     if (d == 0 ){
        console.log('Weekend');
     }
     if ( d == 6){
        console.log('Weekend');
    }
     else {
         console.log('undefined');
    }
}
is_weekend('2014/11/15');
is_weekend('2014/11/16');
is_weekend('2014/11/17');