import React, { Component, PropTypes } from 'react'
import Events from 'src/utils/events' // 事件代理
import FastClick from 'fastclick';
import loadJS  from 'src/utils/loadJS';
import 'dragon-mobile-ui/styles/index.scss';
import './App.scss';


class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin:true
    };
  }
  componentWillMount(){
  }
  // 组件加载完成
  componentDidMount() {
    Events.on(window, 'resize', window.__setFontSize__);// window 绑定resize事件
    // 取消移动端事件延迟
    setTimeout(() => {
      FastClick.attach(document.body);
    }, 100);
    // debug模式，异步加载js
    //  __DEBUG__ && loadJS('http://cdn.jsdelivr.net/eruda/1.0.5/eruda.min.js', ()=>{
    //       eruda.init();
    // });

  }
  render() {
    const {isLogin}=this.state;
    return (
      <div className="app-container">
      {/* ddfd */}
        {this.props.children}
      </div>
    )
  }
}

export default Index;