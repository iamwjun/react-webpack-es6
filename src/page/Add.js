import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";
import { fetchUser } from "../actions/userActions";
import { addTweet, fetchConfig, fetchBaseURL } from "../actions/tweetsActions";
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

export default class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false,
            newsTitle: '',
            newsType: '公司新闻',
            newsThumb: '',
            newsKeys: '',
            newsSummary: '',
            newsReleaseTime: '2017-12-08 16:21:00',
            newsIsHot: false,
            newsIsDel: false,
            body: '',
            file: null,
            config: fetchConfig(),
            baseUrl: fetchBaseURL()
        }
    }

    setNewsTitle(event) {
        this.setState({newsTitle: event.target.value});
    }
    
    setNewsKeys(event) {
        this.setState({newsKeys: event.target.value});
    }

    setNewsSummary(event) {
        this.setState({newsSummary: event.target.value});
    }

    setBody(event) {
        this.setState({body: event.target.value});
    }

    uploadImage(event) {
        this.fileUpload(event.target.files[0]).then((response) => {
            if(response.data.status == '200'){
                this.setState({newsThumb: this.state.baseUrl +'/static/image/'+ response.data.path});
                this.setState(prevState => ({
                    isShow: !prevState.isShow
                }));
            }else if(response.data.status == '401'){
                location.href = '/login';
            }
        })
    }

    fileUpload(file){
        const formData = new FormData();
        formData.append('photo', file);
        return  post('/uploadimage', formData, this.state.config)
    }
    
    addTweet(event) {
        console.log(this.state)
        if(this.state.newsTitle == '' || this.state.newsThumb == '' || this.state.newsSummary == '' || this.state.body == ''){
            message.error('新闻标题、缩略图、摘要、新闻内容为必填项');
            return false
        }
        this.props.dispatch(addTweet(
            this.state.newsTitle,
            this.state.newsType,
            this.state.newsThumb,
            this.state.newsKeys,
            this.state.newsSummary,
            this.state.newsReleaseTime,
            this.state.newsIsHot,
            this.state.newsIsDel,
            this.state.body
        ))        
    }

    setNewsType(value) {
        this.setState({newsType: value.key});
    }

    setNewsIsHot(value) {
        this.setState({newsIsHot: value.key == '0' ? false : true});
    }
    
    setNewsIsDel(value) {
        this.setState({newsIsDel: value.key == '0' ? false : true});
    }

    onDatePicker(value, dateString) {
        this.setState({newsReleaseTime: dateString});
    }
      
    onOk(value) {
        // console.log(this.state)
        // console.log('onOk: ', dateString);
    }

    render() {
        return (
            <div className="dj_newBorder">
            <form className="form-horizontal" id="MyFrom_12" name="MyFrom_12" encType="multipart/form-data" method="post" action="">
                    <div className="control-group">
                        <label className="control-label">新闻标题 :</label>
                        <div className="controls">
                            <input type="text" className="InputNone" name="newsTitle" defaultValue={this.state.newsTitle} onChange={this.setNewsTitle.bind(this)} placeholder="新闻标题"/><span className="setips"> * 请输入新闻标题</span>
                        </div>                        
                    </div>
                    <div className="control-group">
                        <label className="control-label">新闻类型 :</label>
                        <div className="controls">
                            <Select labelInValue defaultValue={{ key: '公司新闻' }} style={{ width: 120 }} onChange={this.setNewsType.bind(this)}>
                                <Option value="公司新闻">公司新闻</Option>
                                <Option value="行业新闻">行业新闻</Option>
                            </Select>
                        </div>
                    </div>
                    <div className="control-group">
                        <label className="control-label">新闻缩略图 :</label>
                        <div className="controls">
                            <div className="uploader">
                                <input type="text" className="text" name="newsThumb" value={this.state.newsThumb} />
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
                            <input type="text" className="InputNone" name="newsKeys" defaultValue={this.state.newsKeys} onChange={this.setNewsKeys.bind(this)} placeholder="关键词(标签)"/>
                        </div>
                    </div>
                    <div className="control-group">
                        <label className="control-label">新闻简要 :</label>
                        <div className="controls">
                            <textarea name="newsSummary" defaultValue={this.state.newsSummary} onChange={this.setNewsSummary.bind(this)} className="span11 InputNone"></textarea>
                        </div>
                    </div>
                    <div className="control-group">
                        <label className="control-label">发布时间 :</label>
                        <div className="controls">
                            {/* <input type="datetime-local" name="newsReleaseTime" defaultValue={this.state.newsReleaseTime} onChange={this.setNewsReleaseTime.bind(this)} id="" className="span11 InputNone"/> */}
                            <DatePicker
                                showTime
                                format="YYYY-MM-DD HH:mm:ss"
                                placeholder="指定发布时间"
                                onChange={this.onDatePicker.bind(this)}
                                onOk={this.onOk.bind(this)}
                            />
                        </div>
                    </div>
                    <div className="control-group">
                        <label className="control-label">是否热点 :</label>
                        <div className="controls">
                            <Select labelInValue defaultValue={{ key: '否' }} style={{ width: 120 }} onChange={this.setNewsIsHot.bind(this)}>
                                <Option value="0">否</Option>
                                <Option value="1">是</Option>
                            </Select>
                        </div>
                    </div>
                    <div className="control-group">
                        <label className="control-label">标记删除 :</label>
                        <div className="controls">
                            <Select labelInValue defaultValue={{ key: '否' }} style={{ width: 120 }} onChange={this.setNewsIsDel.bind(this)}>
                                <Option value="0">否</Option>
                                <Option value="1">是</Option>
                            </Select>
                        </div>
                    </div>
                    <div className="control-group">
                        <label className="control-label">新闻内容 :</label>
                        <div className="controls">
                            <Editor handler={this.setBody.bind(this)} value={this.state.body} />
                        </div>
                    </div>
                    <div className="form-actions">
                        <input className="btn" id="save" type="button" defaultValue="确认发布" onClick={this.addTweet.bind(this)} />
                    </div>
                </form>
            </div>     
        );
    }
}