/**
 * Menghitung banyaknya uang pecahan dari suatu angka (jumlah uang)
 * myMonex = x
 * Rp. 100000 = ?
 * Rp. 10000  = ?
 * Rp. 1000   = ?
 * Rp. 100    = ?
 */


let myMoney = 255800

let oneHundredThousand = myMoney / 100000;
let remains = myMoney % 100000;

let tenThousand = remains / 10000;
remains = remains % 10000;

let oneThousand = remains / 1000;
remains = remains % 1000;

let oneHundred = remains / 100;
remains = remains % 100;



console.log(`Jumlah uang ${myMoney}`);
console.log(`Jumlah ratusan ribu ${Math.floor(oneHundredThousand)}`);
console.log(`Jumlah ratusan ribu ${Math.floor(tenThousand)}`);
console.log(`Jumlah ratusan ribu ${Math.floor(oneThousand)}`);
console.log(`Jumlah ratusan ribu ${Math.floor(oneHundred)}`);
