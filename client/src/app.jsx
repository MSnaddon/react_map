var React = require('react');
var ReactDOM = require('react-dom');
var MapControls = require("./components/MapControls")
var MapObject = require('./models/MapObject.js')

window.onload = function(){
  ReactDOM.render(
    <MapControls mapObject={new MapObject(document.getElementById('map'))}/>,
    document.getElementById('controls')
  );
}
