"use strict";

var MyCompon = React.createClass({
	displayName: "MyCompon",

	handleref: function handleref() {
		this.refs.forref.focus();
	},
	render: function render() {
		return React.createElement(
			"div",
			null,
			React.createElement("input", {
				type: "text",
				ref: "forref"
			}),
			React.createElement("input", {
				type: "button",
				value: "click",
				onClick: this.handleref
			})
		);
	}

});
ReactDOM.render(React.createElement(MyCompon, null), document.getElementById('js-container'));

//转码前
/*
var MyCompon = React.createClass({
	handleref: function() {
		this.refs.forref.focus()
	},
	render: function() {
		return (
			<div>
				<input type="text" ref="forref" />
				<input	type="button" value="click" onClick={this.handleref} />
			</div>
		);
	}

});
ReactDOM.render(
	<MyCompon />,
	document.getElementById('js-container')
)
*/