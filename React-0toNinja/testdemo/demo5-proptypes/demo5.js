'use strict';

var MyTitle = React.createClass({
	displayName: 'MyTitle',

	propTypes: {
		title: React.PropTypes.string.isRequired
	},
	getDefaultProps: function getDefaultProps() {
		return {
			title: 'Hello,this is defaultProps'
		};
	},
	render: function render() {
		return React.createElement(
			'h2',
			null,
			this.props.title
		);
	}
});
var data = "this title";
ReactDOM.render(React.createElement(MyTitle, null), document.getElementById('js-container'));

//转码前
/*
var MyTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired,
	},
	getDefaultProps: function() {
		return {
			title: 'Hello,this is defaultProps'
		};
	},
	render: function() {
		return <h2>{this.props.title}</h2>
	}
});
var data = "this title"
ReactDOM.render(
	<MyTitle />,
	document.getElementById('js-container')
)
*/