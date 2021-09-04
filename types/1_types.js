// boolean
var isFetching = true;
var isLoading = false;
//number
var int = 42;
var float = 42.2;
var num = 3e20;
var message = 'Hello Typescript';
//array
var numberArray = [1, 2, 3, 5, 8, 13];
var numberArray2 = [1, 2, 3, 5, 8, 13];
var stringArray = ['hello', 'typescript'];
var stringArray2 = ['hello', 'typescript'];
//Tuple
var contact = ['Ilya', 21];
//Any
var variable = 42;
variable = 'new string';
variable = [];
//-----
function sayMyName(name) {
    console.log(name);
}
sayMyName('Ilya');
//never
function throwError(message) {
    throw new Error(message);
}
function infinite() {
    while (true) {
        //danger
    }
}
var login = 'admin';
var id1 = 1234;
var id2 = '1234';
