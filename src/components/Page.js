import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Page extends Component {
    constructor(props) {
		super(props);
	}
    
    render() {
        return (
            <p>共有<i>2</i>条<i id="pagecount">1</i>页<font color="#aaa">首页</font><font color="#aaa">上一页</font> <a href="#">下一页</a><a href="#">末页</a>转到: <input type="text" name="topage" defaultValue="1" size="3"/><input type="button" className="btn" defaultValue="GO"/></p>       
        );
    }
}
export default Page;