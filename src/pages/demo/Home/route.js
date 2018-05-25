/*
 * @authors :Yang Jing
 * @date    :2018-05-16
 * @description：美龄美课
 */
import bridge from 'src/utils/bridge';


module.exports = {
	path: 'home',
	childRoutes: [
		{
			path: 'list',
			getComponent(location, cb) {
				require.ensure([], (require) => {
					cb(null, require('./List'));
				});
			},
			onEnter: () => bridge.doAction('setTitle', { title: '列表展示',class:"f2f2f2" })
		},{
			path: 'friends',
			getComponent(location, cb) {
				require.ensure([], (require) => {
					cb(null, require('./Friends'));
				});
			},
			onEnter: () => bridge.doAction('setTitle', { title: '附近好友' })
		}
	],
	indexRoute: {
		getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('./Index'));
			});
		},
		onEnter: () => bridge.doAction('setTitle', { title: 'redux-首页',class:"fff"})
		// onEnter: () => bridge.doAction('setWechat')
	}
}