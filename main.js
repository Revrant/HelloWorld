var size = 0;
+new Date();

var element = document.getElementById('root');
var title = document.createElement('div');
title.innerHTML = 'List:';

var text = document.createElement("input"); 
text.type = "text";
text.className = "input";

var id = document.createElement("id");

var click = document.createElement('onclick');
var button = document.createElement("button");
button.innerHTML = "Add to List";
button.onclick = function() {addItem()};
button.className = "pressbutton";

var list = document.createElement('ul');
list.className = "unlist";

var addItem = function()
{
	if(text.value === ''){
		alert("You need type something!");
	}
	else{
		var titlediv = document.createElement('div');
		var add = document.createElement('li');
		var close = document.createElement('div');
		var date = document.createElement('datetime');
		var currdate = new Date(Date.now());

		date.className = 'datetime';
		if(currdate.getMinutes() >= 10){
			date.innerHTML = (currdate.getMonth() - 1) + "/" + currdate.getDate() + "/" + currdate.getFullYear() + "   " + currdate.getHours() + ":" + currdate.getMinutes();
		}
		else {
			date.innerHTML = (currdate.getMonth() - 1) + "/" + currdate.getDate() + "/" + currdate.getFullYear() + "   " + currdate.getHours() + ":" + "0" + currdate.getMinutes();

		}	


		titlediv.innerHTML = text.value;
		add.id = size + '';

	
		close.innerHTML = "x";
		close.style.color = 'red';
		close.onclick = function() {deleteItem(add.id)};
		

		close.className = "deletebutton";
		titlediv.className = "titlediv";
		size++;
		add.appendChild(titlediv);
		add.appendChild(close);
		add.appendChild(date);
		list.appendChild(add);
		text.value = '';
	}
}

var deleteItem = function(id)
{
	var temp = document.getElementById(id);

	temp.parentNode.removeChild(temp);
}

element.appendChild(button);
element.appendChild(text);
element.appendChild(title);
element.appendChild(list);
