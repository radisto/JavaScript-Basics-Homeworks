var radius = [7, 1.5, 20];
var area = [];
var output = [];
calcCircleArea(radius);

function calcCircleArea(r) {
	for (var i = 0; i < r.length; i++) {
	area[i] = r[i] * r[i] * Math.PI;
	output[i] = ('r = ' + r[i] + '; area = ' + area[i]);
	}
	for (var j = 0; j < area.length; j++) {
		document.getElementById('here').innerHTML += output[j] + '<br/>';
	}
}