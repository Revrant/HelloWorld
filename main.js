var size = 0;
var clicked = false;
var list = document.createElement('ul');
var data = [
	{
		title: "Go get milk",
		time: "12/7/2017 : 5:32"
	},
	{
		title: "Go to store",
		time: "1/13/2018 : 12:00"
	}
];

var addItem = function(title, load)
{
	var temp = document.getElementById('headerInput');

	if (temp.value === '' && !load) {
		alert("You need type something!");
	} else {
		
		var titlediv = document.createElement('div');
		var add = document.createElement('li');
		var close = document.createElement('div');
		var date = document.createElement('div');
		var currdate = new Date(Date.now());
		add.className = 'listitem';
		date.className = 'datetime';

		if (currdate.getMinutes() >= 10){
			date.innerHTML = (currdate.getMonth() - 1) + "/" + currdate.getDate() + "/" + currdate.getFullYear() + "   " + currdate.getHours() + ":" + currdate.getMinutes();
		} else {
			date.innerHTML = (currdate.getMonth() - 1) + "/" + currdate.getDate() + "/" + currdate.getFullYear() + "   " + currdate.getHours() + ":" + "0" + currdate.getMinutes();
		}	

		titlediv.innerHTML = title || temp.value;
		add.id = size + '';

		close.innerHTML = "x";
		close.onclick = function() {deleteItem(add.id)};
		
		close.className = "deletebutton";
		titlediv.className = "titlediv";
		size++;
		add.appendChild(titlediv);
		add.appendChild(date);
		add.appendChild(close);
		list.appendChild(add);

		temp.value = '';
	}
}

var deleteItem = function(id)
{
	var temp = document.getElementById(id);
	temp.parentNode.removeChild(temp);
}

var loadPage = function() {
	+new Date();
	var element = document.getElementById('root');
	var title = document.createElement('div');
	var header = document.createElement('div');
	var datalist = document.createElement('li');
	var text = document.createElement("input");
	var click = document.createElement('onclick');
	var button = document.createElement("button");

	text.id = 'headerInput';
	title.innerHTML = 'To Do List:';
	title.className = 'title';
	header.className = 'header';
	text.type = "text";
	text.className = "input";
	button.innerHTML = "Add to List";
	button.onclick = function() {addItem()};
	button.className = "pressbutton";
	list.className = "unlist";

	list.appendChild(datalist);
	header.appendChild(title);
	header.appendChild(text);
	header.appendChild(button);

	var metaTag=document.createElement('meta');
	metaTag.name = "viewport"
	metaTag.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
	document.getElementsByTagName('head')[0].appendChild(metaTag);
	viewport = document.querySelector("meta[name=viewport]");
	viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');

	element.appendChild(header);
	element.appendChild(list);

	loadData();
}

var loadData = function() {
	for (var i = 0; i < data.length; i++) {
		addItem(data[i].title, true);
	}
}

loadPage();
