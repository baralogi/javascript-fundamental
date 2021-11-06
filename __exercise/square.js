let rows = 3
let column = 4
let pattern = ''

for (let i = 0; i < rows; i++) {
    pattern += '\n';
    for (let j = 0; j < column; j++) {
        
        pattern += '*';
        
    }
}

console.log(pattern);