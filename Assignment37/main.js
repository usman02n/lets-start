function make_shirt(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("Shirt size: ".concat(size));
    console.log("Message on the shirt: ".concat(message));
}
// Call the function with default values
make_shirt(); // Large shirt with the default message
// Call the function with a medium shirt and the default message
make_shirt('Medium');
// Call the function with a small shirt and a different message
make_shirt('Small', 'TypeScript is awesome');
