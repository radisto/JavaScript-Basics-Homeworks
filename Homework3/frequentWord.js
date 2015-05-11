function findMostFreqWord(str) {
    var words = str.toLowerCase().split(/[^a-z]/i);
    var arr = [];
    var arr2 = [];
    var i;
    var maxTimes = 0;
    for (i in words) {
        if (words[i].length > 0)
        {
            (!arr[words[i]] ? arr[words[i]] = 1 : arr[words[i]] += 1);
        }
    }
    for (i in arr) {
        if (arr[i] > maxTimes) {
            maxTimes = arr[i];
        }
    }
    for (i in arr) {
        if (arr[i] == maxTimes) {
            arr2.push(i);
        }
    }
    arr2.sort();
    for (i in arr2) {
        console.log(arr2[i] + ' -> ' + maxTimes + ' times');
    }
    console.log();

}

findMostFreqWord('in the middle of the night');
findMostFreqWord('Welcome to SoftUni. Welcome to Java. Welcome everyone.');
findMostFreqWord('Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.');