
//https://upload-images.jianshu.io/upload_images/1923109-e57996f427c2ece3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/700
import {FRIENDS_LOCATION,FRIENDS_SREACH} from "src/constants/demo/Home/friends";

let initStates = {
	userPosition:{},
	result:[],
};
function friends(state = initStates,action){
	switch(action.type){

		case FRIENDS_LOCATION:
			console.log("HOME_INIT = 12",action.data);
			return Object.assign({},state,{
				userPosition:action.data
			});

		case FRIENDS_SREACH:
			console.log("HOME_INIT = 19",action.data);
			return Object.assign({},state,{
				result:action.data
			});

		
		default:
			return state;
	};
};


export default friends;


