React = require('react');
moment = require('moment');

var HourHeader = React.createClass({

  showTime: function (hour, now) {
    if (hour === now[0] && now[1] < 10) {
      return false;
    }
    else if ((hour - 1) === now[0] && now[1] > 50) {
      return false;
    }
    else {
      return true;
    }
  },

  render: function () {
    var hours, hour, amPm, now, time;

    now = moment().format('H m').split(' ')
      .map(function(s) {
        return parseInt(s);
      });

    hours = [];
    for (i = 1; i < 24; i++) {
      hour = i % 12 === 0 ? 12 : i % 12;
      amPm = i < 12 ? 'AM' : 'PM';
      time = (this.showTime(i, now)) ? (hour + ' ' + amPm) : '';
      hours.push(
        <div key={hour + amPm} className='hour'>
          <div className = 'hour-text' >
            {time}
          </div>
        </div>
      );
    }

    return (
      <td className='hour-header'>
          {hours}
      </td>
    );
  }
});

module.exports = HourHeader;
