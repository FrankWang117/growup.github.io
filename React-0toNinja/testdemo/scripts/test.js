var Controlorun = React.createClass({
	getInitialState: function() {
		return {
			name2: "name2",
			name: this.props.name
		};
	},
	componentDidMount: function() {
		var me = this;

		setTimeout(function() {
			me.setState({
				name: 123,
				name2: "next name2"
			});
			console.log('已经渲染');
		}, 2000);
		// ReactDOM.findDOMNode(this.refs.nameref).value = "1256";
	},
	fnch: function(w) {
		this.setState({
			name: w.target.value
		})
	},

	render: function() {
		return (
			<form>
			<input ref="nameref2" type="text" onChange={this.fnch.bind(this,'name2')} value={this.state.name2} />,
			<input ref="nameref" type="text" onChange={this.fnch.bind(this,'name')} value={this.state.name}/>
		<h2>{this.state.value}</h2>

		</form>
		)
	}
});
ReactDOM.render(
	<Controlorun  name="this is defaule name" />,
	document.getElementById('js-container')
)