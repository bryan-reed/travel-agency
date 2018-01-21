const $ = require('jquery');
const Person = require('./modules/Person');
let bryan = new Person("Bryan Reed", "purple");
bryan.greet();
let jane = new Person("Ashley Reed", "green");
jane.greet();
$("h1").remove();
console.log('Test this out');