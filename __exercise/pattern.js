/**
 * Kelipatan 3 cetak PIBITI
 * Kelipatan 5 cetak JAVASCRIPT
 * Kelipatan 15 cetak INFORMATIKA
 */

let newArray = [];

for (let i = 1; i <= 15; i++) {

    if (i % 3 != 0 && i % 5 != 0) {
        newArray.push(i)
    }

    if (i % 3 == 0 && i % (3 * 5) != 0) {
        newArray.push("PIBITI")
    }

    if (i % 5 == 0 && i % (3 * 5) != 0) {
        newArray.push("JAVASCRIPT")
    }

    if (i % (3 * 5) == 0) {
        newArray.push("INFORMATIKA")
    }

}

for (const arrayItem of newArray) {
    console.log(arrayItem);
}