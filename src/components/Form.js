import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";
import { fetchUser } from "../actions/userActions";
import { addTweet, updateTweet, fetchConfig, fetchBaseURL } from "../actions/tweetsActions";
import Editor from '../components/Editor';
import axios, { post } from 'axios'
import DatePicker from 'antd/lib/date-picker';
import message from 'antd/lib/message';
import Select from 'antd/lib/select';
const Option = Select.Option;
import 'antd/dist/antd.min.css';

@connect((store) => {
    return {
        user: store.user.user,
        userFetched: store.user.fetched,
        tweets: store.tweets.tweets,
    };
})

export default class Form extends Component{
    constructor(props) {
        super(props);
        this.state = {
            action: 'add',
            isShow: false,
            title: '',
            news_type: '公司新闻',
            thumb: '',
            news_keys: '',
            summary: '',
            release_time: '指定发布时间',
            is_hot: false,
            is_del: false,
            body: '',            
            config: fetchConfig(),
            baseUrl: fetchBaseURL()
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ ...nextProps.data });
    }

    handleInputChange(event) {
        const target = event.target;
        console.log(target.type);
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
            [name]: value
        });
    }

    uploadImage(event) {
        this.fileUpload(event.target.files[0]).then((response) => {
            if(response.data.status == '200'){
                this.setState({thumb: this.state.baseUrl +'/static/image/'+ response.data.path});
                this.setState(prevState => ({
                    isShow: !prevState.isShow
                }));
            }else if(response.data.status == '401'){
                location.href = '/login';
            }
        }).catch((err) => {
            location.href = '/login';
        })
    }

    fileUpload(file){
        const formData = new FormData();
        formData.append('photo', file);
        return  post('/api/uploadimage', formData, this.state.config)
    }

    onDatePicker(value, dateString) {
        this.setState({release_time: dateString});
    }

    onOk(value) {
        // console.log(this.state)
        // console.log('onOk: ', dateString);
    }

    setBody(event) {
        this.setState({body: event.target.value});
    }

    actionTweet(event) {
        console.log(this.state)
        if(this.state.title == '' || this.state.news_type == '' || this.state.summary == '' || this.state.body == ''){
            message.error('新闻标题、缩略图、摘要、新闻内容为必填项');
            return false
        }
        switch (this.state.action) {
            case 'update':
                this.props.dispatch(updateTweet(this.state))
                break;
            case 'add':
                this.props.dispatch(addTweet(this.state));
                break;
        }
    }

    render(){
        return (
            <div className="dj_newBorder">
            <form className="form-horizontal" id="MyFrom_12" name="MyFrom_12">
                    <div className="control-group">
                        <label className="control-label">新闻标题 :</label>
                        <div className="controls">
                            <input className="InputNone" type="text" name="title" value={this.state.title} onChange={this.handleInputChange.bind(this)} /><span className="setips"> * 请输入新闻标题</span>
                        </div>                        
                    </div>
                    <div className="control-group">
                        <label className="control-label">新闻类型 :</label>
                        <div className="controls">
                            <select name="news_type" value={this.state.news_type} onChange={this.handleInputChange.bind(this)} >
                                <option value="公司新闻">公司新闻</option>
                                <option value="行业新闻">行业新闻</option>
                            </select>
                        </div>
                    </div>
                    <div className="control-group">
                        <label className="control-label">新闻缩略图 :</label>
                        <div className="controls">
                            <div className="uploader">
                                <input type="text" className="text" name="newsThumb" value={this.state.thumb} />
                                <div className="metuplaodify">
                                    <div className="file_uploadfrom" style={{opacity: '0'}}>
                                        <input type="file" onChange={this.uploadImage.bind(this)} />
                                    </div>
                                    <a href="javascript:;" title="上传" className="upbutn round">上传</a>
                                    <span className="uptips" style={this.state.isShow ? {display: 'block'} : {display: 'none'}}>上传成功</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="control-group">
                        <label className="control-label">关键词(标签) :</label>
                        <div className="controls">
                            <input type="text" className="InputNone" name="news_keys" value={this.state.news_keys} onChange={this.handleInputChange.bind(this)} placeholder="关键词(标签)"/>
                        </div>
                    </div>
                    <div className="control-group">
                        <label className="control-label">新闻简要 :</label>
                        <div className="controls">
                            <textarea name="summary" value={this.state.summary} onChange={this.handleInputChange.bind(this)} className="span11 InputNone"></textarea>
                        </div>
                    </div>
                    <div className="control-group">
                        <label className="control-label">发布时间 :</label>
                        <div className="controls">
                            {/* <input type="datetime-local" name="newsReleaseTime" defaultValue={this.state.newsReleaseTime} onChange={this.setNewsReleaseTime.bind(this)} id="" className="span11 InputNone"/> */}
                            <DatePicker
                                showTime
                                format="YYYY-MM-DD HH:mm:ss"
                                placeholder={this.state.release_time}
                                onChange={this.onDatePicker.bind(this)}
                                onOk={this.onOk.bind(this)}
                            />
                        </div>
                    </div>
                    <div className="control-group">
                        <label className="control-label">是否热点 :</label>
                        <div className="controls">
                            <select name="is_hot" value={this.state.is_hot ? 1 : 0} onChange={this.handleInputChange.bind(this)} >
                                <option value="0">否</option>
                                <option value="1">是</option>
                            </select>
                        </div>
                    </div>
                    <div className="control-group">
                        <label className="control-label">标记删除 :</label>
                        <div className="controls">
                            <select name="is_del" value={this.state.is_del ? 1 : 0} onChange={this.handleInputChange.bind(this)} >
                                <option value="0">否</option>
                                <option value="1">是</option>
                            </select>
                        </div>
                    </div>
                    <div className="control-group">
                        <label className="control-label">新闻内容 :</label>
                        <div className="controls">
                            <Editor handler={this.setBody.bind(this)} value={this.state.body} />
                        </div>
                    </div>
                    <div className="form-actions">
                        <input className="btn" id="save" type="button" defaultValue="确认发布" onClick={this.actionTweet.bind(this)} />
                    </div>
                </form>
            </div>
        );
    }
}