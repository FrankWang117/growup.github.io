'use strict';

var ButtonLike = React.createClass({
	displayName: 'ButtonLike',

	getInitialState: function getInitialState() {
		return {
			liked: false
		};
	},
	handle: function handle() {
		this.setState({
			liked: !this.state.liked
		});
	},
	render: function render() {
		return React.createElement(
			'h2', {
				onClick: this.handle
			},
			'You ',
			this.state.liked ? 'liked' : 'haven\'t liked',
			' this.Click this to change.'
		);
	}
});
ReactDOM.render(React.createElement(ButtonLike, null), document.getElementById('js-container'));
//转码前
/*
var ButtonState = React.createClass({
	getInitialState: function() {
		return {
			liked: false
		};
	},
	handle: function() {
		this.setState({
			liked: !this.state.liked
		});
	},
	render: function() {
		var text = this.state.liked ? 'like' : 'have\'t liked';
		return (
			<p onClick={this.handle}>
			You {text} this. Click to toggle.
			</p>
		);
	}
});
ReactDOM.render(
	<ButtonState />,
	document.getElementById('js-container')
)
*/