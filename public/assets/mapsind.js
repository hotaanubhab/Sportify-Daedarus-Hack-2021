
let map,service, infoWindow;

function initMap() {  
  var myLatlng = { lat: 20.5937, lng:  78.9629 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: myLatlng,
    // map-control:false
  });
  marker = new google.maps.Marker({
    position: myLatlng,
    draggable: false
  });
  x=navigator.geolocation;
  x.getCurrentPosition(success,failure);
  function failure(){
    
  }
  function success(position) {

    myLatlng={ lat: position.coords.latitude, lng: position.coords.longitude };
    map.setOptions({
      center: myLatlng,
      zoom: 16
    });
    marker.setPosition(myLatlng);
    marker.setMap(map);  
  }
  
  marker.setMap(map);



  marker.addListener("click", () => {
  map.setZoom(16);
  map.setCenter(marker.getPosition());
  map.setMarker(marker);
});
}