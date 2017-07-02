function get_location() {
  var a = navigator.geolocation.getCurrentPosition();
  console.log(a);
}
get_location();