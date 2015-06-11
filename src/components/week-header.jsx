React = require('react');
classNames = require('classNames');

var weekHeader = React.createClass({

  days: function () {
    var startOfWeek, format, days;

    startOfWeek = this.props.current.startOf('week');
    format = this.props.intervalType == 'week' ? 'ddd D' : 'ddd';
    days = [];

    for (i=0; i < 7; i++) {
       days[i] = startOfWeek.clone().add(i, 'days').format(format);
    }

    return days;
  },

    render: function() {
      var header;

      header = this.days().map(function(day, i) {
        var classes;

        classes = classNames({
          'day-of-week': true,
          'weekend': (i === 0 || i === 6)
        });

        return (
          <div  key={day} className={classes}>{day}</div>
        );
      });

      return (
        <div className='week-header'>{header}</div>
      );
    }
});

module.exports = weekHeader;
