import React, { Component, Fragment } from 'react';
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

export default class Form extends Component{
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {title: ''};
        
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log(event.target.value);
        this.setState({title: event.target.value});
    }

    render(){
        

        return (
            <div className="dj_newBorder">
            <form className="form-horizontal" id="MyFrom_12" name="MyFrom_12">
                    <div className="control-group">
                        <label className="control-label">新闻标题 :</label>
                        <div className="controls">
                            <input type="text" className="InputNone" name="newsTitle" value={this.state.title} onChange={this.handleChange} /><span className="setips"> * 请输入新闻标题</span>
                        </div>                        
                    </div>
                </form>
            </div>
        );
    }
}