import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

class Row extends Component {
    constructor(props) {
        super(props);
    }

    delete(value){
        this.props.data = []
    }

    render() {
    
        const mappedNews = this.props.data.map(tweet => 
            <tr key={tweet.id} className={tweet.id%2 == 0 ? "even" : "odd"}>
                <td align="center"><input type="checkbox" name="delcheck[]" className="checkbox" defaultValue={tweet.id} data-value={tweet.id} /></td>
                <td align="center">{tweet.id}</td>
                <td className="dj_otherText"><a href="#" target="_blank" title="#">{tweet.title}</a></td>                        
                <td align="center">{tweet.create_time}</td>
                <td align="center">{tweet.update_time}</td>
                <td align="center">黄瑞</td>                        
                <td align="center">{tweet.views}次</td>
                <td align="center">{tweet.is_hot ? '是' : '否'}</td>
                <td align="center">{tweet.is_del ? '是' : '否'}</td>
                <td align="center" className="dj_otherText">
                    <a href={'/edit/'+ tweet.public_id}>修改</a>&nbsp;
                    <a href="#" onClick={this.delete.bind(this)}>删除</a>&nbsp;
                </td>
            </tr>)
    
        return <Fragment>{mappedNews}</Fragment>
    }
}
export default Row;