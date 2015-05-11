function compareChars(arr1, arr2) {
    var isEqual = true;
    if (arr2.length > arr1.length) {
        var arr3 = arr2.slice(0);
        arr2 = arr1.slice(0);
        arr1 = arr3.slice(0);
    }
    for (var i in arr1) {
        if (arr1[i] !== arr2[i]) {
            isEqual = false;
        }
    }
    console.log(isEqual? 'Equal' : 'Not Equal');
}

compareChars(['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'],
    ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q']);
compareChars(['3', '5', 'g', 'd'],
    ['5', '3', 'g', 'd']);
compareChars(['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'],
    ['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r']);