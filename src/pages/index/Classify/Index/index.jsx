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

import './Classify.scss';



class Classify extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isActived:'classify_1'
		};
	}
	componentDidMount() {
		dia(this);
		let { ACTIONS } = this.props;
		ACTIONS.init();
		ACTIONS.wave();
	}

	activedClassify(classify){
		if(this.state.isActived !== classify){
			this.setState({
				isActived:classify
			})
		}
	}
	render() {
		return (
			<div className="classify-container">
				<ul className="classify-line">
					<li onClick={this.activedClassify.bind(this,'classify_1')}>
						<div className="classify-name">
							<span className={this.state.isActived === 'classify_1'?'actived':null}>推荐</span>
							{this.state.isActived === 'classify_1'?<span className="actived-line"></span>:null}
						</div>
					</li>
					<li onClick={this.activedClassify.bind(this,'classify_2')}>
						<div className="classify-name">
							<span className={this.state.isActived === 'classify_2'?'actived':null}>变美</span>
							{this.state.isActived === 'classify_2'?<span className="actived-line"></span>:null}
						</div>
					</li>
					<li onClick={this.activedClassify.bind(this,'classify_3')}>
						<div className="classify-name">
							<span className={this.state.isActived === 'classify_3'?'actived':null}>教育</span>
							{this.state.isActived === 'classify_3'?<span className="actived-line"></span>:null}
						</div>
					</li>
					<li onClick={this.activedClassify.bind(this,'classify_4')}>
						<div className="classify-name">
							<span className={this.state.isActived === 'classify_4'?'actived':null}>职场</span>
							{this.state.isActived === 'classify_4'?<span className="actived-line"></span>:null}
						</div>
					</li>
					<li onClick={this.activedClassify.bind(this,'classify_5')}>
						<div className="classify-name">
							<span className={this.state.isActived === 'classify_5'?'actived':null}>亲子</span>
							{this.state.isActived === 'classify_5'?<span className="actived-line"></span>:null}
						</div>
					</li>
					<li onClick={this.activedClassify.bind(this,'classify_6')}>
						<div className="classify-name">
							<span className={this.state.isActived === 'classify_6'?'actived':null}>情感</span>
							{this.state.isActived === 'classify_6'?<span className="actived-line"></span>:null}
						</div>
					</li>
				</ul>
				<div className="line"></div>
				<div className="classify-course-container">
					<ul className="course-list">
						<li className="course-container" onClick={this.goToDetail}>
							<img src={require('./images/course-1.jpg')} alt=""/>
							<div className="abstract">
								<span className="title">最强气质修炼课，让你脱颖而出</span>
								<span className="courses">千聊他课 | 共18节课</span>
								<div className="last-line">
									<span className="times">9.7万次学习</span>
									<div className="prices">
										<span className="delete-price">&yen;99</span>
										<span className="real-price">&yen;39</span>
									</div>
								</div>
							</div>
						</li>
						<li className="course-container">
							<img src={require('./images/course-2.jpg')} alt=""/>
							<div className="abstract">
								<span className="title">最强气质修炼课，让你脱颖而出</span>
								<span className="courses">千聊他课 | 共18节课</span>
								<div className="last-line">
									<span className="times">9.7万次学习</span>
									<div className="prices">
										<span className="delete-price">&yen;99</span>
										<span className="real-price">&yen;39</span>
									</div>
								</div>
							</div>
						</li>
						<li className="course-container">
							<img src={require('./images/course-1.jpg')} alt=""/>
							<div className="abstract">
								<span className="title">最强气质修炼课，让你脱颖而出</span>
								<span className="courses">千聊他课 | 共18节课</span>
								<div className="last-line">
									<span className="times">9.7万次学习</span>
									<div className="prices">
										<span className="delete-price">&yen;99</span>
										<span className="real-price">&yen;39</span>
									</div>
								</div>
							</div>
						</li>
						<li className="course-container">
							<img src={require('./images/course-2.jpg')} alt=""/>
							<div className="abstract">
								<span className="title">最强气质修炼课，让你脱颖而出</span>
								<span className="courses">千聊他课 | 共18节课</span>
								<div className="last-line">
									<span className="times">9.7万次学习</span>
									<div className="prices">
										<span className="delete-price">&yen;99</span>
										<span className="real-price">&yen;39</span>
									</div>
								</div>
							</div>
						</li>
					</ul>
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
export default connect(mapStateToProps, mapDispatchToProps)(Classify);