const words ={
    programming: "The action or process of writing computer programs.",
    charisma: "A personal magic of leadership arousing special popular loyalty or enthusiasm for a public figure (such as a political leader)",
    sleuth: "To act as a detective : search for information",
    foray: "A sudden or irregular invasion or attack for war or spoils : raid",
    adjudicate: "to make an official decision about who is right in (a dispute) : to settle judicially"
}

function checkInput(input) {
    if(typeof input != "string"){
        throw "The input is not a string";
    }
    return input
}

function lookupDefinition(str) {
    checkInput(str);
    if(words[str] != undefined){
        return words[str];
    }else{
        throw "The key is undefined";
    }

}

function getWord(str){
    checkInput(str);
    let result = Object.keys(words).find(key => words[key] === str);
    if(result == undefined){
        throw "The definition is undefined";
    }
    return result;
}

module.exports.lookupDefinition = lookupDefinition;
module.exports.getWord = getWord;