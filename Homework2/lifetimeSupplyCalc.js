function calcSupply(age, maxAge, food, foodPerDay) {
    console.log((maxAge - age) * 365 * foodPerDay + 'kg of ' + food + ' would be enough until I am ' + maxAge + ' years old.');
}

calcSupply(38, 118, 'chocolate', 0.5);