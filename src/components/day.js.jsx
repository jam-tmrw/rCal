/*jshint esnext: true */
var React = require('react');
var HourHeader = require('./hour-header');
var DayCell = require('./day-cell');
var TimeLine = require('./time-line');

var Day = React.createClass({

  render: function () {


    return (
      <div>
        <div className='day-header'>{this.props.current.format('M/D')}</div>
        <div className='day-grid'>
          <TimeLine />
          <table className='day'>
            <tbody>
              <tr>
                <HourHeader current={this.props.current} />
                <DayCell {...this.props}/>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
});

module.exports = Day;
