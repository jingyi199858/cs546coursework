const geo = require("./geometry")
const uti = require("./utilities")

try {
    console.log(geo.volumeOfRectangularPrism(4,5,6))
}catch (error){
    console.log(error)
}
try {
    console.log(geo.surfaceAreaOfRectangularPrism(4,5,6))
}catch (error){
    console.log(error)
}

try {
    console.log(geo.volumeOfSphere(23))
}catch (error){
    console.log(error)
}

try {
    console.log(geo.surfaceAreaOfSphere('6'))
}catch (error){
    console.log(error)
}

const first = {a: 2, b: 3};
const second = {a: 2, b: 4};
const third = {a: 2, b: 3};
const fourth = {a: 4, b: 3};
const fifth = {b: 3, a: 2};
const emp = {};
const emp2 = {};
const und = undefined
const six = {a: 1, b: 2};
const seven = {c:1, d:2};
try {
    console.log("six compare to seven: ")
    console.log(uti.deepEquality(six,seven))
}catch (error){
    console.log(error)
}

try {
    console.log(uti.deepEquality(emp,emp2))
}catch (error){
    console.log(error)
}

try {
    console.log(uti.deepEquality(first,und))
}catch (error){
    console.log(error)
}

try {
    console.log(uti.deepEquality(first,emp))
}catch (error){
    console.log(error)
}

try {
    console.log(uti.deepEquality(first,second))
}catch (error){
    console.log(error)
}

try {
    console.log(uti.deepEquality(first,third))
}catch (error){
    console.log(error)
}

try {
    console.log(uti.deepEquality(first,fourth))
}catch (error){
    console.log(error)
}

try {
    console.log(uti.deepEquality(first,fifth))
}catch (error){
    console.log(error)
}

const testArr = ["a", "a", "b", "a", "b", "c"];
const empArr = [];
const nullArr = null;
const testArr2 = ["a", "a", "b", "a","g", "b", "c", "a", "b", "a", "b", "c", "a", "b", "a", "b", "c", "a", "b", "a", "b", "c", "a", "b", "a", "b", "c", "a", "b", "a", "b", "c", "a", "b", "a", "b", "c", "a", "b", "a", "b", "c", "a", "b", "a", "b", "c", "a", "b", "a", "b", "c"];
try {
    console.log(uti.uniqueElements(testArr))
}catch (error){
    console.log(error)
}

try {
    console.log(uti.uniqueElements(nullArr))
}catch (error){
    console.log(error)
}

try {
    console.log(uti.uniqueElements(testArr2))
}catch (error){
    console.log(error)
}

try {
    console.log(uti.uniqueElements(und))
}catch (error){
    console.log(error)
}

try {
    console.log(uti.uniqueElements(empArr))
}catch (error){
    console.log(error)
}

const test = "Hello, the pie is in the oven";
const coma = ",./,./,/.,/,/.[]!@#$%^&*.,.,.//"
const repeatstring = "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj"
const test2 = "Learning JavaScript, HTML and CSS";
const str = "asldkjfl la kjdslfkj asd,,,,..alsdkjflk;;;;;dafas?asldkjfl la kjdslfkj asd,,,,..alsdkjflk;;;;;dafas?asldkjfl la kjdslfkj asd,,,,..alsdkjflk;;;;;dafas?asldkjfl la kjdslfkj asd,,,,..alsdkjflk;;;;;dafas?asldkjfl la kjdslfkj asd,,,,..alsdkjflk;;;;;dafas?asldkjfl la kjdslfkj asd,,,,..alsdkjflk;;;;;dafas?asldkjfl la kjdslfkj asd,,,,..alsdkjflk;;;;;dafas?asldkjfl la kjdslfkj asd,,,,..alsdkjflk;;;;;dafas?asldkjfl la kjdslfkj asd,,,,..alsdkjflk;;;;;dafas?asldkjfl la kjdslfkj asd,,,,..alsdkjflk;;;;;dafas?asldkjfl la kjdslfkj asd,,,,..alsdkjflk;;;;;dafas?asldkjfl la kjdslfkj asd,,,,..alsdkjflk;;;;;dafas?";
try {
    console.log(uti.countOfEachCharacterInString(test))
}catch (error){
    console.log(error)
}

try {
    console.log(uti.countOfEachCharacterInString(test2))
}catch (error){
    console.log(error)
}

try {
    console.log(uti.countOfEachCharacterInString(nullArr))
}catch (error){
    console.log(error)
}

try {
    console.log(uti.countOfEachCharacterInString(und))
}catch (error){
    console.log(error)
}

try {
    console.log(uti.countOfEachCharacterInString(str))
}catch (error){
    console.log(error)
}

try {
    console.log(uti.countOfEachCharacterInString(repeatstring))
}catch (error){
    console.log(error)
}

try {
    console.log(uti.countOfEachCharacterInString(coma))
}catch (error){
    console.log(error)
}
