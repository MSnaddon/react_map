var React = require('react');
var CountrySelector = require('./CountrySelector')


var MapControls = React.createClass({
  getInitialState: function(){
    return {countries: [], focusCountry: null};
  },
  componentDidMount: function(){
    var url = "https://restcountries.eu/rest/v1/all";
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function() {
      var data = JSON.parse(request.responseText);
      this.setState({ countries: data })
    }.bind(this);
    request.send()
  },
  changeZoom: function(num){
    this.props.mapObject.changeZoom(num); 
  },
  centerMap: function(latLng){
    var latLng = {lat: latLng[0], lng: latLng[1]};
    console.log(latLng)
    this.props.mapObject.centerMap(latLng);
  },
  onSelectCountry: function(index){
    var latlng = this.state.countries[index].latlng
    this.centerMap(latlng);
  },
  render: function(){
    console.log("render")
    return(
      <div>
        <h1>These are controls</h1>
        <CountrySelector countries={this.state.countries} onSelectCountry={this.onSelectCountry}/>
      </div>
      )
  }
})

module.exports = MapControls;