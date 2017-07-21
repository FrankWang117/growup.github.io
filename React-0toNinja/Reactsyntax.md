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