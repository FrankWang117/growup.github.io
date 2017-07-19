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