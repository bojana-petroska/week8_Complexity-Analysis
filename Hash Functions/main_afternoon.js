// Task 1: Simple Hashing Function (Using Sum of Character Codes)

function simpleHash(password) {
    let hash = 0;

    for (let char of password) {
        hash += char.charCodeAt();
        //console.log(char.charCodeAt())
    }
    //console.log(hash)
    return hash;
}

console.log(simpleHash('abc'));

// Task 2: Simple Hashing Function (Using Multiplicative Hashing)


const simpleMultiplicativeHash = (password) => {
    let hash = 0;

    for (let i = password.length - 1; i >= 0 ; i--) {
        const pos = i;
        console.log(`The position in reverse order is: ${pos}`);
        const singleHashedPassword = password.charCodeAt(i);

        hash += singleHashedPassword * Math.pow(31, pos);
        console.log(`Current hashed password is ${singleHashedPassword} for the letter ${password[i]}.`)
        console.log(`\n`);
    }

    return hash;
}

const passwordInput = 'abc'
const hashedPassword = simpleMultiplicativeHash(passwordInput);
console.log(`Hashed password for ${passwordInput} is: ${hashedPassword}`);