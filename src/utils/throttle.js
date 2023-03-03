// 对原函数进行节流处理返回一个处理过的函数(闭包)
export default function (fn,delay = 500) {
    let flag = true;
    return function(...args) {
        if (flag) {
            flag = false;
            fn.apply(this,args);
            setTimeout(() => {
                flag = true;
            }, delay);
        }
    }
}