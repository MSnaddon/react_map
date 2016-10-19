var React = require('react');


var Map = React.createClass({
  componentWillMount: function(){
    console.log("We shall mount");
  },
  componentDidMount: function(){
    console.log("New up the map");
  },
  render: function(){
    console.log("render")
    return(
        <div id="map">blah blah Sian is awesome</div>
      )
  }
})

module.exports = Map;