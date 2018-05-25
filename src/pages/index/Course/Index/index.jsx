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

import './Course.scss';



class Course extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isActive: 'learned'
		};
	}
	componentDidMount() {
		dia(this);
		let { ACTIONS } = this.props;
		ACTIONS.init();
		ACTIONS.wave();
	}
	acitvedColumn(columnName) {
		if(this.state.isActive !== columnName){
			this.setState({
				isActive: columnName
			})
		}
	}
	render() {
		let { _wave, _classList, _loadOver } = this.props;
		return (
			<div className="my-course">
				<ul className="column-container">
					<li className="column" onClick={this.acitvedColumn.bind(this, 'learned')}>
						<div className="column-name">
							<span className={this.state.isActive === 'learned' ? 'actived' : null}>最近学习</span>
							{this.state.isActive === 'learned' ? <span className="actived-line"></span> : null}
						</div>
					</li>
					<li className="column" onClick={this.acitvedColumn.bind(this, 'paid')}>
						<div className="column-name">
							<span className={this.state.isActive === 'paid' ? 'actived' : null}>已购课程</span>
							{this.state.isActive === 'paid' ? <span className="actived-line"></span> : null}
						</div>
					</li>
				</ul>
				{this.state.isActive === 'learned' ?  
				<ul className="learned-list">
					<li className="course-container">
						<img src={require('./images/course-1.jpg')} alt="" />
						<div className="abstract">
							<span className="title">企业该如何挑选招聘管理系统？</span>
							<span className="time">上次学习05-18 11:17</span>

						</div>
					</li>
					<li className="course-container">
						<img src={require('./images/course-2.jpg')} alt="" />
						<div className="abstract">
							<span className="title">企业该如何挑选招聘管理系统？</span>
							<span className="time">上次学习05-18 11:17</span>
						</div>
					</li>
				</ul>: 
				<ul className="learned-list">
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
				</ul>}
				
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
export default connect(mapStateToProps, mapDispatchToProps)(Course);