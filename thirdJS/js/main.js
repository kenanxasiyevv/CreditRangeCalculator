var rslt1 = document.getElementById('result');
var rslt2 = document.getElementById('result2');
var rslt3 = document.getElementById('result3');


var total = document.getElementById('total');

function Slide1() {
    var slider = document.getElementById('range').value;
    rslt1.innerHTML = slider + ' AZN'
    document.getElementById('1').value=slider
}

function Slide2() {
    var slider2 = document.getElementById('range1').value;
    rslt2.innerHTML = slider2 + ' Ay'
    document.getElementById('2').value=slider2;
}

function Slide3() {
    var slider3 = document.getElementById('range2').value;
    rslt3.innerHTML = slider3 + '%';
    document.getElementById('3').value=slider3
}

var button = document.getElementById('btn');

button.onclick = function () {
    var h1 = Number(document.getElementById('1').value);
    var h2 = Number(document.getElementById('2').value);
    var h3 = Number(document.getElementById('3').value);
    var total = document.getElementById('total')
    var total1 =document.getElementById('total1')
    
    var a = (h1 * (100 + h3)) / 100/h2
    var b = (h1 * (100 + h3)) / 100 
    total.innerHTML = a.toFixed(2)
    total1.innerHTML = b.toFixed(2)
}