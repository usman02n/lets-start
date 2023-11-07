var colors = ["red", "green", "blue"];
// Intentionally access an out-of-range index
var index = 3;
var color = colors[index]; // This will produce an "undefined" error
// To correct the error, we can check if the index is valid
if (index >= 0 && index < colors.length) {
    var correctedColor = colors[index];
    console.log("Color at index ".concat(index, ": ").concat(correctedColor));
}
else {
    console.log("Index is out of range.");
}
