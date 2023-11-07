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
var greatMagicians = make_great(magicians);
show_magicians(greatMagicians);
