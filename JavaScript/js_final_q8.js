function namePrompt() {
		var name = prompt("Enter Name:");
		document.getElementById('txtBox').value = name;
	}

function copyText(val) {
	document.getElementById('txtBox2').value = val;
}

function IsValid() {
	if(document.getElementById('name').value.length && document.getElementById('age').value>=18) {
		alert("Succesfully submitted.");
		return true;
	}
	else {
		alert("Error! (Name field is required & age must be greater than or equals to 18)");
		return false;
	}
}

function changeColor() {
	arguments[0].style.backgroundColor = "#00f"
}

function restoreColor() {
	arguments[0].style.backgroundColor = "#0f0"
}