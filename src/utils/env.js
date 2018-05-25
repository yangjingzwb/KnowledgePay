import api from './api.js'

let _env; //环境参数 local：本地   dev：综测   pre：准生产   pro：生产

//获取url携带的参数
function geURLParam(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let r = window.location.search.substr(1).replace(/\$/g, "=").replace(/@/g, "&").match(reg); //获取get参数字窜，与正在匹配
    if (r !== null) {
        return decodeURI(r[2]);
    } else {
        return null; //传递中文参数时候，需要使用encodeURI()进行编码
    }
}

//根据当前url判断环境
let url = window.location.href;
if (geURLParam('mode') && typeof(geURLParam('mode')) == 'string') {
    _env = geURLParam('mode');
} else if (url.indexOf('192.168.157.68') > 0) {
    _env = 'local';
} else {
    _env = 'local';
}


const baseUrl = {
    local:'http://192.168.157.68:7300/project/59cd9c4f55deb8dfcb498e17/',
    dev:'',
    pre:'',
    pro:''
}

export default function(name){
    return baseUrl[_env] + api[name];
}