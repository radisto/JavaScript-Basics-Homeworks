function findLargestBySumOfDigits(arr) {
    var max = 0;
    var sum = 0;
    var index;
    for (var i in arr) {
        if (Number(arr[i])===arr[i] && arr[i]%1===0) {
            var str = arr[i].toString().replace('-', '');
            for (var j = 0; j < str.length; j++) {
                sum += Number(str[j]);
            }
            if (sum > max) {
                max = sum;
                index = i;
            }
            sum = 0;
        }
        else {
            return undefined;
        }
    }
    return arr[index];
}

console.log(findLargestBySumOfDigits([5, 10, 15, 111]));
console.log(findLargestBySumOfDigits([33, 44, -99, 0, 20]));
console.log(findLargestBySumOfDigits(['hello']));
console.log(findLargestBySumOfDigits([5, 3.3]));