function updateColour() {
document.getElementById('dark').setAttribute('style','background : url(locate_tab_selected_bg.png)');
document.getElementById('dark1').setAttribute('style','background : url(locate_tab_bg.png)');
document.getElementById('dark2').setAttribute('style','background : url(locate_tab_bg.png)');

 point = new GLatLng(36.175152, -94.16494 );
        marker = new GMarker(point);
        map.setCenter(point, 14);
        map.addOverlay(marker);
                

}
function updateColour1() {
document.getElementById('dark').setAttribute('style','background : url(locate_tab_bg.png)');
document.getElementById('dark1').setAttribute('style','background : url(locate_tab_selected_bg.png)');
document.getElementById('dark2').setAttribute('style','background : url(locate_tab_bg.png)');
point = new GLatLng(40.187136, -74.863243 );
        marker = new GMarker(point);
        map.setCenter(point, 14);
        map.addOverlay(marker);


}
function updateColour2() {
document.getElementById('dark').setAttribute('style','background : url(locate_tab_bg.png)');
document.getElementById('dark1').setAttribute('style','background : url(locate_tab_bg.png)');
document.getElementById('dark2').setAttribute('style','background : url(locate_tab_selected_bg.png)');
point = new GLatLng(30.227718, -97.826373 );
        marker = new GMarker(point);
        map.setCenter(point, 16);
        map.addOverlay(marker);
}


var map;
var geocoder;

function initialize() {
	
	map = new GMap2(document.getElementById("map_canvas"));
	map.setCenter(new GLatLng(34, 0), 1);
	geocoder = new GClientGeocoder();

}
 $('.map_outline').live("pagecreate", function() {

            initialize();

        });

        $('.map_outline').live('pageshow',function(){

            //console.log("test");
            google.maps.event.trigger(map_canvas, 'resize');
            map1.setOptions(options1); 

        });
function addAddressToMap(response) {
	map.clearOverlays();
	if (!response || response.Status.code != 200) {
        alert("Sorry, we were unable to geocode that address");
	} else {
        place = response.Placemark[0];
        point = new GLatLng(place.Point.coordinates[1],
                            place.Point.coordinates[0]);
        marker = new GMarker(point);
        map.setCenter(point, 13);
        map.addOverlay(marker);
		var addr = document.getElementById('address');
		addr.firstChild.data = place.address;
	}
}

function showLocation() {
	var address = document.forms[0].q.value;
	geocoder.getLocations(address, addAddressToMap);
}

function findLocation(address) {
	document.forms[0].q.value = address;
	showLocation();
}

if (navigator.geolocation) {
	
	navigator.geolocation.getCurrentPosition(function(position) {  
											 s = position.coords.latitude+","+position.coords.longitude;
											 document.forms[0].q.value = s;
											 showLocation();
											 }); 
	
} else {
	alert("I'm sorry, but geolocation services are not supported by your browser.");
}  

function trygoogle() {
	
	setTimeout(function() {
			   // if pic2shop not installed yet, go to App Store
			   window.location = "http://itunes.com/apps/Products";
			   }, 25);
	// launch pic2shop and tell it to open Google Products with scan result
	window.location="Scanner://scan?callback=http%3A//www.google.com/m/products%3Fgl%3Dus%26source%3Dmog%26hl%3Den%26source%3Dgp2%26q%3DEAN%26btnProductsHome%3DSearch%2BProducts";
}

function callSafari(){
	window.location = "http://oor.cognizant.com/www/ScanDetails.html";
}
function hidePost1() 
   {
   
document.getElementById("bgdiv1").style.display = 'none';   


   
}
function hidePost() 
   {
   
document.getElementById("bgdiv").style.display = 'none';   


   
}

function hidePost2() 
   {
   
document.getElementById("bgdiv2").style.display = 'none';   


   
}

function hidePost3() 
   {
   
document.getElementById("bgdiv3").style.display = 'none';   


   
}

function fbs_click() {u=location.href;t=document.title;window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(u)+'&t='+encodeURIComponent(t),'sharer','toolbar=0,status=0,width=626,height=436');return false;}
function increment(myInput) {
  myInput.value = (+myInput.value + 1) || 0;
}

function PlayVideo(){
   var v = document.getElementsByTagName("video")[0];
   v.play();
}

function twit_click() {u=location.href;t=document.title;window.open('http://twitter.com/home?status=Check out DC web designer and SEO consultant - www.inqbation.com='+encodeURIComponent(u)+'&t='+encodeURIComponent(t),'sharer','toolbar=0,status=0,width=626,height=436');return false;}

function addToCart()
    {
       document.formName.action="addtocart.html";
       document.formName.submit();
    }
function imageClick() {
    alert('Product has been added to cart successfully');
}
