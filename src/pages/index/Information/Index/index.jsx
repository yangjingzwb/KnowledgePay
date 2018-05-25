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

import './Information.scss';



class Information extends Component {
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
			<div className="information">
				<ul className="information-box">
					<li className="img-line">
						<span>头像</span>
						<img src={require('./images/course-1.jpg')} alt=""/>
					</li>
					<li className="information-line">
						<span>名称</span>
						<input value="大勋"  className="content"/>
					</li>
					<li className="information-line">
						<span>昵称</span>
						<input value="大勋" className="content"/>
					</li>
					<li className="information-line">
						<span>姓名</span>
						<input value="大勋" className="content"/>
					</li>
					<li className="information-line">
						<span>性别</span>
						<span className="sex">男</span>
					</li>
					<li className="information-line">
						<span>手机号</span>
						<input value="1xxxx42949289" className="content"/>
					</li>
				</ul>
				<div className="save">保存</div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Information);