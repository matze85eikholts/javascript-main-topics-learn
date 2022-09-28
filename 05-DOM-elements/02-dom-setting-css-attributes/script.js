var line = document.getElementById("line");
var attribute = document.getElementById("attribute");
line.style.color = 'red';
line.style.background = 'blue';

attribute.style.boxShadow = "5px 5px 5px 5px blue";
line.style.cssText = "color:blue; border:1px solid black;";

//--deletes all previous styles of attribute
attribute.setAttribute("style", "color:red; border:1px solid");
console.log(line.style);