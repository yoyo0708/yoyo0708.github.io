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
  var height = la*2 + 'px'
  var size =  la * la * la/10000000*2
 size = Math.round(size);
    console.log(size);
    var font = size + 'px'
      console.log(font);
  console.log(la);
    console.log(width);
        console.log(height);
    $(".p1").css({"background-color": "yellow", "width": width,"height":height,"font-size":font});
}



function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);

});


