'use strict';

var DemoZero = React.createClass({
	displayName: 'DemoZero',

	render: function render() {
		return React.createElement(
			'h1',
			null,
			'Hello World'
		);
	}
});
ReactDOM.render(React.createElement(DemoZero, null), document.getElementById('js-container'));

//转码前
/*
var DemoZero = React.createClass({

	render: function() {
		return (
			<h1>Hello World</h1>
		);
	}

});

ReactDOM.render(
	<DemoZero />,
	document.getElementById('js-container')
)
*/