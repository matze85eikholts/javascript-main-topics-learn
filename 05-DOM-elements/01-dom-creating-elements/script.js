var div1 = document.getElementById('div1');
console.log(div1);
var unicycle = div1.getElementsByClassName('unicycle');
console.log(unicycle);
var paragraphs = document.getElementsByTagName('p');
console.log(paragraphs)
var queryUnicycle = document.querySelector('.unicycle');
console.log(queryUnicycle);
var queryAll = document.querySelectorAll('.unicycle, #div2');
console.log(queryAll);

var text = "<h1>Hello World!</h1>"
div2.innerHTML = text;

for(i = 0; i < queryAll.length; i ++) {
    queryAll[i].innerHTML = text;
}

queryUnicycle.textContent = text;

