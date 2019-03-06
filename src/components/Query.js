import React, { Component } from 'react';

class Query extends Component {
    constructor(props) {
		super(props);
	}
    
    render() {
        return (
            <div className="new_change_box">          	
                <span className="dropdown">
                <label className="input_select" style={{display: 'none'}}>
                    <select name="J_type">
                        <option defaultValue value="-1">操作人员</option>
                        <option value="14">瑞哥</option>
                        <option value="15">余少</option>
                    </select>
                </label>
                <span className="select" style={{width:'85px'}}><b>操作人员</b><a href="javascript:;"><i className="icon_menu"></i></a></span>
                </span>
                <span className="dropdown">
                <label className="input_select" style={{display: 'none'}}>
                    <select name="J_area">
                        <option defaultValue value="-1">是否热门</option>
                        <option value="2">热门</option>
                        <option value="3">非热门</option>
                    </select>
                </label>
                    <span className="select" style={{width: '85px'}}><b>是否热门</b><a href="javascript:;"><i className="icon_menu"></i></a></span>
                </span>
                <span className="dropdown">
                    <label className="input_select" style={{display: 'none'}}>
                        <select name="J_attr">
                            <option defaultValue value="-1">新闻类型</option>
                            <option value="1">公司新闻</option>
                            <option value="1">行业新闻</option>
                        </select>
                    </label>
                    <span className="select" style={{width: '85px'}}><b>新闻类型</b><a href="javascript:;"><i className="icon_menu"></i></a></span>
                </span>
                <label className="input_text w250" style={{ marginRight:'0' }}>
                    <input type="text" name="ctitle" defaultValue="新闻名称关键词或编号" style={{color:'#000'}} />
                </label>
                <input href="javascript:;" className="btn_serch_inp" name="button" />
            <div className="reselect cfix">
                <div className="dropdown_list" style={{width:'103px', left:'12px', top:'41px', display:'none'}}>
                    <ul>
                        <li data-val="-1">操作人员</li>
                        <li data-val="14">黄瑞</li>
                        <li data-val="15">余少</li>
                    </ul>
                </div>
                <div className="dropdown_list" style={{width:'103px', left:'121px', top:'41px', display:'none'}}>
                    <ul>
                        <li data-val="-1">是否热门</li>
                        <li data-val="2">热门</li>
                        <li data-val="3">非热门</li>
                    </ul>
                </div>
                <div className="dropdown_list" style={{width:'103px', left:'229px', top:'41px', display:'none'}}>
                    <ul>
                        <li data-val="-1">新闻类型</li>
                        <li data-val="1">公司新闻</li>
                        <li data-val="1">行业新闻</li>
                    </ul>
                </div>
            </div>
        </div>
        );
    }
}
export default Query;