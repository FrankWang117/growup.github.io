'use strict';

var FormInput = React.createClass({
	displayName: 'FormInput',

	getInitialState: function getInitialState() {
		return {
			value: 'Hello,there'
		};
	},

	handle: function handle(event) {
		this.setState({
			value: event.target.value
		});
	},
	render: function render() {
		var uvalue = this.state.value;
		return React.createElement(
			'div',
			null,
			React.createElement('input', {
				type: 'text',
				value: uvalue,
				onChange: this.handle
			}),
			React.createElement(
				'p',
				null,
				uvalue
			)
		);
	}
});
ReactDOM.render(React.createElement(FormInput, null), document.getElementById('js-container'));
//转码前
/*
var FormInput = React.createClass({
	getInitialState: function() {
		return {
			value: 'Hello,there'
		};
	},
	
	handle: function(event) {
		this.setState({
			value: event.target.value
		});
	},
	render: function() {
		var uvalue = this.state.value;
		return (
			<div>
		<input type="text" value={uvalue} onChange={this.handle} />
		<p>{uvalue}</p>
		</div>);
	}
});
ReactDOM.render(
	<FormInput />,
	document.getElementById('js-container')
)
*/