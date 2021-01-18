var person = {
  firstName: 'Yeah',
  lastName: 'Boy',
  hobby: 'money'
};
console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is: " + fullName);

person.job = "The person's current job is: " + 'pain';
console.log(person.job);

person.previousJob = "The person's previous job is: " + 'sadness';
console.log(person.previousJob);

console.log(person);

var myCar = {
  make: 'Honda',
  model: 'whip',
  year: '1982'
};
console.log(myCar);
myCar['owner'] = fullName;
var x = 'My name is ' + myCar.owner + ' and I drive a ' + myCar.year + ' ' + myCar.make + ' ' +
myCar.model + '.';
console.log(x);

myCar['color'] = 'grey';
console.log(myCar);
