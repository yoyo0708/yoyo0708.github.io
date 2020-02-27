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
// mylat = 40.735558;
// mylong = -73.994215;

//for making center 5ave
// mylat = 40.735435;
// mylong = -73.994845;

// // for jazz
// mylat = 40.736247;
// mylong = -73.996621;

// for mk east
// mylat = 40.734926;
// mylong = -73.992738;

// for lang
// mylat = 40.735241;
// mylong = -73.997464;

if (mylat>40.735070 && mylat<40.735950 && mylong>-73.993907 && mylong<-73.993072) { 
$(".parsons_uc").css({"display": "block"});
$(".out").css({"display": "none"});

$(".arrow_3").css({"display": "block"});
$(".tag_3").css({"display": "block"});
$(".tag_3").append("3.Welcome Center");

$(".arrow_1").css({"display": "block"});
$(".tag_1").css({"display": "block"});
$(".tag_1").append("1. New School 16 Street");

}else{
  $(".parsons_uc").css({"display": "none"});

}

if (mylat<40.737133 && mylat>40.736744 && mylong>-73.992523 && mylong<-73.992074) { 
$(".parsons_16").css({"display": "block"});
$(".out").css({"display": "none"});

$(".arrow_4").css({"display": "block"});
$(".tag_4").css({"display": "block"});
$(".tag_4").append("2.University Center");

}else{
  $(".parsons_16").css({"display": "none"});
}

if (mylat>40.735383 && mylat<40.735754 && mylong>-73.994606 && mylong<-73.994100) { 
$(".parsons_iss").css({"display": "block"});
$(".out").css({"display": "none"});

$(".arrow_4").css({"display": "block"});
$(".tag_4").css({"display": "block"});
$(".tag_4").append("4.Making Center 5Ave");

$(".arrow_2").css({"display": "block"});
$(".tag_2").css({"display": "block"});
$(".tag_2").append("2.University Center");
}else{
$(".parsons_iss").css({"display": "none"});
}

if (mylat>40.735007 && mylat<40.735672 && mylong> -73.995135&& mylong<-73.994227) { 
$(".parsons_mk").css({"display": "block"});
$(".out").css({"display": "none"});

$(".arrow_1").css({"display": "block"});
$(".tag_1").css({"display": "block"});
$(".tag_1").append("3.Welcome Center");

$(".arrow_2").css({"display": "block"});
$(".tag_2").css({"display": "block"});
$(".tag_2").append("5.Making Center East");

}else{
  $(".parsons_mk").css({"display": "none"});
}

if (mylat<40.736347 && mylat>40.735650 && mylong>-73.996793&& mylong< -73.995156) { 
$(".parsons_jazz").css({"display": "block"});
$(".out").css({"display": "none"});

$(".arrow_2").css({"display": "block"});
$(".tag_2").css({"display": "block"});
$(".tag_2").append("5.Making Center East");

$(".arrow_4").css({"display": "block"});
$(".tag_4").css({"display": "block"});
$(".tag_4").append("7.Eugene Lang");

}else{
  $(".parsons_jazz").css({"display": "none"});
}

if (mylat>40.734706 && mylat<40.735324 && mylong>-73.992992&& mylong< -73.992488) { 
$(".parsons_mk_s").css({"display": "block"});
$(".out").css({"display": "none"});

$(".arrow_3").css({"display": "block"});
$(".tag_3").css({"display": "block"});
$(".tag_3").append("4. Making Center 5Ave 6.Mannes School of Music");


}else{
  $(".parsons_mk_s").css({"display": "none"});
}

if (mylat>40.73500 && mylat<40.735788 && mylong>-73.997750&& mylong<-73.996766) { 
$(".lang").css({"display": "block"});
$(".out").css({"display": "none"});

$(".arrow_1").css({"display": "block"});
$(".tag_1").css({"display": "block"});
$(".tag_1").append("6.Mannes School of Music");


}else{
  $(".lang").css({"display": "none"});
}


};



function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};

navigator.geolocation.getCurrentPosition(success, error, options);
});