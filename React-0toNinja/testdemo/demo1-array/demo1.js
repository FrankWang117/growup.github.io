'use strict';

var names = ['Jack', 'Tom', 'Frank'];
ReactDOM.render(React.createElement(
	'div',
	null,
	names.map(function(name) {
		return React.createElement(
			'div',
			null,
			'Hello ',
			name
		);
	})
), document.getElementById('js-container'));

//转码前
/*
var names = ['Jack', 'Tom', 'Frank'];
ReactDOM.render(
	<div>
		{
			names.map(function(name){
				return <div>Hello {name}</div>
			})
		}
	</div>,
	document.getElementById('js-container')
)
*/