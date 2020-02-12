//Yi Jing
//cs546
//Feb 8 2020
function isEmpty(o){
    for(let i in o){
        if(o.hasOwnProperty(i)){
            return false;
        }
    }
    return true;
}

function deepEquality(obj1, obj2){
    if(typeof obj1 != "object" && obj1 != null){
        throw "The input value must be an object";
    }
    if(typeof obj2 != "object" && obj2 != null){
        throw "The input value must be an object"
    }
    if(obj1 == undefined){
        throw "The Object is undefined";
    }
    if(obj2 == undefined){
        throw "The Object is undefined";
    }
    if(obj1 == null){
        throw "The Object has nothing"
    }
    if(obj2 == null){
        throw "The Object has nothing"
    }
    if(isEmpty(obj1) && !isEmpty(obj2)){
        return false;
    }
    if(isEmpty(obj2) && !isEmpty(obj1)){
        return false;
    }
    
    for(let i in obj1){
            if(obj1[i] != obj2[i]){
                return false
            }
        }
    return true;


}

function uniqueElements(arr){
    if(!Array.isArray(arr)){
        throw "The input must be an array";
    }
    if(arr == null){
        throw "The input value is empty";
    }
    if(arr == undefined){
        throw "The input value is undefined";
    }

    let result = new Set(arr);
    return result.size;
}

function countOfEachCharacterInString(str){
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
}

module.exports.deepEquality = deepEquality;
module.exports.uniqueElements = uniqueElements;
module.exports.countOfEachCharacterInString = countOfEachCharacterInString;