# React ES5 与 ES6语法对比
## 设置默认属性defaultProps
- ES5  

    getDefaultProps: function() {  
              return {  
			name: "Tom",  
			age: 25,  
			like: 'football'  
		}  
	},  

- ES6  
	NewForm.defaultProps = {  
		name: 'Tom6',  
		age: 25,  
		like: 'Football'  
};  
##设置属性类型propTypes
- ES5  
	propTypes: {  
		name: React.PropTypes.string.isRequired  
	},  
- ES 6  
	NewForm.propTypes = {  
	name: React.PropTypes.string.isRequired,  
	age: React.PropTypes.number.isRequired  
	}  
##设置初始状态state
- ES5   
	getInitialState: function() {  
		return {  
			opacity: 1.0  
		}  
	},    
- ES6  
	class NewForm extends React.Component {  
	constructor(props) {  
		super(props);  
		this.state = {  
			opacity: 1.0,  
			liked: false  
		}  
	}  

##生命周期Component Lifecycle
- ES5   
	  componentDidMount: function() {  
		this.timer = setInterval(function() {  
			var opacity = this.state.opacity;  
			opacity -= .05;  
			if (opacity < 0.1) {  
				opacity = 1.0  
			}  
			this.setState({  
				opacity: opacity  
			});  
		}.bind(this), 500);  
	},  
- ES6  
	componentDidMount() {  
		this.timer = setInterval(() => {  
			let opacity = this.state.opacity;  
			opacity -= .05;  
			if (opacity < 0.1) {  
				opacity = 1.0  
			}  
			this.setState({  
				opacity: opacity  
			});  
		}, 200);  
	}  
##数组遍历
- ES5  
	var names = ['Ethan','wang','zhou'];  
	ReactDOM.render(  
		`<div>`  
			{ names.map(function(name){  
			return `<div>` Hello,{name}`</div>`})}  
		`</div>`  
		document.getElementById('root'));  
- ES6  
	class Greeting extends React.Component {      
   	render() {  
     	const names = ['Alice', 'Emily', 'Kate'];  
    	return (  
       `<div>`  
       {  
        **names.map((name,index) => `<div key = {index}>`Hello, {name}!`</div>`)**  
       }  
       `</div>`
     );
  	 }
 	}  
 	ReactDOM.render(`<Greeting />`,  document.getElementById('example'));  

##this  
使用ES6 class语法创建组件，class中的方法不会自动将 this 绑定到实例中，必须使用 `bind(this)` 或者箭头函数 `=>` 来进行手动绑定。  
- ES5  
	handleClick: function() {   
   	 console.log(this);    
 	 },  
- ES6
	render() {  
    	return (  
     	 `<div onClick={this.handleClick.bind(this)}>`ES6方式创建的组件`</div>`   
   	 );  
 	}  
也可以将绑定方法写到constructor 中：  
	class MyComponent extends Component {  
 	 constructor(props) {  
   	 super(props);  
    	this.handleClick = this.handleClick.bind(this);  
  	}    
或者使用箭头函数`=>`  
	class MyComponent extends Component {  
  	handleClick = () => {  
    	console.log(this);  
  	}  
##this.props.children  
组件类的 this.props 属性，可以在组件对象上获取，  
this.props 对象的属性与组件的属性一一对应，但是有一个例外，就是 `this.props.children`属性，它表示组件的所有子节点。  
- ES5  
	render: function() {  
    	return (  
      `<ol>`  
      {  
        React.Children.map(this.props.children, function (child) {  
          return `<li>`{child}`</li>`;  
        })  
      }  
      `</ol>`  
    );    
-ES6  
 render() {  
    return (  
      `<ol>`  
        {  
          React.Children.map(this.props.children, (child) => {  return `<li>`{child}`</li>`})  
        }  
      `</ol>`  
    )  
  }    
ReactDOM.render(  
  `<NotesList>`  
    `<span>`hello`</span>`  
    `<span>`world`</span>`  
  `</NotesList>`,  
  document.body  
);