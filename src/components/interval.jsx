/*jshint esnext: true */
React = require('react');
Intervals = {
  month: require('./month'),
  week: require('./week'),
  day: require('./day')
};

var Interval = React.createClass({

  getInitialState: function () {
    return {
      interval: Intervals[this.props.intervalType]
    };
  },

  componentWillReceiveProps: function(nextProps) {
    if (nextProps.intervalType !== this.props.intervalType) {
      this.setState({
        interval: Intervals[nextProps.intervalType]
      });
    }
  },

  render: function () {
    var { type, ...other } = this.props;
    return (
      < this.state.interval {...other} />
    );
  }
});

module.exports = Interval;
