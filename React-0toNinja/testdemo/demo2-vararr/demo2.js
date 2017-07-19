'use strict';

var arr = [React.createElement(
	'h1',
	null,
	'This is first line'
), React.createElement(
	'h1',
	null,
	'This is second line'
)];
ReactDOM.render(React.createElement(
	'div',
	null,
	arr
), document.getElementById('js-container'));

//转码前
/*
var arr = [
	<h1>This is first line</h1>,
	<h1>This is second line</h1>
];
ReactDOM.render(
	<div>{arr}</div>,
	document.getElementById('js-container')
)
*/