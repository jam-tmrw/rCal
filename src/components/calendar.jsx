require("./../main.scss");
var React = require('react');
var moment = require('moment');
var Header = require('./header');
var Interval = require('./interval');
var Buttons = require('./buttons');

var Calendar = React.createClass({

  getInitialState: function () {
    return {
      now: moment(),
      current: moment().startOf('month'),
      intervalType: 'week'
    };
  },

  changeDate: function(i) {
    var current;
    if (i === 0) {
      current = this.state.now.clone();
    }
    else {
      current = this.nextDate(i);
    }
    this.setState({
      current: current
    });
  },

  nextDate: function(i) {
    return this.state.current.clone().add(i, this.state.intervalType).startOf(this.state.intervalType);
  },

  changeInterval: function(selected) {
    this.setState({
      intervalType: selected
    });
  },

  render: function () {
    return (
      <div>
        <div className='nav'>
          <div className='date-selector'>
            <Buttons
              onSelect={this.changeDate}
              buttons={[
                {title: '<', value: -1},
                {title: 'Today', value: 0},
                {title: '>', value: 1}
              ]}
            />
          </div>
          <Header date={this.state.current.clone()} intervalType={this.state.intervalType} />
          <div className='interval-selectors'>
            <Buttons
              onSelect={this.changeInterval}
              buttons={[
                {title: 'day', value: 'day'},
                {title: 'week', value: 'week'},
                {title: 'month', value: 'month'}
              ]}
              selected={this.state.intervalType}
           />
          </div>
        </div>
        <div className='grid'>
          <Interval intervalType={this.state.intervalType} now={this.state.now} current={this.state.current.clone()} rows={this.props.rows} />
        </div>
      </div>
    );
  }
});

module.exports = Calendar;
