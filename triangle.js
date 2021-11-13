// fungsi menentukan bentuk segitiga, 
// apakah segitiga itu sama sisi, sama kaki, sembarang
// parameter number, a,b,dan c
// validation fungsi

class validationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

const validateNumberInput = (a, b, c) => {
    if (typeof a != 'number') {
        throw new validationError("Argumen pertama harus number");
    }
    if (typeof b != 'number') {
        throw new validationError("Argumen kedua harus number");
    }
    if (typeof c != 'number') {
        throw new validationError("Argumen ketiga harus number");
    }
}

const triangle = (a, b, c) => {
    try {
        validateNumberInput(a, b, c)
        if (a === b && b === c) {
            return "Segitiga Sama Sisi"
        }
        if (a === b || a === c || b === c) {
            return "Segitiga Sama Kaki"
        }

        return " Segitiga Sembarang"
    } catch (error) {
        return error.message
    }
}

console.log(triangle(9,true,""));