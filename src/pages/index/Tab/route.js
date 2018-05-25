/*
 * @authors :Yang Jing
 * @date    :2018-05-16
 * @description：美龄美课
 */
import bridge from 'src/utils/bridge';


module.exports = {
	path: 'tab',
	component: require('./Index'),
	childRoutes: [
		{
			path: 'index',
			getComponent(location, cb) {
				require.ensure([], (require) => {
					cb(null, require('../Home/Index'));
				});
			},
			onEnter: () => bridge.doAction('setTitle', { title: '美龄美课',class:"fff" })
		},{
			path: 'course',
			getComponent(location, cb) {
				require.ensure([], (require) => {
					cb(null, require('../Course/Index'));
				});
			},
			onEnter: () => bridge.doAction('setTitle', { title: '美龄美课',class:"fff" })
		},{
			path: 'person',
			getComponent(location, cb) {
				require.ensure([], (require) => {
					cb(null, require('../Person/Index'));
				});
			},
			onEnter: () => bridge.doAction('setTitle', { title: '美龄美课',class:"fff" })
		},{
			path: 'classify',
			getComponent(location, cb) {
				require.ensure([], (require) => {
					cb(null, require('../Classify/Index'));
				});
			},
			onEnter: () => bridge.doAction('setTitle', { title: '美龄美课',class:"fff" })
		}
	]
}