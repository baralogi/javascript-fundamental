/**
 * 255.800
 * 
 * 100.000 => ?
 * 10.000 => ?
 * 1000 => ?
 * 100 => ?
 */

let johnMoney = 255800

let seratusRibu = johnMoney / 100000
let sisa = johnMoney % 100000

let sepuluhRibu = sisa / 10000
sisa = sisa % 10000

let seribu = sisa / 1000
sisa = sisa % 1000

let seratus = sisa / 100
sisa = sisa % 100


console.log(`Uang seratus ribuan ada
 ${Math.floor(seratusRibu)}`);
 
console.log(Math.floor(sepuluhRibu));
console.log(Math.floor(seribu));
console.log(Math.floor(seratus));
console.log(sisa);