var React = require('react');
var moment = require('moment');
var classNames = require('classNames');

var Buttons = React.createClass({

    propTypes: {
        selected: React.PropTypes.string,
        buttons: React.PropTypes.arrayOf(
          React.PropTypes.object
        )
    },

    getDefaultProps: function () {
      return {
        selected: ''
      };
    },

    render: function () {
      var buttons = this.props.buttons.map(function(button) {
        var buttonClasses = classNames({
          button: true,
          selected: this.props.selected === button.value
        });
        return (
          <button
            type='button'
            title={button.title}
            value={button.value}
            key={button.value}
            className={buttonClasses}
            onClick={this.props.onSelect.bind(null, button.value)}
          >
            {button.title}
          </button>
        );
      }, this);
      return (
        <div className='buttons'>
          {buttons}
        </div>
      );
    }
});

module.exports = Buttons;
