import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";
import { fetchUser } from "../actions/userActions";
import { addTweet, fetchConfig, fetchBaseURL } from "../actions/tweetsActions";
import axios, { post } from 'axios'

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

    setNewsType(event) {
        this.setState({newsType: event.target.value});
    }

    setNewsThumb(event) {
        this.setState({newsThumb: event.target.value});
    }
    
    setNewsKeys(event) {
        this.setState({newsKeys: event.target.value});
    }

    setNewsSummary(event) {
        this.setState({newsSummary: event.target.value});
    }

    setNewsReleaseTime(event) {
        this.setState({newsReleaseTime: event.target.value});
    }

    setNewsIsHot(event) {
        this.setState({newsIsHot: event.target.value});
    }
    
    setNewsIsDel(event) {
        this.setState({newsIsDel: event.target.value});
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
                            <div className="dropdown">
                                <label className="input_select" style={{display: 'none'}}>
                                    <select name="newsType" defaultValue={this.state.newsType} onChange={this.setNewsType.bind(this)}>
                                        <option value="公司新闻">公司新闻</option>
                                        <option value="行业新闻">行业新闻</option>
                                    </select>
                                </label>
                                <span className="select" id="s_type" style={{width:'78px'}}><b>请选择</b><a href="javascript:;"><i className="icon_menu"></i></a></span>
                                <div className="dropdown_list" id="l_type" style={{width: '116px', left: '-1px', top: '28px', display: 'none'}}>
                                    <ul>
                                        <li data-val="24">公司新闻</li>
                                        <li data-val="23">行业新闻</li>
                                    </ul>
                                </div>
                            </div>
                            <span className="setips"> * 请选择新闻类型</span>
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
                            <input type="datetime-local" name="newsReleaseTime" defaultValue={this.state.newsReleaseTime} onChange={this.setNewsReleaseTime.bind(this)} id="" className="span11 InputNone"/>
                        </div>
                    </div>
                    <div className="control-group">
                        <label className="control-label">是否热点 :</label>
                        <div className="controls">
                            <div className="dropdown">
                                <label className="input_select" style={{display: 'none'}}>
                                    <select name="newsIsHot">
                                        <option value="0" defaultValue>是否热点</option>
                                        <option value="1">是</option>
                                        <option value="0">否</option>
                                    </select>
                                </label>
                                <span className="select" style={{width:'98px'}}><b>否</b><a href="javascript:;"><i className="icon_menu"></i></a></span>
                                <div className="dropdown_list" style={{width: '116px', left: '-1px', top: '28px', display: 'none'}}>
                                    <ul>
                                        <li data-val="0">是否热点</li>
                                        <li data-val="1">是</li>
                                        <li data-val="0">否</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="control-group">
                        <label className="control-label">标记删除 :</label>
                        <div className="controls">
                            <div className="dropdown">
                                <label className="input_select" style={{display: 'none'}}>
                                    <select name="newsIsDel">
                                        <option value="0" defaultValue>标记删除</option>
                                        <option value="1">是</option>
                                        <option value="0">否</option>
                                    </select>
                                </label>
                                <span className="select" style={{width:'98px'}}><b>否</b><a href="javascript:;"><i className="icon_menu"></i></a></span>
                                <div className="dropdown_list" style={{width: '116px', left: '-1px', top: '28px', display: 'none'}}>
                                    <ul>
                                        <li data-val="0">标记删除</li>
                                        <li data-val="1">是</li>
                                        <li data-val="0">否</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="control-group">
                        <label className="control-label">新闻内容 :</label>
                        <div className="controls">
                            <input type="text" className="InputNone" name="body" defaultValue={this.state.body} onChange={this.setBody.bind(this)} placeholder="新闻标题"/><span className="setips"> * 请输入新闻标题</span>
                            {/* <script id="container" name="content" type="text/plain" style={{width:'100%', height:'360px'}}></script> */}
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