/*
 * @authors :Yang Jing
 * @date    :2018-05-16
 * @description： 示例 - 首页 模块
 */

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import classnames from 'classnames';
import { Link, browserHistory } from 'react-router';
import { Panel, Modal, Button, Icon, Cell, Input } from 'dragon-mobile-ui';
import { fetchJson } from 'src/utils/fetch';
import StaticToast from 'src/components/common/Toast';
import format from "src/utils/format";
import dia from "src/utils/dia";
import Storage from 'src/utils/storage';
import actions from "src/actions";
// import Start from "../Start";

import './Tab.scss';



class Tab extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isActived:'index'
		};
	}
	componentDidMount() {
		// dia(this);
		// let { ACTIONS } = this.props;
		// ACTIONS.top();
		// ACTIONS.wave();
	}

	tabActived(tabName){
		this.setState({
			isActived:tabName
		})

		this.props.history.push('tab/' + tabName);
	}
	render() {
		return (
			<div className="tab-content">
				{this.props.children}
				<div className="tab-container">
					<div className="tab" onClick={this.tabActived.bind(this,'index')}>
						{this.state.isActived === 'index'? <img src={require('./images/icon-index-active.png')}/>:<img src={require('./images/icon-index-gray.png')}/>}
						<span className={this.state.isActived === 'index'?'actived':'gray'}>首页</span>
					</div>
					<div className="tab" onClick={this.tabActived.bind(this,'course')}>
						{this.state.isActived === 'course'? <img src={require('./images/icon-index-kc-active.png')}/>:<img src={require('./images/icon-index-kc-gray.png')}/>}
						<span className={this.state.isActived === 'course'?'actived':'gray'}>我的课程</span>
					</div>
					<div className="tab" onClick={this.tabActived.bind(this,'person')}>
						{this.state.isActived === 'person'? <img src={require('./images/icon-me-active.png')}/>:<img src={require('./images/icon-me-gray.png')}/>}	
						<span className={this.state.isActived === 'person'?'actived':'gray'}>个人中心</span>
					</div>
				</div>
			</div>
		);
	}
};


function mapStateToProps(state) {
	// console.log(state)
	const { classList, wave } = state.homeIndex;//
	const { loadOver } = state.homeStart;//
	return {
		_classList: classList,
		_wave: wave,
		_loadOver: loadOver
	};
};

function mapDispatchToProps(dispatch) {
	return {
		ACTIONS: bindActionCreators(actions, dispatch)
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Tab);