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
  var mylat = crd.latitude;
  console.log(mylat)
  var mylong = crd.longitude;
    console.log(mylong)
// for 16th street
// mylat = 40.736950;
// mylong = -73.992281;

// for uc
// mylat = 40.735496;
// mylong = -73.993492;

//for iss
// mylat = 40.735442;
// mylong = -73.994114;

//for making center
// mylat = 40.735419;
// mylong = -73.994872;

// for jazz
// mylat = 40.736547;
// mylong = -73.996621;

// for lang1
// mylat = 40.735528;
// mylong = -73.997019;

// for lang2
// mylat = 40.735241;
// mylong = -73.997464;

if (mylat>40.735070 && mylat<40.735950 && mylong>-73.993907 && mylong<-73.993072) { 
$(".parsons_uc").css({"visibility": "visible"})
$(".out").css({"visibility": "hidden"})
$(".nvg_place:nth-child(2)").css({"visibility": "visible"})
}else{
  $(".parsons_uc").css({"visibility": "hidden"})
  $(".nvg_place:nth-child(2)").css({"visibility": "hidden"})
}

if (mylat<40.737133 && mylat>40.736744 && mylong>-73.992523 && mylong<-73.992074) { 
$(".parsons_16").css({"visibility": "visible"})
$(".out").css({"visibility": "hidden"})
$(".nvg_place:nth-child(1)").css({"visibility": "visible"})
}else{
  $(".parsons_16").css({"visibility": "hidden"})
  $(".nvg_place:nth-child(1)").css({"visibility": "hidden"})
}

if (mylat>40.735383 && mylat<40.735754 && mylong>-73.994606 && mylong<-73.994022) { 
$(".parsons_iss").css({"visibility": "visible"})
$(".out").css({"visibility": "hidden"})
$(".nvg_place:nth-child(3)").css({"visibility": "visible"})

}else{
$(".parsons_iss").css({"visibility": "hidden"})
$(".nvg_place:nth-child(3)").css({"visibility": "hidden"})
}

if (mylat>40.735000 && mylat<40.735630 && mylong>-73.995120&& mylong<-73.994236) { 
$(".parsons_mk").css({"visibility": "visible"})
$(".out").css({"visibility": "hidden"})
$(".nvg_place:nth-child(4)").css({"visibility": "visible"})

}else{
  $(".parsons_mk").css({"visibility": "hidden"})
  $(".nvg_place:nth-child(4)").css({"visibility": "hidden"})
}

if (mylat>40.736347 && mylat<40.736755 && mylong>-73.996793&& mylong<-73.996065) { 
$(".parsons_jazz").css({"visibility": "visible"})
$(".out").css({"visibility": "hidden"})
$(".nvg_place:nth-child(5)").css({"visibility": "visible"})

}else{
  $(".parsons_jazz").css({"visibility": "hidden"})
  $(".nvg_place:nth-child(5)").css({"visibility": "hidden"})
}

if (mylat>40.735242 && mylat<40.735763 && mylong>-73.997547&& mylong<-73.996766) { 
$(".lang_1").css({"visibility": "visible"})
$(".out").css({"visibility": "hidden"})
$(".nvg_place:nth-child(6)").css({"visibility": "visible"})

}else{
  $(".lang_1").css({"visibility": "hidden"})
  $(".nvg_place:nth-child(6)").css({"visibility": "hidden"})
}

if (mylat>40.735081 && mylat<40.735422 && mylong>-73.997750&& mylong<-73.997239) { 
$(".lang_2").css({"visibility": "visible"})
$(".out").css({"visibility": "hidden"})
$(".nvg_place:nth-child(7)").css({"visibility": "visible"})

}else{
  $(".lang_2").css({"visibility": "hidden"})
  $(".nvg_place:nth-child(7)").css({"visibility": "hidden"})
}


};



function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};

navigator.geolocation.getCurrentPosition(success, error, options);
});