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

import './Play.scss';



class Play extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isActive:'introduction',
			isCollected:false
		};

		this.collect = this.collect.bind(this);

	}
	componentDidMount() {
		dia(this);
		let { ACTIONS } = this.props;
		ACTIONS.init();
		ACTIONS.wave();
	}

	activedItem(item){
		if(this.state.isActive !== item){
			this.setState({
				isActive: item
			})
		}
	}

	collect(){
		this.setState((prevState,props) => ({
			isCollected: !prevState.isCollected
		}))
	}
	render() {
		let { _wave, _classList, _loadOver } = this.props;
		return (
			<div className="course-detail">
				<div className="play-container">
					<img src={require('./images/k-4.jpg')} alt=""/>
				</div>
				<div className="info-container">
					<div className="title">15节小白理财实战课，帮你抓住更多赚钱机会</div>
					<div className="courses">21小时后开课第8节 | 共23节课</div>
					<div className="price">&yen; 99</div>
				</div>
				<div className="line"></div>
				<ul className="introduction-container">
					<li className="item" onClick={this.activedItem.bind(this, 'introduction')}>
						<div className="item-name">
							<span className={this.state.isActive === 'introduction' ? 'actived' : null}>简介</span>
							{this.state.isActive === 'introduction' ? <span className="actived-line"></span> : null}
						</div>
					</li>
					<li className="item" onClick={this.activedItem.bind(this, 'course')}>
						<div className="item-name">
							<span className={this.state.isActive === 'course' ? 'actived' : null}>课程</span>
							{this.state.isActive === 'course' ? <span className="actived-line"></span> : null}
						</div>
					</li>
				</ul>
				{this.state.isActive === 'introduction' ?
				<div><img src="" alt=""/></div> : 
				<div className="course-container">
					<ul className="course-list">
						<li className="course-box">
							<img src={require('./images/course-1.jpg')} alt=""/>
							<div className="abstract">
								<span className="text">最强气质修炼课，让你脱颖而出</span>
								<span className="released-time">05月18日 19:00</span>
								<div className="last-line">
									<span className="times">9.7万次学习</span>
									<div className="prices">
										<span className="delete-price">&yen;99</span>
										<span className="real-price">&yen;39</span>
									</div>
								</div>
							</div>
						</li>
						<li className="course-box">
							<img src={require('./images/course-2.jpg')} alt=""/>
							<div className="abstract">
								<span className="text">最强气质修炼课，让你脱颖而出</span>
								<span className="released-time">05月18日 19:00</span>
								<div className="last-line">
									<span className="times">9.7万次学习</span>
									<div className="prices">
										<span className="delete-price">&yen;99</span>
										<span className="real-price">&yen;39</span>
									</div>
								</div>
							</div>
						</li>
						<li className="course-box">
							<img src={require('./images/course-1.jpg')} alt=""/>
							<div className="abstract">
								<span className="text">最强气质修炼课，让你脱颖而出</span>
								<span className="released-time">05月18日 19:00</span>
								<div className="last-line">
									<span className="times">9.7万次学习</span>
									<div className="prices">
										<span className="delete-price">&yen;99</span>
										<span className="real-price">&yen;39</span>
									</div>
								</div>
							</div>
						</li>
						<li className="course-box">
							<img src={require('./images/course-2.jpg')} alt=""/>
							<div className="abstract">
								<span className="text">最强气质修炼课，让你脱颖而出</span>
								<span className="released-time">05月18日 19:00</span>
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
				</div>}
				<div className="pay-container">	
					<div className="collect" onClick={this.collect}>
						{this.state.isCollected?<img className="collect-icon" src={require('./images/collect.png')} alt=""/>:<img className="collect-icon" src={require('./images/no-collect.png')} alt=""/>}
						<span className={this.state.isCollected?'actived':null}>收藏</span>
					</div>
					<div className="pay-btn">购买系列课</div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Play);