function findCardFrequency(str) {
    var cards = str.split(/\W+/);
    var arr = [];
    var i;
    for (i = 0; i < cards.length - 1; i++) {
        (!arr[cards[i]] ? arr[cards[i]] = 1 : arr[cards[i]]++);
    }
    for (i in arr) {
        console.log(i + ' -> ' + (arr[i]/(cards.length-1)*100).toFixed(2) + '%');
    }
    console.log();

}

findCardFrequency('8♥ 2♣ 4♦ 10♦ J♥ A♠ K♦ 10♥ K♠ K♦');
findCardFrequency('J♥ 2♣ 2♦ 2♥ 2♦ 2♠ 2♦ J♥ 2♠');
findCardFrequency('10♣ 10♥');