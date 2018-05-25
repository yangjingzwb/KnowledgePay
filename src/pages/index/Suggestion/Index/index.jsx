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

import './Suggestion.scss';



class Suggestion extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isHaveCollection:true
		};
	}
	componentDidMount() {
		dia(this);
		let { ACTIONS } = this.props;
		ACTIONS.init();
		ACTIONS.wave();
	}

	render() {
		return (
			<div className="suggestion-container">
				<div className="title">优化建议</div>
				<div className="write-container">
					<textarea className="write" placeholder="请输入投诉内容"></textarea>
					<div className="word-num">0/200</div>
				</div>
				<div className="screenshot-container">
					<div className="screenshot-text">
						<span className="screenshot-text">证据截图</span>
						<span className="screenshot-num">0/4</span>
					</div>
					<div className="screenshot-line">
						<div className="screenshot-box">
							<img src={require('./images/plus.png')} />
						</div>
						
					</div>
				</div>
				<div className="title">请填写你的个人信息，方便我们联系你：</div>
				<div className="phone-line">
					<span>手机号</span>
					<input type="text" placeholder="必填"/>
				</div>
				<div className="submit-box">
					<div className="submit">提交</div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Suggestion);