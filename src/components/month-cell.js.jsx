React = require('react');
classNames = require('classNames');

var MonthCell = React.createClass({

    render: function() {

      var dayClasses = classNames({
        'month-day': true,
        'weekend': this.props.isWeekend

      });

      var dateClasses = classNames({
        'date': true,
        'current-month': this.props.date.isValid(),
        'today': this.props.isToday
      });

      return (
        <td className={dayClasses}>
          <div className='month-day-header'>
            <div className={dateClasses}>{this.props.date.date()}</div>
          </div>
        </td>
      );
    }
});

module.exports = MonthCell;
