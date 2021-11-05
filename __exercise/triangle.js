let rows = 5;
let segitigaKebawah = '';

for (let i = 0; i < rows; i++) {
    for (let j = 0; j <= i; j++) {
        segitigaKebawah += '*';
    }
    segitigaKebawah += '\n';
}
console.log(segitigaKebawah);
