var moment = require('moment');


// new Date().getTime()
var someTimeStamp = moment().valueOf();
console.log(someTimeStamp);


var createAt = 1234;
var date = moment(createAt);
// date.add(100, 'years').subtract(9,'months');
// console.log(date.format('MMM Do, YYYY'));


console.log(date.format('h:mm a')); 
