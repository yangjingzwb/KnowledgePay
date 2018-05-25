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

import './Collection.scss';



class Collection extends Component {
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
			<div className="collection-container">
				{this.state.isHaveCollection?
				<ul className="collection-list">
					<li className="course-container">
						<img src={require('./images/course-1.jpg')} alt="" />
						<div className="abstract">
							<span className="title">企业该如何挑选招聘管理系统？</span>
							<span className="time">共12节课</span>

						</div>
					</li>
					<li className="course-container">
						<img src={require('./images/course-2.jpg')} alt="" />
						<div className="abstract">
							<span className="title">企业该如何挑选招聘管理系统？</span>
							<span className="time">共12节课</span>
						</div>
					</li>
					<div className="no-more">没有更多了</div>
				</ul>:
				<div>
					<img className="no-collection" src={require('./images/no-collection.png')} alt=""/>	
					<p className="nothing">暂时没有收藏课程</p>
				</div>}
				
				
				
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
export default connect(mapStateToProps, mapDispatchToProps)(Collection);