function calcCylinderVol(arr) {
    var radius = arr[0];
    var height = arr[1];
    console.log((radius * radius * Math.PI * height).toFixed(3));
}

calcCylinderVol([2, 4]);
calcCylinderVol([5, 8]);
calcCylinderVol([12, 3]);