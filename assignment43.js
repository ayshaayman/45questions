let magician = ['harry potter', 'heermoine', 'ron', 'dumbledore'];
function copyArray(arr) {
    return [...arr];
}
function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magicianArray[i] = ' the great ' + magicianArray[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
const copyMagicianArray = copyArray(magician);
make_great(copyMagicianArray);
console.log('this is my original array');
show_magicians(magician);
console.log('this is my modified copy of array');
show_magicians(copyMagicianArray);
export {};
