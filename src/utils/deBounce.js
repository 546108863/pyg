// 对原函数进行防抖处理返回一个处理过的函数(闭包)
export default function (fn,delay = 500) {
    let timeout = null;
    return function (...args) {
        if (timeout) {
            clearTimeout(timeout);
            timeout = null;
        }
        timeout = setTimeout(() => {
            fn.apply(this,args);
        }, delay);
    }
}