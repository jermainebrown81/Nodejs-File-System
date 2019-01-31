// We will explore how json works

// test object
var obj = {
    name: "some_name"
}

// lets say we want to do something with above object i.e.
// send it between servers as a string save it to a text file etc...
// To do this we need to call a json method

// define a variable to store the result
var stringObj  = JSON.stringify(obj); //takes the object returns stringify version which is a string

// lets check that it is actually a string
console.log(typeof  stringObj);
console.log(stringObj);

// what we have done  is taken a json object converted it into a json string
// run the file to see result

/* Result
string
{"name":"some_name"}
 */

// note! json object name is wrapped in "" this is requirement of json syntax
// in json we can use other types like arrays, boolean 