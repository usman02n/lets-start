function make_great(magicians: string[]): string[] {
    const greatMagicians = magicians.map((magician) => magician + ' the Great');
    return greatMagicians;
}

function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

const magicians: string[] = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];

const greatMagicians = make_great(magicians);
show_magicians(greatMagicians);
