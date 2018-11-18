function send(){
	var selection = document.getElementsByClassName("selectTest");
	var indexNo = selection[0].selectedIndex;
	var value = document.getElementById("value").value;
	var recipient = document.getElementById("recipient").value;
	var password = document.getElementById("password").value;
	
	$.get("/send?index="+indexNo+"&value="+value+"&recipient="+recipient+"&password="+password, function(data) {
		
	});
}

//var table = document.getElementById("myTable");
//var row = table.insertRow(0);
//var cell1 = row.insertCell(0);
//var cell2 = row.insertCell(1);

//cell1.innerHTML = "qwer";
//cell2.innerHTML = "asdf";
