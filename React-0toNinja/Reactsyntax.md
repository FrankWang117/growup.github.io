#React ES5 与 ES6语法对比
##设置默认属性
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
##设置属性类型
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

##生命周期
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