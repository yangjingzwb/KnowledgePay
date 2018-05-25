/*
 * @authors :Yang Jing
 * @date    :2018-05-16
 * @description：React+Redux 从入门到崩溃、放弃至删代码跑路 示例 - 首页 模块
 */

import { fetchJson } from 'src/utils/fetch';
import StaticToast from 'src/components/common/Toast';
import {GET_LIST} from "src/constants/demo/Home/list";



let list =  {

	get_list:(data)=>{

		return (dispatch)=>{
			fetchJson({
				url:"/KnowledgePay/json/list.json",
				type:"GET",
				success:(res)=>{
					console.log(res);
					dispatch({
						type:GET_LIST,
						data:res
					});
				}
			});
			
		};
		
		
	}
};


export default list;



