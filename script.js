'use strict';

//EXERCISE 1

const names = ['Kasia', 'Tomek', 'Amanda', 'Maja', 'Martyna'];
console.log('Name',names );
const famelNames = [];
for(const name of names){
    if(name.slice(-1) === 'a'){
        famelNames.push(name);
    }
}
console.log('famelNames: ', famelNames);

//EXERCISE 2

const employees ={
    john: {
        name: 'John Doe',
        salery: 3000
    },
    amanda: {
        name:'Amanda Doe',
        salery: 4000
    },
}
const employeesNames = [];
const employeesSalery = [];

for(const employeeId in employees){
    const employee = employees[employeeId];

    const name = employee.name.split(' ')[0];
    console.log('Name: ',name);
    employeesNames.push(name);
    employeesSalery.push(employee.salery);
}
console.log('employeeNAME: ', employeesNames);
console.log('SALERY: ',employeesSalery);

//EXERCISE 3

const saleries = [2000, 3000, 1500, 6000, 3000];
let sum = 0;
let hightSalery = saleries[0];
let lowestSalery = saleries[0];

for(const salery of saleries){
    sum +=salery;
    if(salery>hightSalery) hightSalery = salery;
    if(salery<lowestSalery)lowestSalery = salery;
}
console.log(sum, hightSalery, lowestSalery);

//EXERCISE 4
const persons = {
    john: 2000,
    amanda: 3000,
    thomas: 1500,
    james: 6000,
    claira: 7000
};
let total = 0;
let hightSalery2 = persons.john;
let lowestSalery2 = persons.john;

for(const personId in persons){
    const personSalery = persons[personId];
    total += personSalery;
    if(personSalery > hightSalery2) hightSalery2 = personSalery;
    if(personSalery < lowestSalery2) lowestSalery2 = personSalery;
}
console.log(total, hightSalery2, lowestSalery2);

//EXERCISE 5
const tags = ['news', 'code', 'news', 'sport', 'hot', 'news', 'code',];
const uniqueTags = {};

for(const tag of tags){
    if(!uniqueTags[tag]) uniqueTags[tag] = {appearnce: 1};
    else uniqueTags[tag].appearnce++;
}
console.log('UNIQUEtAGS: ', uniqueTags);

//FUNCTION 
//Questions
//**********Q1*******
// const foo = 4;
// function Bar(){
//     const foo = 5;
//     const spam = 6;
//     console.log(foo, spam, eggs);

//     function Baz(){
//         const spam = 7;
//         const eggs = 8;
//         console.log(foo, spam);
//     }
// }
// Baz()

//%%%%%%%%%% Q3 %%%%%%%%%%
// const foo = function(){
//     console.log(this);
// }
// const obj = {
//     foo: foo
// }
// foo();
// foo.call(5);
// obj.foo();

// //Function Exercise 5 
// function filterEmployees(arr, min, max){
//     const filteredArray = [];

//     for(const empl of employees2){
//         if(empl.salery > min && empl.salery < max) {
//             filteredArray.push(empl);
//         }
//     }
//     return filteredArray
// }

// const employees2 = [
//     {name: 'Amanda Does', salery: 3000},
//     {name: 'John Does', salery: 4000},
//     {name: 'Marta Drow', salery: 2000},
//     {name: 'Jakob Bolt', salery: 6000},
//     {name: 'Bart Smart', salery: 8200}
// ];
// const filteredEmployees = filterEmployees(employees2, 2000, 8000);
// console.log(filteredEmployees);

// %%%%%%%  Function EXERCISE 5 %%%%%%%%

// const obj2 = {
//     firstName: 'John',
//     lastName: 'Dowtown'
// }
// function showObjectParams(obj2){
//     for(const paramId in obj2){
//         const param = obj2[paramId];
//         console.log(paramId + ': ' + param);
//     }
// }
// function showObjectParams(obj2) {
//     for(const paramId in obj2) {
//       const param = obj2[paramId];
//       console.log(paramId + ': ' + param);
//     }
//   }
// %%%%%%%  Function EXERCISE 7 %%%%%%%%
formatName('aMMaNda dOE');
formatName('igOOr beLLza');
formatName('fIlIpe mAsTo');

// const str = 'Jeremy';
// const newStr = str.charAt(0).toLowerCase() + str.substr(1).toUpperCase();
// console.log(newStr);

function formatName(name) {
    const firstNameAndLastName = name.split(' ');
    let firstName = firstNameAndLastName[0];
    let lastName = firstNameAndLastName[1];

    firstName = firstName.charAt(0).toUpperCase() + firstName.substr(1).toLowerCase();
    lastName = lastName.charAt(0).toUpperCase() + lastName.substr(1).toLowerCase();
    return firstName + ' ' + lastName;

}
console.log(formatName('aMManDa dOE'));

// function formatName(name) {
//     const firstNameAndLastName = name.split(' ');
//     let firstName = firstNameAndLastName[0];
//     let lastName = firstNameAndLastName[1];
  
//     firstName = firstName.charAt(0).toUpperCase() + firstName.substr(1).toLowerCase()
//     lastName = lastName.charAt(0).toUpperCase() + lastName.substr(1).toLowerCase()
//     return firstName + ' ' + lastName;
//   }
  
//   console.log(formatName('AMANdA doE')); // returns Amanda Doe

// %%%%%%%  Function EXERCISE 8 %%%%%%%%

function getEvensInRange(start, end){
    const evenesArrey = [];
    for(let i = start; i <= end; i++){
        if(i % 2 === 0) evenesArrey.push(i);
    }
    return evenesArrey;
}
console.log(getEvensInRange(0,9));
console.log(getEvensInRange(4,19));

// %%%%%%%  Function EXERCISE 9 %%%%%%%%
// function filter(arr, cb){
//     const filteredArrey = [];

//     for(const elem of arr) {
//         if(cb(elem)) filteredArrey.push(elem);
//     }
//     return filteredArrey;
// }

// console.log(filter([12,18,17,23]));
