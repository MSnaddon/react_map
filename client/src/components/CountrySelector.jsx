var React = require('react');

var CountrySelector = React.createClass({
  handleChange: function(event){
      var newIndex = event.target.value;
      //send info back up
      this.props.onSelectCountry(newIndex);
    },  
  render: function() {
    var options = this.props.countries.map(function(country, index){
      return <option key={index} value={index}>{country.name}</option>
    })

    return(
      <select id="countries" onChange={this.handleChange}>
        <option selected="true" disabled="disabled">Select Country</option>
        {options}
      </select>
    )
  }
})


module.exports = CountrySelector;