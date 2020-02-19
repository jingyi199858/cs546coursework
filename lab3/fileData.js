//Yi JIng
//Feb 17 2020
const bluebird = require("bluebird");
const Promise = bluebird.Promise;

const fs = bluebird.promisifyAll(require("fs"));

async function getFileSizeInKilobytes(path) {
    // Throwing inside of an async method causes the method
    // To return a rejected promise, which means we can throw based
    // On arguments
    if (!path) throw "You must provide a path";
    const stats = await fs.statAsync(path);
  
    return stats.size / 1024;
  }

async function getFileAsString(path){
    if (!path) throw "You must provide a path";
    if (typeof path != "string") throw "Input path is not a string";
    const str = await fs.readFileSync(path, "utf8");

    return str;
}

async function getFileAsJSON(path){
    if (!path) throw "You must provide a path";
    if (typeof path != "string") throw "Input path is not a string";
    const str = await fs.readFileSync(path, "utf8");

    return JSON.parse(str);
}

async function saveStringToFile(path, text){
    if (!path) throw "You must provide a path";
    if (!text) throw "No input provided";
    if (typeof path != "string") throw "Input path is not a string";
    if (typeof text != "string") throw "Input text is not a string";
    const str = await fs.writeFileSync(path, text);

    return str;
}

//done
async function saveJSONToFile(path, obj){
    if (!path) throw "You must provide a path";
    if (!obj) throw "No input provided";
    if (typeof path != "string") throw "Input path is not a string";
    if (typeof obj != "object") throw "Input text is not a string";
    const obj1 = await fs.writeFileSync(path, JSON.stringify(obj), "utf8");

    return obj1;
}

const first = {a: 2, b: 3};
const metrics = {
    totalLetters: 40, // (helllomythisisagreatdaytosayhelllohelllo),
    totalNonLetters: 27, // (,  -!        .\n\n\t! 2 3 4 23) 
    totalWords: 11, //(["helllo","my","this","is","a","great","day","to","say","helllo","helllo"] is 11 words),
    totalVowels: 14,
    totalConsonants: 26,
    uniqueWords: 9, //(helllo, my, this, is, a, great, day, to, say),
    longWords: 3,
    averageWordLength: 3.6363636363636362, // (this will round differently on each machine",
    wordOccurrences: {
        a: 1,
        day: 1,
        great: 1,
        helllo: 3,
        is: 1,
        my: 1,
        say: 1,
        this: 1,
        to: 1
    } // this may or may not sort in your system; order DOES NOT MATTER
} 

const str = "WASHINGTON — Andr*ew G. McCabe, the form&er depu%ty F.B.I. director and a frequent targ#et of Presid$ent Trump, will not face charges in an investigation into whether he lied to inves@tigators about a media leak, his defense team said on Friday.The decision by prosecutors in Washington ends a case that had left Mr. McCabe in legal limbo for nearly two years. It also appears to be a sign that Attorney General William P. Barr wants to show that the Justice Department is independent from Mr. Trump: The notification came a day after Mr. Barr publicly challenged the president to stop attacking law enforcement officials on Twitter and said the criticisms were making his job more difficult.The prosecutors informed Mr. McCabe’s lawyers of their decision by phone on Friday morning, the lawyers, Michael R. Bromwich and David Schertler, said in a statement.";

async function main() {
    // We can await this; if it throws / rejects
  saveStringToFile("example.txt", "13748912734891748329");
  saveJSONToFile("example2.json", metrics);
  const kilos = await getFileAsJSON("hello1.json");
  console.log(`That file is ${kilos}kb large!`);
  console.log(kilos);
}

//main();

module.exports.getFileAsString = getFileAsString;
module.exports.getFileAsJSON = getFileAsJSON;
module.exports.saveStringToFile = saveStringToFile;
module.exports.saveJSONToFile = saveJSONToFile;