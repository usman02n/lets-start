var favorite_fruits = ["bananas", "strawberries", "apples"];
var fruitsToCheck = ["bananas", "kiwis", "pears", "mangoes", "apples"];
for (var _i = 0, fruitsToCheck_1 = fruitsToCheck; _i < fruitsToCheck_1.length; _i++) {
    var fruit = fruitsToCheck_1[_i];
    if (favorite_fruits.indexOf(fruit) !== -1) {
        console.log("You really like ".concat(fruit, "!"));
    }
}
