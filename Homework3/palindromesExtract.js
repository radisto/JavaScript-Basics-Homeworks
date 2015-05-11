function findPalindromes(str) {
    var arr = [];
    var words = str.toLowerCase().split(/[^a-z]/i);
    for (var i in words) {
        var word = words[i];
        var boolean = true;
        if (word) {
            for (var j = 0; j < word.length/2; j++) {
                if (word[j] != word[word.length-1-j]) {
                    boolean = false;
                    break;
                }
            }
            if (boolean) {
                arr.push(word);
            }
        }
    }
    console.log(arr);
}

findPalindromes('There is a man, his name was Bob.');