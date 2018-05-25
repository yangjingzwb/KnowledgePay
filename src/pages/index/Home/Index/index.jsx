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
import getUrl from 'src/utils/env';
// import Start from "../Start";

import './Home.scss';



class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
			alert: false,
			disable: true,
			disableTips: ""
		};
		this.goToClassify = this.goToClassify.bind(this);
		this.goToDetail = this.goToDetail.bind(this);
	}
	componentDidMount() {
		// 请求接口
		// fetchJson({
		// 	url:"",
		// 	type:"POST",
		// 	success:()=>{

		// 	}
		// })
		dia(this);
		console.log(this.props)
		let { ACTIONS } = this.props;
		// 顶部banner
		ACTIONS.top();
		// 底部banner
		ACTIONS.middle()
		// 中部分裂
		ACTIONS.catalog()
		// 每日精选
		ACTIONS.daily_list()
	}

	goToClassify() {
		this.props.history.push('tab/classify');
	}

	goToDetail() {
		this.props.history.push('coursePlay');
	}
	render() {
		let {_top, _catalog, _middle, _dailyList} = this.props;
		// console.log(_top)
		// console.log(_catalog)
		return (
			<div className="home">
				<div className="banner-container">
					<img className="banner" src={require('./images/banner.jpg')} alt="" />
				</div>
				<ul className="column-container">
					<li className="column" onClick={this.goToClassify}>
						<div className="box">
							<img src={require('./images/index-icon-1.png')} alt="" />
							<span className="column-text">大师课</span>
						</div>
					</li>
					<li className="column">
						<div className="box">
							<img src={require('./images/index-icon-2.png')} alt="" />
							<span className="column-text">免费专区</span>
						</div>
					</li>
					<li className="column">
						<div className="box">
							<img src={require('./images/index-icon-3.png')} alt="" />
							<span className="column-text">领券中心</span>
						</div>
					</li>
					<li className="column">
						<div className="box">
							<img src={require('./images/index-icon-4.png')} alt="" />
							<span className="column-text">排行榜</span>
						</div>
					</li>
					<li className="column">
						<div className="box">
							<img src={require('./images/index-icon-5.png')} alt="" />
							<span className="column-text">限时低价</span>
						</div>
					</li>
				</ul>
				<div className="line"></div>
				<div className="recommend-container">
					<div className="text">每日推荐</div>
					<ul className="course-list">
						<li className="course-container" onClick={this.goToDetail}>
							<img src={require('./images/course-1.jpg')} alt="" />
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
							<img src={require('./images/course-2.jpg')} alt="" />
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
							<img src={require('./images/course-1.jpg')} alt="" />
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
							<img src={require('./images/course-2.jpg')} alt="" />
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
	const { top, catalog, middle, dailyList } = state.homeIndex_1;//
	// console.log(state.homeIndex_1)
	// const { loadOver } = state.homeStart;//
	return {
		_top: top,
		_catalog: catalog,
		_middle: middle,
		_dailyList: dailyList
	};
};

function mapDispatchToProps(dispatch) {
	return {
		ACTIONS: bindActionCreators(actions, dispatch)
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
// export default Home;