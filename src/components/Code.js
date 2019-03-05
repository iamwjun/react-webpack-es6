import PropTypes from 'prop-types';
import React, { Component } from 'react';
import QRCode from 'qrcode.react';

export default class Code extends Component{
    static propTypes = {
        sid: PropTypes.string
    }

    constructor(props) {
        super(props);
        // console.log("http://wx.eeparking.com/demo2.0/parking/confirm.php?sid="+ this.props.sid)
    }

    render(){
        return(
            <QRCode
                value={"http://wx.eeparking.com/demo2.0/parking/confirm.php?sid="+ this.props.sid.replace('/allow#', '')}
                size={184}
                bgColor={"#fff"}
                fgColor={"#333"}
                level={"M"}
            />
        )
    }
}