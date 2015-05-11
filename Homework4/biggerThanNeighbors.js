function biggerThanNeighbors(index, arr) {
    var n = arr[index];
    var left = arr[index-1];
    var right = arr[index+1];
    if (isNaN(n)) {
        return 'invalid index';
    }
    if (isNaN(left) || isNaN(right)) {
        return 'only one neighbor';
    }
    if (n > left && n > right) {
        return 'bigger';
    }
    else {
        return 'not bigger';
    }

}

console.log(biggerThanNeighbors(2, [1, 2, 3, 3, 5]));
console.log(biggerThanNeighbors(2, [1, 2, 5, 3, 4]));
console.log(biggerThanNeighbors(5, [1, 2, 5, 3, 4]));
console.log(biggerThanNeighbors(0, [1, 2, 5, 3, 4]));