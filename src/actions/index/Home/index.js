/*
 * @authors :Yang Jing
 * @date    :2018-05-16
 * @description：React+Redux 从入门到崩溃、放弃至删代码跑路 示例 - 首页 模块
 */

import { fetchJson } from 'src/utils/fetch';
import { browserHistory } from 'react-router';
import StaticToast from 'src/components/common/Toast';
// import {HOME_INIT,WAVE_DATA} from "src/constants/demo/Home";
import { TOP, MIDDLE, CATALOG, DAILY_LIST } from "src/constants/index/Home/index"

let home = {
    top: () => {
        //真实的异步加载数据，
        return (dispatch) => {
            fetchJson({
                type: "POST",
                url: "http://192.168.157.68:7300/mock/59cd9c4f55deb8dfcb498e17/mock/mBanner",
                data: {
                    position: 'TOP'
                },
                success: (res) => {
                    console.log(res)
                    if (res.code == 200) {
                        let { data } = res;
                        dispatch({
                            type: TOP,
                            data: data
                        });
                    } else {
                        StaticToast.error(res.error);
                    };
                }
            });
        };
    },
    middle: () => {
        //真实的异步加载数据，
        return (dispatch) => {
            fetchJson({
                type: "POST",
                url: "http://192.168.157.68:7300/mock/59cd9c4f55deb8dfcb498e17/mock/mBanner",
                data: {
                    position: 'MIDDLE'
                },
                success: (res) => {
                    console.log(res)
                    if (res.code == 200) {
                        let { data } = res;
                        dispatch({
                            type: MIDDLE,
                            data: data
                        });
                    } else {
                        StaticToast.error(res.error);
                    };
                }
            });
        };
    },
    catalog: () => {
        //真实的异步加载数据，
        return (dispatch) => {
            fetchJson({
                type: "POST",
                url: "http://192.168.157.68:7300/mock/59cd9c4f55deb8dfcb498e17/mock/mBanner",
                data: {
                    position: 'CATALOG'
                },
                success: (res) => {
                    console.log(res)
                    if (res.code == 200) {
                        let { data } = res;
                        dispatch({
                            type: CATALOG,
                            data: data
                        });
                    } else {
                        StaticToast.error(res.error);
                    };
                }
            });
        };
    },
    daily_list: () => {
        //真实的异步加载数据，
        return (dispatch) => {
            fetchJson({
                type: "POST",
                url: "http://192.168.157.68:7300/mock/59cd9c4f55deb8dfcb498e17/mock/mDaily",
                data: {
                    // position: 'TOP'
                },
                success: (res) => {
                    console.log(res)
                    if (res.code == 200) {
                        let { data } = res;
                        dispatch({
                            type: DAILY_LIST,
                            data: data
                        });
                    } else {
                        StaticToast.error(res.error);
                    };
                }
            });
        };
    },
    // wave: () => {
    //     //模拟异步加载
    //     return (dispatch) => {
    //         let data = [
    //             {
    //                 id: "001",
    //                 _class: "a a1",
    //                 url: "./images/b.png",
    //                 _alt: "wave1"
    //             },
    //             {
    //                 id: "002",
    //                 _class: "b a1",
    //                 url: "./images/b.png",
    //                 _alt: "wave2"
    //             },
    //             {
    //                 id: "003",
    //                 _class: "c a1",
    //                 url: "./images/a.png",
    //                 _alt: "wave3"
    //             },
    //             {
    //                 id: "004",
    //                 _class: "d a1",
    //                 url: "./images/a.png",
    //                 _alt: "wave4"
    //             },
    //         ];
    //         setTimeout(() => {

    //             dispatch({
    //                 type: WAVE_DATA,
    //                 data
    //             });

    //         }, 500);
    //     };
    // }
};
export default home;



