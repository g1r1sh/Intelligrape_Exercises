function showDate() {
	var d= new Date();
	document.getElementById(arguments[0]).innerHTML = d.toUTCString();
}

 function showFormatedDate() {
 	var d= new Date();
 	var month = d.getMonth()+1;
 	switch(month) {
 		case 1: month = "January";
 		case 2: month = "February";
 		case 3: month = "March";
 		case 4: month = "April";
 		case 5: month = "May";
 		case 6: month = "June";
 		case 7: month = "July";
 		case 8: month = "August";
 		case 9: month = "September";
 		case 10:month = "October";
 		case 11:month = "November";
 		case 12:month = "December";
 	}
 	document.getElementById(arguments[0]).innerHTML = d.getDate()+ " " + month + "," + d.getFullYear() + " " + d.toTimeString().slice(0,8);	
  }

function showFormatedTime() {
 	var d= new Date();
 	document.getElementById(arguments[0]).innerHTML += d.toTimeString().slice(0,8);	
}


