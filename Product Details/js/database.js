 
var descId;
function loadTable()
{
	
	var db = window.openDatabase("Database", "1.0", "Demo", 2000000);
	
	db.transaction(populateDB, errorCB, successCB);
	
}

function populateDB(tx) {
	
	tx.executeSql('DROP TABLE IF EXISTS EMPLOYEE');
	
	tx.executeSql('CREATE TABLE IF NOT EXISTS EMPLOYEE (id unique, pName,pDesc,pPrice,pImage)');
	
	tx.executeSql('INSERT INTO EMPLOYEE (id, pName,pDesc,pPrice,pImage) VALUES (0, "iBall Rocky Clarity Headsets","1 Year Manufacturer warranty","$12.21","prd_img1.png")');
	
	tx.executeSql('INSERT INTO EMPLOYEE (id, pName,pDesc,pPrice,pImage) VALUES (1, "Sandisk USB Pendrive","32GB Slider","$ 15.30","prd_img2.png")');
	
	tx.executeSql('INSERT INTO EMPLOYEE (id, pName,pDesc,pPrice,pImage) VALUES (2, "Enter USB 2.0 Speaker","6 Months Vendor Warranty","$20.00","prd_img3.png")');
	
	tx.executeSql('INSERT INTO EMPLOYEE (id, pName,pDesc,pPrice,pImage) VALUES (3, "Dp Branded 31 LED","Flexible Rechargable Table Lamp","$15.00","prd_img4.png")');

}



// Transaction error callback

function errorCB(err) {
	
	alert("Error");
	
	console.log("Error processing SQL: "+err.code);
}

// Transaction success callback

function successCB() {
	
	//  alert("Success");
	var db = window.openDatabase("Database", "1.0", "Demo", 2000000);
	
	db.transaction(queryDB, errorCB);
}

function selectDescription(){
	var db = window.openDatabase("Database", "1.0", "Demo", 2000000);
	
	db.transaction(queryDesc, errorCB);
}

// Query the database

function queryDB(tx) {
	tx.executeSql('SELECT * FROM EMPLOYEE', [], querySuccess, errorCB);
}          

function queryDesc(tx) {
	
	
	tx.executeSql('SELECT * FROM EMPLOYEE WHERE id = ?', [2], queryDescSuccess, errorCB);
}

// Query the success callback
function queryDescSuccess(tx, results) {
	var len = results.rows.length;
	alert(len);
}

//
var finalTable;

function querySuccess(tx, results) {
	var len = results.rows.length;
	var tblDesign="";
	var i;
	var tblWidth = 200;
	var value = 23;
	//var sheet = document.createElement('style')
	//	sheet.innerHTML = "ul.prod {border: 2px solid black; background-color: Red;height: 60px; text-align:left;}";
	//	document.body.appendChild(sheet);
	
	for ( i=0; i<len; i++){
		
		if	(i%2 == 0)
		{
			if	(i == 0)

			{
				tblDesign = tblDesign+"<div id = \"product\"><a href=\"proddet2.html?"+results.rows.item(i).id+"\""+" STYLE=\"TEXT-DECORATION: NONE\" data-transition=\"flip\"><div class=\"row-list2\"><div class=\"row-image\"><IMG SRC=\""+results.rows.item(i).pImage+"\"></div><h5 class=\"label1\">"+results.rows.item(i).pName+"</h5><h5 class=\"label2\">"+results.rows.item(i).pDesc+"</h5><h5 class=\"label3\">Price: <h5 class=\"price\">"+results.rows.item(i).pPrice+"</h5></h5><div class=\"arrow-list\" ></div></div></a></div>";
				
			}
			else
			{
				tblDesign = tblDesign+"<a href=\"proddet2.html?"+results.rows.item(i).id+"\""+" STYLE=\"TEXT-DECORATION: NONE\" data-transition=\"flip\"><div class=\"row-list\"><div class=\"row-image\"><IMG SRC=\""+results.rows.item(i).pImage+"\"></div><h5 class=\"label1\">"+results.rows.item(i).pName+"</h5><h5 class=\"label2\">"+results.rows.item(i).pDesc+"</h5><h5 class=\"label3\">Price: <h5 class=\"price\">"+results.rows.item(i).pPrice+"</h5> </h5><div class=\"arrow-list\"></div></div></a>";
			}
			
		}
		else{
			if	(i == 3)

			{
				tblDesign = tblDesign+"<div id = \"product\"><a href=\"proddet.html?"+results.rows.item(i).id+"\""+" STYLE=\"TEXT-DECORATION: NONE\" data-transition=\"flip\"><div class=\"row-list2\"><div class=\"row-image\"><IMG SRC=\""+results.rows.item(i).pImage+"\"></div><h5 class=\"label1\">"+results.rows.item(i).pName+"</h5><h5 class=\"label2\">"+results.rows.item(i).pDesc+"</h5><h5 class=\"label3\">Price: <h5 class=\"price\">"+results.rows.item(i).pPrice+"</h5></h5><div class=\"arrow-list\"></div></div></a></div>";
				
			}
	else
	{



			
				tblDesign = tblDesign+"<div id = \"product\"><a href=\"details.html?"+results.rows.item(i).id+"\""+" STYLE=\"TEXT-DECORATION: NONE\" data-transition=\"flip\"><div class=\"row-list2\"><div class=\"row-image\"><IMG SRC=\""+results.rows.item(i).pImage+"\"></div><h5 class=\"label1\">"+results.rows.item(i).pName+"</h5><h5 class=\"label2\">"+results.rows.item(i).pDesc+"</h5><h5 class=\"label3\">Price: <h5 class=\"price\">"+results.rows.item(i).pPrice+"</h5></h5><div class=\"arrow-list\"></div></div></a></div>";
				
			

	}

		}
	}
	

	
	document.getElementById('prod_details').innerHTML = tblDesign;
}

function getBarcodeValue()
{
	var	id = window.location.search.substring(1);
	descId = id;
	
	selectDescription();
}
function hidePost1() 
   {
   
document.getElementById("bgdiv1").style.display = 'none';   


   
}
