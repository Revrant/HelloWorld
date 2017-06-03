function addItem()
{
	var add = document.createElement('li');
	add.innerHTML = text.value;

	if(text.value == ''){
		alert("You need type something!");
	}
	else{
		para.appendChild(add);
		text.value = '';
	}
}


var element = document.getElementById('root');
var title = document.createElement('div');
title.innerHTML = 'List:';

var text = document.createElement("input"); 
text.type = "text";

var click = document.createElement('onclick');
var button = document.createElement("button");
button.innerHTML = "Add to List";
button.onclick = function() {addItem()};

var para = document.createElement('ul');
para.className = "unlist";

element.appendChild(button);
element.appendChild(text);
element.appendChild(title);
element.appendChild(para);
