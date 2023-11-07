function describe_city(city, country) {
    if (country === void 0) { country = 'Unknown'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Call the function for three different cities
describe_city('Karachi', 'Pakistan'); // Karachi is in Pakistan
describe_city('New York', 'USA'); // New York is in USA
describe_city('Sydney'); // Sydney is in Unknown
