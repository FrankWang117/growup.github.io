'use strict';

var DeomComp = React.createClass({
	displayName: 'DeomComp',

	render: function render() {
		return React.createElement(
			'h1',
			null,
			'hello,React'
		);
	}
});
ReactDOM.render(React.createElement(DeomComp, null), document.getElementById('js-container'));


//转码前
/*
var DeomComp = React.createClass({
	render: function() {
		return (
			<h1>hello,React</h1>
		)
	}
});
ReactDOM.render(
	<DeomComp />,
	document.getElementById('js-container')
)
*/