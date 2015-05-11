function findMaxSequence(arr) {
    var counter = 1;
    var maxCounter = 1;
    var index = 0;
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i+1]) {
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
    console.log(newArr);
}

findMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
findMaxSequence(['happy']);
findMaxSequence([2, 'qwe', 'qwe', 3, 3, '3']);