'use strict';

var NodeList = React.createClass({
	displayName: 'NodeList',

	render: function render() {
		return React.createElement(
			'ol',
			null,
			React.Children.map(this.props.children, function(child) {
				return React.createElement(
					'li',
					null,
					child
				);
			})
		);
	}
});

ReactDOM.render(React.createElement(
	NodeList,
	null,
	React.createElement(
		'span',
		null,
		'this is first child'
	),
	React.createElement(
		'span',
		null,
		'this is second child'
	)
), document.getElementById('js-container'));

//转码前
/*
var NodeList = React.createClass({
	render: function() {
		return (
			<ol>
			{
				React.Children.map(this.props.children,function(child){
					return <li>{child}</li>
				})
			}
			</ol>
		);
	}
});

ReactDOM.render(
	<NodeList>
		<span>this is first child</span>
		<span>this is second child</span>
		</NodeList>,
	document.getElementById('js-container')
)
*/