import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Filter extends Component {
    constructor(props) {
		super(props);
	}
    
    render() {
        return (
            <div className="new_mode_tab fn-clear">
                <Link to="/add" className="new_net_plus" style={{marginRight: '8px'}}>发布新闻</Link>
                <ul>
                    <li className="current"><a href="#" hidefocus="true"><span className="true">所有新闻</span></a></li>
                    <li className=""><a href="#" hidefocus="true"><span className="true">待发布</span></a></li>
                    <li className=""><a href="#" hidefocus="true"><span className="true">已删除</span></a></li>
                </ul>
            </div>
        );
    }
}
export default Filter;