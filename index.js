let city = 'Москва';
let age = 10;
let isItTrue = true;

city = 5000;
age = 'десять';

isItTrue = null;

console.log(typeof age, typeof city, typeof isItTrue)

let ageOfPerson1 = 18;
let ageOfPerson2 = '20';

ageOfPerson2=ageOfPerson1;
console.log(ageOfPerson2 , typeof ageOfPerson2)

let nameOfAnimal1 = null;
let nameOfAnimal2 = 'Charlie';

const bestProgrammingLanguage1 = 'JavaScript';
const bestProgrammingLanguage2 = 'Java';

console.log('Переменную с const переопределить нельзя');
console.log(bestProgrammingLanguage1 , typeof bestProgrammingLanguage1);
console.log(bestProgrammingLanguage2 , typeof bestProgrammingLanguage2);


let initialValue1;
let initialValue2 = 0;

initialValue2=initialValue1;
console.log(initialValue2 , typeof initialValue2)

// var isJavaScriptProgrammer1 = true;
// var isJavaScriptProgrammer2 = false;

console.log('var является устаревшим');

let isJavaScriptProgrammer1 = true;
let isJavaScriptProgrammer2 = false;

isJavaScriptProgrammer2 = isJavaScriptProgrammer1;
console.log(isJavaScriptProgrammer2 , typeof isJavaScriptProgrammer2 )

let helloText1 = 'Hello!';
let helloText2 = 'Привет!';

helloText2 =helloText1;
console.log(helloText2 , typeof helloText2)