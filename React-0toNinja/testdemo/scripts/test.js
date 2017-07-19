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