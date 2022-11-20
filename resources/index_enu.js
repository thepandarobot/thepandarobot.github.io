<!--
// cBR = 1:NN6+(Mozilla), 2:NN4, 3:IE, 4:Op, 0:others
var cBR = (window.opera?4:(window.external?3:(window.controllers?1:(document.layers?2:0)))); 
var sMenu0 = "";
var sMenu1 = "";
var sAmazon = "";

function getObj(name) {
	if (cBR == 3) {
		return document.all[name];
	} else if (cBR == 1 || cBR == 4) {
		return document.getElementById(name);
	} else {
		return null;
	};
};

function popupMenu() {
	if (sMenu0 != "") {
		getObj(sMenu0+"c").style.display = "none";
	};
	if (sMenu0 != sMenu1 && sMenu1 != "") {
		var oMenuC = getObj(sMenu1+"c");
		oMenuC.style.display = "block";
		sMenu0 = sMenu1;
	} else {
		sMenu0 = "";
	};
	sMenu1 = "";
	return false;
};

function setCol(obj, flg) {
	if(flg){
		obj.style.backgroundColor="#2020ff";
		obj.style.color="#e0e0e0";
		obj.style.cursor="pointer";
	}else{
		obj.style.backgroundColor="#a09c40";
		obj.style.color="#ffffff";
		obj.style.cursor="auto";
	};
};

function activeMenu(name) {
	getObj(name).src = "./Images/" + name + "a.gif";
	if (sMenu0 != "" && sMenu0 != name) {
		sMenu1 = name;
		popupMenu();
	};
};

function setAmazon(sname) {
	if (sname != sAmazon) {
		if (sname) {
			getObj('AMAZON').value = " " + sname;
		} else {
			getObj('AMAZON').value = " Amazon Product List";
		};
		sAmazon = sname;
	};
};

function loadImage(name, src) {
	if (document.images) {
		document.images[name].src = src;
	};
};

// -->