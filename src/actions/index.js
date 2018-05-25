
/*
 * @authors :Yang Jing
 * @date    :2018-05-16
 * @description：美龄美课 - 各模块勿重复相同的函数名；
 */

import homeIndex from "./demo/Home/index";
import homeStart from "./demo/Home/start";
import homeFriends from "./demo/Home/friends";
import homeList from "./demo/Home/list";
import introIndex from "./demo/Intro/index";
import handlerIndex from "./demo/Handler/index";

import homeIndex_1 from "./index/Home/index";
// import classifyIndex from "./index/Classify/index";
// import courseIndex from "./index/Course/index";
// import informationIndex from "./index/Information/index";
// import playIndex from "./index/Play/index";
// import collectionIndex from "./index/Collection/index";
// import personList from "./index/Person/index";
// import suggestionIndex from "./index/Suggestion/index";

let actions = Object.assign({},
	homeIndex,
	homeIndex_1,
	homeStart,
	homeFriends,
	homeList,
	introIndex,
	handlerIndex
);
export default actions;
