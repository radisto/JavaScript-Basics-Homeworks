function checkDigit(number) {
    var str = number.toString();
    console.log(str[str.length - 3] == '3');
}

checkDigit(1235);
checkDigit(25368);
checkDigit(123456);