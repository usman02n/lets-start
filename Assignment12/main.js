var names = ["Saud", "Naveed", "Hussain", "Abrar"];
var greetingMessage = "Hello, ";
// Print personalized greetings to each person
names.forEach(function (name) {
    console.log("".concat(greetingMessage).concat(name, "!"));
});
