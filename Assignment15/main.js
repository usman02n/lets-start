var guests = ["Alice", "Bob", "Carol", "David"];
var unableToAttend = "Bob";
if (guests.indexOf(unableToAttend) !== -1) {
    // Guest unable to attend is found in the guests array
    console.log("Sorry, ".concat(unableToAttend, " can't make it to the dinner."));
    // Handle the replacement invitation or other actions
}
else {
    // Guest unable to attend is not in the guests array
    console.log("".concat(unableToAttend, " is not in the list of invited guests."));
    // No action needed or different handling
}
