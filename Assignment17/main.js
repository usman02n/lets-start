var guests = ["Naveed", "Saud", "Hussain", "Abrar", "Asad"];
console.log("You can invite only two people for dinner.");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry, ".concat(removedGuest, ", you're no longer invited to dinner."));
}
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("You're still invited to dinner, ".concat(guest, "."));
}
guests.length = 0; // Empty the list
console.log("Empty guest list:", guests);
