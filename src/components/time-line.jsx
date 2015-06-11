var React = require('react');
var moment = require('moment');

var TimeLine = React.createClass({

  render: function() {
    var now, minutesFromMidnight, nowTimeLineStyle;

    now = moment();
    minutesFromMidnight = (now.hours() * 63) + now.minutes();
    nowTimeLineStyle = {
      top: minutesFromMidnight
    };
    console.log(minutesFromMidnight)

    return (
        <div className='time-line' style={nowTimeLineStyle} >
            <div className='now-wrapper'>
              <div className='current-time' >
                {now.format('h:mm A')}
              </div>
              <div className='now-time-line' />
            </div>
        </div>
    );
  }
});

module.exports = TimeLine;
