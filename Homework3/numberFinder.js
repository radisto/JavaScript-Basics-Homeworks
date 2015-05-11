function findMostFreqNum(arr) {
    var hashMap = [];
    var times = 0;
    var number = 0;
    for (var i in arr) {
        if (!hashMap[arr[i]]) {
            hashMap[arr[i]] = 1;
        }
        else {
            hashMap[arr[i]] += 1;
        }
    }
    for (var key in hashMap) {
        if (hashMap[key] > times) {
            times = hashMap[key];
            number = key;
        }
    }
    console.log(number + ' (' + times + ' times)');
}

findMostFreqNum([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]);
findMostFreqNum([2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]);
findMostFreqNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);