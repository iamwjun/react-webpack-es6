import React, { Component, Fragment } from 'react';
import '../assets/css/editor.css';

class Editor extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div class="toolbar">
                <div class="toolbarlayer" style={{display:'none'}}></div>
                <div class="toolbarlayer" style={{display:'none'}}></div>
                <div class="edy-tb">
                    <button class="edy-tb-cmd" title="Bold" unselectable="on">
                        <svg width="21" height="21" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.232 10.346c-.181-.535-.437-1.005-.767-1.41-.331-.406-.731-.727-1.201-.962-.472-.235-1.002-.355-1.589-.355-.597 0-1.102.118-1.514.354-.412.236-.732.497-.959.777h-.034v-5.25h-2.668v12.764h2.458v-1.099h.032c.26.428.632.757 1.114.987.484.232.996.348 1.541.348.605 0 1.147-.123 1.625-.37.479-.248.883-.578 1.215-.987.328-.412.582-.888.757-1.429.172-.54.26-1.103.26-1.688-.002-.585-.092-1.144-.27-1.68zm-2.425 2.481c-.08.265-.203.499-.365.7-.162.203-.363.367-.602.49-.24.125-.518.187-.832.187-.303 0-.574-.062-.813-.187s-.442-.287-.61-.49c-.168-.201-.298-.434-.39-.69-.093-.26-.139-.524-.139-.795s.045-.533.137-.792c.093-.26.223-.492.39-.693.169-.201.372-.365.61-.488.24-.125.51-.187.813-.187.314 0 .594.062.832.187.237.123.439.283.604.48.162.196.283.426.365.686.08.258.121.521.121.791.002.272-.039.536-.121.801z" fill="#1B2124"></path>
                        </svg>
                    </button>
                    <button class="edy-tb-cmd" title="Italic" unselectable="on">
                        <svg width="21" height="21" xmlns="http://www.w3.org/2000/svg">
                            <g transform="translate(7 3)" fill="#1B2124">
                                <path d="M2.926 14l1.765-8.912h-2.448l-1.743 8.912h2.426z" id="Shape"></path>
                                <path d="M5.096.863c-.27-.242-.604-.363-1.007-.363-.401 0-.752.134-1.058.402-.306.268-.456.61-.456 1.029 0 .432.141.765.425 1 .284.237.625.353 1.025.353.418 0 .764-.143 1.049-.431.283-.288.426-.622.426-1 0-.418-.135-.749-.404-.99z"></path>
                            </g>
                        </svg>
                    </button>
                    <button class="edy-tb-cmd" title="Underline" unselectable="on">
                        <svg width="21" height="21" xmlns="http://www.w3.org/2000/svg">
                            <title>Slice 1</title>
                            <g transform="translate(6 5)" fill="#1B2124">
                                <path d="M9.141-.5h-2.271v4.791c0 .291-.042.578-.132.862-.09.284-.217.535-.387.752-.17.219-.391.397-.662.536-.27.14-.581.209-.934.209-.365 0-.659-.072-.878-.217-.221-.146-.394-.33-.52-.554-.127-.223-.209-.475-.247-.754-.038-.278-.057-.544-.057-.798v-4.827h-2.268v5.444c0 .447.062.882.189 1.306.126.424.324.799.595 1.125.272.327.618.591 1.041.791.422.199.929.299 1.521.299.68 0 1.27-.168 1.768-.499.498-.333.849-.718 1.051-1.153h.037v1.397h2.154v-8.71z"></path>
                                <rect y="11" width="11" height=".908"></rect>
                            </g>
                        </svg>
                    </button>
                    <div class="edy-tb-menucontainer">
                        <button class="edy-tb-act edy-tb-paragraph edy-tb-g" title="Font size" style={{fontSize:'17px'}}>↓</button>
                        <div class="edy-tb-stylemenu" style={{display: 'none'}}>
                            <button class="edy-tb-cmd font-size-xx-small" data-value="12px" unselectable="on">xx-small</button>
                            <button class="edy-tb-cmd font-size-x-small" data-value="14px" unselectable="on">x-small</button>
                            <button class="edy-tb-cmd font-size-small" data-value="16px" unselectable="on">small</button>
                            <button class="edy-tb-cmd font-size-medium" data-value="18px" unselectable="on">medium</button>
                            <button class="edy-tb-cmd font-size-large" data-value="20px" unselectable="on">large</button>
                        </div>
                    </div>
                <div class="edy-tb-menucontainer">
                    <button class="edy-tb-act edy-tb-color edy-tb-g" title="Text color">
                        <svg width="21" height="21" xmlns="http://www.w3.org/2000/svg">
                            <g transform="translate(1 1)" fill="none">
                                <circle stroke="#979797" cx="9.5" cy="9.5" r="9.5" fill="" style={{fill: 'rgb(255, 255, 255)'}}></circle>
                                <path d="M3.9 15h2.2l.8-2.4h5.1l.9 2.4h2.2l-4.7-12h-1.7l-4.8 12zm3.8-4l1.8-4.7 1.7 4.7h-3.5z" fill="currentColor"></path>
                            </g>
                        </svg>
                    </button>
                    <div class="edy-tb-dropdown edy-tb-color-modal" style={{display: 'none'}}>
                        <div class="edy-tb-color-tab-content">
                            <div class="edy-colorpicker">
                                <div class="edy-colorpicker-colors" data-wysihtml5-command-group="foreColor">
                                    <div data-wysihtml5-command="foreColor" data-value="rgb(0,0,0)" style={{border:'1px solid #ccc'}} unselectable="on" class="">
                                        <svg width="100%" height="100%" class="no-color">
                                            <line x1="0" y1="100%" x2="100%" y2="0" style={{stroke:'rgba(255,0,0,0.8)', strokeWidth:'1'}}></line>
                                        </svg>
                                    </div>
                                    <div style={{backgroundColor: 'rgb(255,255,255)'}} data-value="rgb(255,255,255)" class="colorpicker-color-bordered active" unselectable="on"></div>
                                    <div style={{backgroundColor: 'rgb(192,192,192)'}} data-value="rgb(192,192,192)" unselectable="on"></div>
                                    <div style={{backgroundColor: 'rgb(128,128,128)'}} data-value="rgb(128,128,128)" unselectable="on"></div>
                                    <div style={{backgroundColor: 'rgb(0,255,255)'}} data-value="rgb(0,255,255)" unselectable="on"></div>
                                    <div style={{backgroundColor: 'rgb(0, 162, 255)'}} data-value="rgb(0, 162, 255)" unselectable="on"></div>
                                    <div style={{backgroundColor: 'rgb(0,0,255)'}} data-value="rgb(0,0,255)" unselectable="on"></div>
                                    <div style={{backgroundColor: 'rgb(0,0,128)'}} data-value="rgb(0,0,128)" unselectable="on"></div>
                                    <div style={{backgroundColor: 'rgb(0,128,128)'}} data-value="rgb(0,128,128)" unselectable="on" class=""></div>
                                    <div style={{backgroundColor: 'rgb(0,128,0)'}} data-value="rgb(0,128,0)" unselectable="on"></div>
                                    <div style={{backgroundColor: 'rgb(0,255,0)'}} data-value="rgb(0,255,0)" unselectable="on"></div>
                                    <div style={{backgroundColor: 'rgb(255,255,0)'}} data-value="rgb(255,255,0)" unselectable="on"></div>
                                    <div style={{backgroundColor: 'rgb(255,249,197)'}} data-value="rgb(255,249,197)" unselectable="on"></div>
                                    <div style={{backgroundColor: 'rgb(128,128,0)'}} data-value="rgb(128,128,0)" unselectable="on"></div>
                                    <div style={{backgroundColor: 'rgb(128,0,0)'}} data-value="rgb(128,0,0)" unselectable="on"></div>
                                    <div style={{backgroundColor: 'rgb(255,0,0)'}} data-value="rgb(255,0,0)" unselectable="on" class=""></div>
                                    <div style={{backgroundColor: 'rgb(255,0,255)'}} data-value="rgb(255,0,255)" unselectable="on"></div>
                                    <div style={{backgroundColor: 'rgb(128,0,128)'}} data-value="rgb(128,0,128)" unselectable="on" class=""></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="edy-tb-cmd edy-tb-g showSource" title="Edit HTML source">
                    <svg width="21" height="21" xmlns="http://www.w3.org/2000/svg">
                        <g transform="translate(0 6)" fill="#1B2124">
                            <path d="M6.314 2.42l-6.314 2.433v1.547l6.314 2.433v-1.671l-3.954-1.523v-.025l3.954-1.523v-1.671z" id="Shape"></path>
                            <path d="M7.896 9.568l1.41.432 3.743-9.569-1.42-.431-3.733 9.568z" id="Shape"></path>
                            <path d="M13.686 8.833l6.314-2.433v-1.547l-6.314-2.433v1.671l3.957 1.523v.025l-3.957 1.523v1.671z"></path>
                        </g>
                    </svg>
                </button>
            </div>
            <textarea class="editable" style={{display: 'block'}} onChange={this.props.handler} value={this.props.value}></textarea>
        </div>
        );
    }
}
export default Editor;