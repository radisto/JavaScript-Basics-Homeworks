function reverseWordsInString(str) {
    var arr = str.split(' ');
    var arr2 = [];
    for (var i in arr) {
        arr2.push(arr[i].split('').reverse().join(''));
    }
    console.log(arr2.join(' '));
}

reverseWordsInString("Hello, how are you.");
reverseWordsInString("Life is pretty good, isn’t it?");