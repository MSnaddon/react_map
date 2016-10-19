var React = require('react');
var ReactDOM = require('react-dom');
var Map = require("./components/Map")

window.onload = function(){
  ReactDOM.render(
    <Map/>,
    document.getElementById('app')
  );
}
