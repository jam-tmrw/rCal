var React = require('react');
var moment = require('moment');
var MonthCell = require('./month-cell');
var WeekHeader = require('./week-header');

var Month = React.createClass({

  propTypes: {
    current: React.PropTypes.object,
    now: React.PropTypes.object,
    grid: React.PropTypes.number
  },

  getDefaultProps: function () {
    return {
      grid: 42
    };
  },

  days: function(){
    var current, previousDaysCount, relativeDay, month, index, propsToPass;

    current = this.props.current;
    previousDaysCount = this.previousDaysCount(current.clone());
    month = [];
    for (row = 0; row < this.props.rows; row++) {
      week = [];
      for (col = 0; col < 7; col++) {
        index = (row * 7) + col;
        relativeDay = index - previousDaysCount;
        propsToPass = {
          date: moment([current.year(),current.month(),relativeDay])
        };

        if (this.isToday(index, previousDaysCount, current)) {
            propsToPass.isToday = true;
        }
        if (col === 0 || col === 6) {
          propsToPass.isWeekend = true;
        }

        week.push(<MonthCell
          key = {'grid-' + row + '-' + col} {...propsToPass}
        />);
      }
      month.push(
        <tr key={row}>{week}</tr>
      );
    }

    return month;
  },

  isThisMonth: function () {
    return this.props.current.format('M YY') === this.props.now.format('M YY');
  },

  isToday: function(i, previousDaysCount, current) {
    todayIndex = this.props.now.date() + previousDaysCount;
    return (todayIndex == i) && this.isThisMonth();
  },

  previousDaysCount: function(current) {
    var startOfMonthDay = current.startOf('month').weekday();
    return startOfMonthDay - 1;
  },

  isWeekend: function(i) {
    return (i === 0) || (i % 7 === 0) || (i % 7 === 6);
  },

  render: function(){
    return (
      <div>
        <WeekHeader current={this.props.current} interval={'month'} />
        <table className='month'>
          <tbody>
            {this.days()}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = Month;
