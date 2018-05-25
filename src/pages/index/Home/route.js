/*
 * @authors :Yang Jing
 * @date    :2018-05-16
 * @description：美龄美课
 */
import bridge from 'src/utils/bridge';


module.exports = {
	path: 'index',
	childRoutes: [
		require('../Classify/route')
	],
	indexRoute: {
		getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('./Index'));
			});
		},
		onEnter: () => bridge.doAction('setTitle', { title: '美龄美课',class:"fff"})
		// onEnter: () => bridge.doAction('setWechat')
	}
}