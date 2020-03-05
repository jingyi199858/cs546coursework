const bands = require("./bands");
const connection = require('./mongoConnection');

async function main() {
    const createdBand = await bands.addBand("Pink Floyd", ["Roger Waters","David Gilmour", "Richard Wright", "Nick Mason"], 1965, ["Psychedelic rock", "Classic Rock", "Rock"],"Columbia Records");
    console.log(createdBand);

}

main();