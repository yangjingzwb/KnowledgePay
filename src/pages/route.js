/**
 * 入口文件
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import useBasename from 'history/lib/useBasename';
import { hashHistory, browserHistory, Router } from 'react-router';
// redux store
import Store from "src/store";
import bridge from 'src/utils/bridge'

const rootRoute = {
  path: '/',
  component: require('../components/app/App'),
  childRoutes: [
    require('./demo/Home/route'),
    require('./demo/Intro/route'),
    require('./demo/Handler/route'),
    require('./demo/Setting/route'),
    require('./index/Tab/route'),
    require('./index/Play/route'),
    require('./index/Collection/route'),
    require('./index/Suggestion/route'),
    require('./index/Information/route'),
    {
      path: '*',
      getComponent(location, cb) {
        require.ensure([], (require) => {
          cb(null, require('./demo/NotFoundPage'));
        });
      },
      onEnter: () => bridge.doAction('setTitle', { title: '出错啦' })
      // onEnter: () => bridge.doAction('setWechat')
    }
  ],
  indexRoute:{ onEnter: (nextState, replace) => replace('/tab/index') }, //默认重定向到->首页
};
function Basename(history, dirname) {
  return useBasename(() => history)({ basename: `${dirname}` });
};
    // <Router routes={rootRoute} history={hashHistory} />
ReactDOM.render(
  <Provider store={Store}>
    <Router routes={rootRoute} history={Basename(hashHistory,'/')} />
  </Provider>,
  document.getElementById('app')
);

