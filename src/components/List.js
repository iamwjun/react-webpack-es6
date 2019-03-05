import Proptypes from 'prop-types';
import React, { Component } from 'react';
import Row from './Row';
import Page from './Page';

class List extends Component {
    static proptypes = {
        data: Proptypes.array,
        count: Proptypes.number
    }
    constructor(props) {
        super(props);
        // console.log(this.props.data)
    }
    
    handleClick() {
		//console.log(2);
    }
    
    render() {
        return (
            <div className="mod_table">
                <table width="100%" border="0" cellSpacing="0" cellPadding="0" className="pro_table new_tab" id="new_tab">
                    <thead>
                        <tr>
                            <th width="6%"></th>
                            <th width="7%" align="center"><a href="#">编号</a></th>
                            <th align="left" className="fst" width="23%">新闻名称</th>                        
                            <th width="12%" align="center">发布时间</th>
                            <th width="12%" align="center">修改时间</th>
                            <th width="7%" align="center">操作人员</th>
                            <th width="9%" align="center"><a href="#">点击数</a><span className="arrow"></span></th>                        
                            <th width="9%">是否热门</th>
                            <th width="7%">标记删除</th>
                            <th width="9%" align="center">操作</th>
                        </tr>
                    </thead>
                    <tbody>
                	    <Row data={this.props.data}/>
                    </tbody>
                </table>
                <div className="new_cutpage">
                    <label style={{paddingLeft:'10px'}}><input type="checkbox" id="demo" className="checkbox" onChange={this.handleClick}/>全选</label>
                    <input type="submit" name="del" className="btn_net_common" defaultValue="删除"/>              
                </div>
                <div className="new_cutpage fn-clear">
                    <Page count={this.props.count}/>
                </div>
        </div>
        );
    }
}
export default List;