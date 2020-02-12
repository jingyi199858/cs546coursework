//Yi Jing
//cs546
//Feb 8 2020
function volumeOfRectangularPrism(length, width, height){
    if(typeof length != "number"){
        throw "The input length must be a number";
    }
    if(typeof width != "number"){
        throw "The input width must be a number";
    }
    if(typeof height != "number"){
        throw "The input height must be a number";
    }
    if(length < 0){
        throw "The input must be greater than zero";
    }
    if(width < 0){
        throw "The input must be greater than zero";
    }
    if(height < 0){
        throw "The input must be greater than zero";
    }

    return length * width * height;
}

function surfaceAreaOfRectangularPrism(length, width, height){
    if(typeof length != "number"){
        throw "The input length must be a number";
    }
    if(typeof width != "number"){
        throw "The input width must be a number";
    }
    if(typeof height != "number"){
        throw "The input height must be a number";
    }
    if(length < 0){
        throw "The input must be greater than zero";
    }
    if(width < 0){
        throw "The input must be greater than zero";
    }
    if(height < 0){
        throw "The input must be greater than zero";
    }

    return length * width * 2 + length * height * 2 + width * height * 2;
}

function volumeOfSphere(radius){
    if(typeof radius != "number"){
        throw "The input radius must be a number";
    }
    if(radius < 0){
        throw "The input must be greater than zero";
    }

    return 4/3 * Math.PI * radius * radius * radius;
}

function surfaceAreaOfSphere(radius){
    if(typeof radius != "number"){
        throw "The input radius must be a number";
    }
    if(radius < 0){
        throw "The input must be greater than zero";
    }

    return 4 * Math.PI * radius * radius;
}

module.exports.volumeOfRectangularPrism = volumeOfRectangularPrism;
module.exports.surfaceAreaOfRectangularPrism = surfaceAreaOfRectangularPrism;
module.exports.volumeOfSphere = volumeOfSphere;
module.exports.surfaceAreaOfSphere = surfaceAreaOfSphere;