function printNumbers(number) {
    var arr = [];
    var j = 0;
    for (var i = 1; i <= number; i++) {
        if (i % 4 == 0 || i % 5 == 0) {
            continue;
        }
        arr[j] = i;
        j++;
    }
    console.log(!(arr.length == 0)? arr.join(', ') : 'no');
}

printNumbers(20);
printNumbers(-5);
printNumbers(13);
