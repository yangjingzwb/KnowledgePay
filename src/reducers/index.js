
import {combineReducers} from "redux"; //combinReducers用于合并各模块的reducers;
import homeIndex from "./demo/Home";
import homeStart from "./demo/Home/start";
import homeFriends from "./demo/Home/friends";
import homeList from "./demo/Home/list";
import introIndex from "./demo/Intro";
import handlerIndex from "./demo/Handler";


import homeIndex_1 from "./index/Home/index";
// import classifyIndex from "./index/Classify/index";
// import courseIndex from "./index/Course/index";
// import informationIndex from "./index/Information/index";
// import playIndex from "./index/Play/index";
// import collectionIndex from "./index/Collection/index";
// import personList from "./index/Person/index";
// import suggestionIndex from "./index/Suggestion/index";



export default combineReducers({
	homeIndex,
	homeIndex_1,
	homeStart,
	homeFriends,
	homeList,
	introIndex,
	handlerIndex
});
