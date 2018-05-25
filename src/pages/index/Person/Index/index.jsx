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

import './Person.scss';



class Person extends Component {
	constructor(props) {
		super(props);

		this.goToCollection = this.goToCollection.bind(this);
		this.goToSuggestion = this.goToSuggestion.bind(this);
		this.goToInformation = this.goToInformation.bind(this);
	}
	componentDidMount() {
		dia(this);
		let { ACTIONS } = this.props;
		ACTIONS.init();
		ACTIONS.wave();
	}
	goToCollection(){
		this.props.history.push('collection');
	}
	goToSuggestion(){
		this.props.history.push('suggestion');
	}
	goToInformation(){
		this.props.history.push('information');
	}
	render() {
		let { _wave, _classList, _loadOver } = this.props;
		return (
			<div className="person">
				<div className="my-picture-container">
					<img className="my-picture" src={require('./images/course-1.jpg')} alt=""/>
					<span className="my-name">大勋</span>
					<img className="arrow" src={require('./images/arrow.png')} alt=""/>
				</div>
				<div className="info-container">
					<div className="info" onClick={this.goToCollection}>
						<img className="info-icon" src={require('./images/collection.png')} alt=""/>
						<span className="info-name">收藏记录</span>
						<span className="num">8</span>
						<img className="arrow" src={require('./images/arrow.png')} alt=""/>
					</div>
					<div className="info" onClick={this.goToInformation}>
						<img className="info-icon" src={require('./images/personInfo.png')} alt=""/>
						<span className="info-name">个人信息</span>
						<img className="arrow" src={require('./images/arrow.png')} alt=""/>
					</div>
					<div className="info" onClick={this.goToSuggestion}>
						<img className="info-icon" src={require('./images/suggestion.png')} alt=""/>	
						<span className="info-name">意见反馈</span>
						<img className="arrow" src={require('./images/arrow.png')} alt=""/>
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
export default connect(mapStateToProps, mapDispatchToProps)(Person);