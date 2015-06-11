React = require('react');
moment = require('moment');

var Header = React.createClass({

  render: function () {
    var formattedDate;
    formattedDate = (this.props.intervalType == 'day') ?  'dddd, MMMM D, YYYY': 'MMM YYYY';
    return (
    <div className='header'>
      {this.props.date.format(formattedDate)}
    </div>
    );
  }
});

module.exports = Header;
