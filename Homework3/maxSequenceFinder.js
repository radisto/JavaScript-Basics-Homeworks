function findMaxSequence(arr) {
    var counter = 1;
    var maxCounter = 1;
    var index = 0;
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i+1]) {
            counter++;
            if (counter >= maxCounter) {
                maxCounter = counter;
                index = i - maxCounter + 2;
            }
        }
        else {
            counter = 1;
        }
    }
    var newArr = [];
    for (var j = index; j < index + maxCounter; j++) {
        newArr.push(arr[j]);
    }
    if (maxCounter > 1) {
        console.log(newArr);
    }
    else {
        console.log('no');
    }
}

findMaxSequence([3, 2, 3, 4, 2, 2, 4]);
findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]);
findMaxSequence([3, 2, 1]);