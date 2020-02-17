$(document).ready(function(){
// alert()
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};


function success(pos) {
  var crd = pos.coords;

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
//  var la1 = crd.latitude * 100;
//  var la1 = Math.round(la1);
//    console.log(la1);

  var la = (crd.latitude * 1000 - 40734)*450;
  var la = Math.round(la)
  var width = la + 'px'
  var width2 = la/1.5 + 'px'
  var width3 = la/1.8 + 'px'
  
  var height = la*2 + 'px'
  var height2 = la * 4 + 'px'
  var height3 = la*5 + 'px'
  
  var size =  la * la * la/1000000
 size = Math.round(size);
   var size2 =  la * la * la/10000000*1.5
 size2 = Math.round(size2);
   var size3 =  la * la * la/100000000*3
 size3 = Math.round(size3);


    var font = size + 'px'
    var font2 = size2 + 'px'
    var font3 = size3 + 'px'
    console.log(font);
    console.log(font2);
    console.log(font3);    
    var angle = size + 'deg'
      console.log(font);
  console.log(la);
    console.log(width);
        console.log(height);
    $(".p1").css({"background-color": "transparent", 
//     "width": width,"height":height,
	"line-height": font2,
    "font-size":font,"z-index":size});
    $(".p2").css({"background-color": "rgba(255, 25, 25, 0.42)", 
//     "width": width2,"height":height2, 
    "font-size":font2,"z-index":size2});
    $(".p3").css({"background-color": "blue",
//      "width": width3,"height":height3,
     "font-size":font3,"z-index":size3});
}



function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);

});


