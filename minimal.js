const minimal = (a,b) => (b<a) ? b : a

console.log(minimal(6,6));

function power(a,b) {
    return Math.pow(a, b)
}

const powerX = power(3,2)

console.log(powerX);