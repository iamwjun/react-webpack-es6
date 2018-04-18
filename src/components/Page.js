import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { getParam } from '../actions/tweetsActions';

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page_size: 20,
            page_num: 1,
            gotoPage: 1
        }
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({...getParam(['page_size', 'page_num'])});
    }

    setPage(event) {
        this.setState({gotoPage: event.target.value});
    }

    gotoPage() {
        if(this.state.gotoPage > Math.ceil(this.props.count/this.state.page_size)){
            console.log('超过最大页了！'+ this.state.gotoPage, Math.ceil(this.props.count/this.state.page_size));
            return false;
        }
        location.href = 'filter?page_size='+ this.state.page_size +'&page_num='+ this.state.gotoPage
    }
    
    render() {        
        let fanye;
        let count = Math.ceil(this.props.count/this.state.page_size);

        console.log('条件：'+ count, this.state.page_num);

        if(this.state.page_num && this.state.page_num == 1){
            fanye = 
                <Fragment>
                    <font color="#aaa">首页</font>
                    <font color="#aaa">上一页</font> 
                    <a href={'filter?page_size='+ this.state.page_size+ '&page_num=2'}>下一页</a>
                    <a href={'filter?page_size='+ this.state.page_size+ '&page_num='+ count}>末页</a>
                </Fragment>;
        }else if(this.state.page_num && this.state.page_num == count){
            fanye = 
                <Fragment>
                    <a href={'filter?page_size='+ this.state.page_size+ '&page_num=1'}>首页</a>
                    <a href={'filter?page_size='+ this.state.page_size+ '&page_num='+ (count - 1)}>上一页</a>
                    <font color="#aaa">下一页</font>
                    <font color="#aaa">末页</font> 
                </Fragment>;
        }else{
            fanye = 
                <Fragment>
                    <a href={'filter?page_size='+ this.state.page_size+ '&page_num=1'}>首页</a>
                    <a href={'filter?page_size='+ this.state.page_size+ '&page_num='+ (this.state.page_num - 1)}>上一页</a>
                    <a href={'filter?page_size='+ this.state.page_size+ '&page_num='+ (this.state.page_num + 1)}>下一页</a>
                    <a href={'filter?page_size='+ this.state.page_size+ '&page_num='+ count}>末页</a>
                </Fragment>;
        }

        const page = <p>共有<i>{this.props.count}</i>条<i id="pagecount">{count}</i>页{fanye}转到: <input type="text" name="topage" size="3" value={this.state.gotoPage} onChange={this.setPage.bind(this)} /><input type="button" className="btn" defaultValue="GO" onClick={this.gotoPage.bind(this)}/></p>;

        return (
            <Fragment>{page}</Fragment>
        );
    }
}
export default Page;