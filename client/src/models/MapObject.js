

var MapObject = function(container) {

  this.map = new google.maps.Map(container, {
    center: {lat: 34, lng: 150},
    zoom: 1
  });
  this.markers = [];
}

MapObject.prototype = {
  setMarker: function(){
    var marker = new google.maps.Marker({
      position: {lat: 34, lng: 0},
      map: this.map
    })
  },
  changeZoom: function(num){
    this.map.setZoom(num)
  },
  centerMap: function(latlng){
    this.map.setCenter(latlng)
  }
}

module.exports = MapObject;