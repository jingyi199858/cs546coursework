//Yi Jing
//Feb 17 2020
const underscore = require("underscore")
function findVowels(text){
    if (!text) throw "You must provide a text";
    if (typeof text != "string") throw "Input text is not a string";
    const vowels = "aeiouAEIOU";
    let result = 0;
    let temp;
    for(let i = 0; i < text.length; i++){
        // Get ith character in text
        temp = text.charAt(i);
        if(vowels.indexOf(temp)!= -1){
            result += 1;
        }
    }
    return result;
}

function findConsonants(text){
    if (!text) throw "You must provide a text";
    if (typeof text != "string") throw "Input text is not a string";
    const vowels = "BCDFGHJKLMNPQRSTVXZWYbcdfghjklmnpqrstvxzwy";
    let result = 0;
    let temp;
    for(let i = 0; i < text.length; i++){
        // Get ith character in text
        temp = text.charAt(i);
        if(vowels.indexOf(temp)!= -1){
            result += 1;
        }
    }
    return result;
}

function refactorText(text){
    if (!text) throw "You must provide a text";
    if (typeof text !== 'string')
		throw TypeError(`${text} is not a valid string!`);
    return text
        // Lowercase
        .toLowerCase() 
        // Only keep a-z, and whitespace
		.replace(/[^a-z\s]/g, '').replace(/\s+/g, ' ').trimRight();
}

function totalLength(arr){
    if (!arr || !Array.isArray(arr)) throw "You must provide an Array";
    let result = 0;
    for(let i = 0; i < arr.length; i++){
        result += arr[i].length;
    }
    return result;
}

function uniqueWords(arr){
    if (!arr || !Array.isArray(arr)) throw "You must provide an Array";
    let result = new Set(arr);
    return result.size;
}

function longWords(arr){
    if (!arr || !Array.isArray(arr)) throw "You must provide an Array";
    let result = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length >= 6){
            result += 1;
        }
    }
    return result;
}

/*
function wordOccurences(arr){
    if(typeof str != "string"){
        throw "The input value must be a string";
    }
    if(str == null){
        throw "The input string is empty";
    }
    if(str == undefined){
        throw "The input string is undefined";
    }

    let arr = new Array(str.length);
    for(let i = 0; i < str.length; i++){
        arr[i] = str.charAt(i);
    }
    let string_set = new Set(arr);
    let setlet = string_set.values();
    let oparr = new Array(string_set.size);
    let obj = new Object;
    for(let j=0; j<string_set.size; j++){
        oparr[j] = setlet.next().value;
    }
    let count = 0;
    for(let k = 0; k < oparr.length; k++){
        for(let l = 0; l < str.length; l++){
            if(oparr[k] == str.charAt(l)){
                count++;
            }
        }
        obj[oparr[k]] = count;
        count = 0;
    }
    return obj;
}*/

function createMetrics(text){
    let obj = new Object;
    let str = refactorText(text);
    let arr = str.split(' ');
    let clean_str = str.replace(/\s/g,'');
    obj.totalLetters = clean_str.length;
    obj.totalNonLetters = text.length - clean_str.length;
    obj.totalWords = arr.length;
    obj.totalVowels = findVowels(clean_str);
    obj.totalConsonants = findConsonants(clean_str);
    obj.uniqueWords = uniqueWords(arr);
    obj.longWords = longWords(arr);
    obj.averageWordLength = totalLength(arr)/ arr.length;
    obj.wordOccurrences = underscore.countBy(arr);
    return obj;
}

let origin = "Helllo, my -! This is a great day to say helllo.\n\n\tHelllo! 2 3 4 23";
let origin2 = "hello, my name is jack, and i like to code, my favorites are python and java. ";

console.log(createMetrics(origin));
//console.log(createMetrics(origin2));

module.exports.createMetrics = createMetrics;