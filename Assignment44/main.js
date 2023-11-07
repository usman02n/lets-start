function makeSandwich() {
    var ingredients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingredients[_i] = arguments[_i];
    }
    console.log("Making a sandwich with the following ingredients:");
    for (var _a = 0, ingredients_1 = ingredients; _a < ingredients_1.length; _a++) {
        var ingredient = ingredients_1[_a];
        console.log("- " + ingredient);
    }
    console.log("Sandwich is ready!\n");
}
// Call the function with different sets of ingredients
makeSandwich("Lettuce", "Tomato", "Turkey", "Mayo");
makeSandwich("Ham", "Cheese", "Mustard");
makeSandwich("Peanut Butter", "Jelly");
