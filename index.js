// Code your solutions in this file

const name = ["Guadalupe", "Ollie", "Aki"]
function writeCards(name) {
    for (let i = 0; i < name.length; i++) {
        console.log(`Thank you, ${name[i]}, for the wonderful surprise gift!`);
    }
    return writeCards(name.length);
}

function countDown(number) {
    while (number > 0) {
        console.log(number);
        number -= 1;
    }
    console.log(number);
}