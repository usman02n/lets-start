function make_great(magicians) {
    var greatMagicians = magicians.map(function (magician) { return magician + ' the Great'; });
    return greatMagicians;
}
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
var magicians = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];
// Create a copy of the original array
var copiedMagicians = magicians.slice();
// Call make_great() with the copied array
var greatMagicians = make_great(copiedMagicians);
// Display the original magicians
console.log('Original Magicians:');
show_magicians(magicians);
// Display the great magicians
console.log('\nGreat Magicians:');
show_magicians(greatMagicians);
