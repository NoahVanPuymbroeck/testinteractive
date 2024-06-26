//exponent is 2 of 3 (afspraak)
//  merk op - we testen hier niet of de parameter juist is,
//  dus als bvb parameter exponent 4 is krijg je een niet-intuitief resultaat)
//arrow-function-syntax
//deze functie is nog niet in 1 statement geschreven
const tweedeDerdeMacht_v1 = (number, exponent) => {
    if (exponent === 2) {
        return number * number;
    } else {
        return number * number * number;
    }
};

console.log(tweedeDerdeMacht_v1(4, 2)); // 4*4 = 16
console.log(tweedeDerdeMacht_v1(4, 3)); // 4*4*4 = 64

//exponent is 2 of 3
//arrow-function-syntax, kortere notatie
const tweedeDerdeMacht_v2 = (number, exponent) => {
    return exponent === 2 ? number * number : number * number * number;
};


//exponent is 2 of 3
//arrow-function-syntax, nog kortere notatie
const tweedeDerdeMacht_v3 = (number, exponent) => exponent === 2 ? number * number : number * number * number;

//===============================================
//exponent mag eender welke waarde zijn
const xdeMacht_v1 = (number, exponent) => {
    let result = 1;
    for (let i = 0; i < exponent; i++)
        result = number * result;
    return result;
}

//exponent is eender wat
//kortere versie met recursie
//                  4       2
const xdeMacht_v2 = (number, exponent) => {
    return (exponent === 0) ? 1 : number * xDeMacht(number, exponent - 1);
}


//exponent is eender wat
//kortere versie - ken je taal!!!!!!!!!
const xdeMacht_v3 = (number, exponent) => {
    return number ** exponent;
}

//exponent is eender wat
//kortere versie - met korte notatie
const xdeMacht = (number, exponent) => number ** exponent;

console.log("xDeMacht")
console.log(xdeMacht(4, 0)); // 1
console.log(xdeMacht(4, 1)); // 4 = 4
console.log(xdeMacht(4, 2)); // 4*4 = 16
console.log(xdeMacht(4, 3)); // 4*4*4 = 64
console.log(xdeMacht(4, 4)); // 4**4 = 4*4*4*4 = 256


