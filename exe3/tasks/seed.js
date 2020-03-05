const bands = require("../data/bands");
const connection = require('../config/mongoConnection');

async function main() {
    const createdBand1 = await bands.addBand("Pink Floyd", ["Roger Waters","David Gilmour", "Richard Wright", "Nick Mason"], 1965, ["Psychedelic rock", "Classic Rock", "Rock"],"Columbia Records");
    const createdBand2 = await bands.addBand("Pink trump Floyd", ["Roger bush Waters","David xijinping Gilmour", "Richard jiang ze minWright", "Nick Mason"], 1989, ["Psychedelic rock", "Classic Rock", "Rock"],"Columbia narcos Records");
    //console.log(createdBand1);
    //console.log(createdBand2);
    const showall = await bands.getAllBands();
    console.log(showall);
    

}

main();