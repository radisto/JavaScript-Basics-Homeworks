function checkBrackets(str) {
    var a = 0;
    var b = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            a++;
        }
        if (str[i] === ')') {
            b++;
        }
    }
    console.log(a==b ? 'correct' : 'incorrect');
}

checkBrackets('( ( a + b ) / 5 – d )');
checkBrackets(') ( a + b ) )');
checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )');