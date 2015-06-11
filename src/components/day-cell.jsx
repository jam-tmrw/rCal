/*jshint esnext: true */
var React = require('react');
var classNames = require('classNames');
var HalfHour = require('./half-hour');

var DayCell = React.createClass({

    halfHours: function () {
      var halfHours;

      halfHours = [];
      for (i = 0; i < 48; i++) {
        halfHours.push(
          <HalfHour key={i} {...this.props}/>
        );
      }

      return halfHours;
    },

    render: function () {
      var classes;

      classes = classNames({
        'day-cell': true,
        'in-week': this.props.inWeek,
        'weekend': this.props.weekend
      });

      return (
        <td className={classes}>
          {this.halfHours()}
        </td>
      );
    }
});

module.exports = DayCell;
