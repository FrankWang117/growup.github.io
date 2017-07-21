#React入门
##安装
略
##一、HTML模板
 **react.js**是 React 的核心库，**react-dom.js** 是提供与DOM相关的功能。
##二、ReactDOM.render()
ReactDOM.reder 是 React 的最基本的方法，用于将模板转为 HTML 语言，并插入指定的 DOM节点。
>ReactDOM.render(  
>`<h1>`Hello,world!`</h1>`  
>document.getElementById('example')  
>);

上面代码讲一个 h1 标题，插入 example 节点 。

##三、JSX语法
HTML 语言直接卸载 JavaScript 语言中，不加任何引号。

##四、组件
React 允许将代码封装成组件（component），然后像插入普通 HTML 标签一样，在网页中插入这个组件。 React.createClass 方法就用于生成一个组件类。

注意，组件类的**第一个字母必须大写**，否则会报错。另外，组件类**只能包含一个顶层标签**，否则也会报错。

组件的用法与原生的 HTML 标签完全一致，可以任意加入属性。组件的属性可以在组件类的 *this.props* 对象上获取。

添加组件属性，有一个地方需要注意，就是 *class* 属性需要写成 *className* ，*for* 属性需要写成 *htmlFor*。这是因为 class 和 for 是JavaScript 的保留字。

##五、this.props.children
*this.props* 对象的属性与组件的属性一一对应，但是有一个例外，就是 *this.props.children*  属性。它表示组件的所有子节点。

这里需要注意， *this.props.children*  的值有三种可能：如果当前组件没有子节点，它就是 **undefined**; 如果有一个子节点，数据类型是 **object**； 如果有多个子节点，数据类型就是 **array**。

React 提供一个工具方法 *React.Children*  来处理 *this.props.children* 。我们可以用 *React.Children.map*  来遍历子节点，而不用担心 *this.props.children* 的数据类型是 undefined 还是 object。
##六、PropTypes
组件的属性可以接受任意值，字符串、对象、函数等等都可以。有时需要验证别人使用组件时，提供的参数是否符合要求。

组件的 *PropTypes*  属性就是用来验证组件实例的属性是否符合要求。
在组件中设置：
>    propTypes:{      
>	title : React.PropTypes.string.isRequired,	  
>},

PropTypes 告诉 React，这个 *title* 属性是必须的，而且它的值必须是字符串。

此外，**getDefaultProps** 方法可以用来设置组件属性的默认值：
> getDefaultProps : function(){  
>    return {  
>        title : 'hello World'  
>    };  
>},

##七、获取真是的DOM节点
组件并不是真实的 DOM 节点，而是存在于内存之中的一种数据结构，叫做 虚拟 DOM 。只有当它插入文档以后，才会变成真实的 DOM。根据 React 的设计，所有的 DOM 的变动，都先在虚拟 DOM 上发生，然后再将实际 发生变动的部分，反映在真实的 DOM 上，这种算法叫做 DOM diff ，它可以极大提高网页的性能表现。  

但是，有时需要从组件获取真实 DOM 的节点，这时就用到 *ref* 属性。

##八、this.state
组件免不了要与用户互动，React 一大创新，就是将组件看成是一个状态机，一开始有一个初始状态，然后用户互动，导致状态变化，从而触发重新渲染 UI。  
例如：  
>var LikeButton = React.createClass({  
>    getInitinalState: function(){  
>        return { liked : false};  
>    },  
>    handleClick : function(){  
>        this.setState({liked : !this.state.liked});  
>    },  
>    render : function(){  
>        var text = this.state.liked ? 'like' : 'haven\'t liked';  
>        return (  
>           ` <p onClick = {this.handleClick}> `   
>                You {text} this. Please click to toggle.  
>           ` </p>`  
>        );  
>    }  
>});  
>ReactDOM.render(  
>    `<LikeButton />`,  
>    document.getElementById('example')  
>    );  

上面代码是一个 *LikeButton* 组件，它的 *getInitialState* 方法用于定义初始状态，也就是一个对象，这个对象可以通过 *this.state* 属性读取。当用户点击组件，导致状态变化， *this.setState*  方法就修改状态值，每次修改以后，自动调用 *this.render* 方法，再次渲染组件。  

由于 *this.props*  和 *this.state* 都用于描述组件的特性，可能会产生混肴。一个简单的区分方法是，*this.props* 表示那些一旦定义，就不再改变的特性，而 *this.state* 是会随着用户互动而产生变化的特性。
##九、表单
用户在表单填入的内容，属于用户跟组件的互动，所以不能用 *this.props* 读取。
##十、组件的生命周期
组件的生命周期分为三个状态：
  
- **Mounting（装载）**：已插入真实 DOM；  
 当组件实例呗创建并将其插入 DOM 时，这些方法将被调用：  
    * constructor（）  
    * componeWillMount（）  
    * render（）  
    * componentDidMount（）  

- **Updating**：正在被重新渲染；  
改变 props 或 state 可以触发更新事件。在重新渲染组件时，这些方法将被调用：  
    * componentWillReceiveProps（）
    * shouldComponentUpdate（）
    * componentWillUpdate（）
    * render（）
    * componentDidUpdate（）  

- **Unmounting（卸载）**：已移除真实 DOM； 
当一个组件从 DOM 中删除时，这个方法将被调用：  
	* componentWillUnmount（）
 
React 为每个状态都提供了两种处理函数，*will* 函数在进入状态之前调用， *did* 函数在进入状态之后调用，三种状态共计五种处理函数。  

- componentWillMount（）  
- componentDidMount（）  
- componentWillUpdate（object nextProps，object nextState）  
- componentDidUpdate（object prevProps，object prevState）  
- componentWillUnmount（）


##React 运行中的状态
运行中阶段可以使用的函数：

- componentWillReceiveProps：父组件修改属性触发，可以修改新属性和状态；
- shouldComponentUpdate：返回 *false* 会阻止 *render* 调用;
- conponentWillUpdate:不能修改属性和状态；
- render：只能访问 *this.props* 和 *this.state* ，只有一个顶层组件，不允许修改状态和DOM输出。
- componentDidUpdate：可以修改DOM。

子组件直接放入父组件中，不要在ReactDOM.render中才放入。

##React 销毁阶段介绍

componentWillUnmount

##可控控件和不可控空间

