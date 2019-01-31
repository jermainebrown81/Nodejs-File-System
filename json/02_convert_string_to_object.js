// Converting string to object

let personString = '{"name": "some_name", "age": 20}'; //use of '' for our string as json uses double quotes

// lets say we get this json from a server or text file .. currently its useless if we want to
// get the name value because we are using a string.
//so the following would not work: personString.name
// we need to take this string and convert it back into a object.

let person = JSON.parse(personString);// takes json converts it from string back into an object
console.log(typeof person);
console.log(person);

// This is the entire process of taking a string and converting it to an object