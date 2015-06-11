/*jshint esnext: true */
var React = require('react');
var WeekHeader = require('./week-header');
var HourHeader = require('./hour-header');
var TimeLine = require('./time-line')
var DayCell = require('./day-cell');

var Week = React.createClass({

  days: function () {
    var days;

    days = [];
    for (i = 0; i < 7; i++) {
      var otherProps;
      otherProps = {inWeek: true};
      if (i === 0 || i === 6) {
        otherProps.weekend = true;
      }
      days.push(
        <DayCell key={i} {...this.props} {...otherProps} />
      );
    }

    return days;
  },


  render: function () {
    var week;

    week = this.days();
    week.unshift(<HourHeader key='header' current={this.props.current} />);

    return (
      <div>
        <WeekHeader current={this.props.current} intervalType={'week'} />
        <div className='week-grid'>
          <TimeLine />
          <table className='week'>
            <tbody>
              <tr>
                {week}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
});

module.exports = Week;
