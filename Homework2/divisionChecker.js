function divisionBy3(number) {
    var str = number.toString();
    var sum = 0;
    for (var i=0; i<str.length; i++) {
        sum += str[i];
    }
    if (sum % 3 == 0) {
        console.log('the number is divided by 3 without remainder');
    }
    else {
        console.log('the number is not divided by 3 without remainder');
    }
}

divisionBy3(12);
divisionBy3(188);
divisionBy3(591);