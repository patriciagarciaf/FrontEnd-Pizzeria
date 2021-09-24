import {Decorat}

function decorateClass(target:Function){
    const methods=Object.getOwnPropertyNames(target.prototype).filter(prop=> prop !="constructor");
    for (let method of methods){
        const fn=target.prototype[method];
        target.prototype[method]=function(...args:[]){
            const autorizationObserver=
        }
    }
}