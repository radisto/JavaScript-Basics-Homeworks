function countDivs(html) {
    var arr = html.split('<');
    var sum = 0;
    for (var i in arr) {
        if (arr[i][0] == 'd' && arr[i][1] == 'i' && arr[i][2] == 'v') {
            sum++;
        }
    }
    console.log(sum);
}

countDivs('<!DOCTYPE html> <html> <head lang="en"> <meta charset="UTF-8"> <title>index</title> ' +
'<script src="/yourScript.js" defer></script> </head> <body> <div id="outerDiv"> <divclass="first"> ' +
'<div><div>hello</div></div> </div> <div>hi<div></div></div> <div>I am a div</div> </div> </body> </html>');