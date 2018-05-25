
/*
 * @authors :Yang Jing
 * @date    :2018-05-16
 * @description：美龄美课 - 基础介绍 模块
 */


import {INTRO_INIT,TOGGLE} from "src/constants/demo/Intro";
import dataSource from "src/pages/demo/Intro/Index/dataSource";

let Intro =  {
	introInit:()=>{

		return {
			type:INTRO_INIT,
			data:dataSource
		};
	},
	toggle:(id)=>{
		return {
			type:TOGGLE,
			id
		}
	}
};
export default Intro;



