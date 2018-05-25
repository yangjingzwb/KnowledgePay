
// import {HOME_INIT,WAVE_DATA} from "src/constants/demo/Home";
import {TOP, MIDDLE, CATALOG, DAILY_LIST} from "src/constants/index/Home"

// export const TOP = "TOP";
// export const MIDDLE = "MIDDLE";
// export const CATALOG = "CATALOG";
// export const DAILY_LIST = "DAILY_LIST";

let initStates = {
	top:[],
	catalog:[],
	middle:[],
	dailyList:[]
};
function home(state = initStates,action){
	switch(action.type){

		case TOP:
			console.log("TOP = 12",action.data);
			return Object.assign({},state,{
				top:action.data
			});

		case MIDDLE:
			console.log("MIDDLE=16",action.data);
			return Object.assign({},state,{
				middle:action.data
			});

		case CATALOG:
			console.log("CATALOG=16",action.data);
			return Object.assign({},state,{
				catalog:action.data
			});
		case DAILY_LIST:
			console.log("DAILY_LIST=16",action.data);
			return Object.assign({},state,{
				dailyList:action.data
			});
		default:
			return state;
	};
};


export default home;


