function displayProperties() {
    var b = [];
    for (var a in window.document) {
        b.push(a);
    }
    b.sort();
    console.log(b);
}

displayProperties();