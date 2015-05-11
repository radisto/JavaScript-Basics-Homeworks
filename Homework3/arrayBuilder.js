function createArray() {
    var arr = new Array(21);
    for (var i = 0; i < arr.length; i++) {
        arr[i] = i * 5;
    }
    console.log(arr.join(' '));
}

createArray();