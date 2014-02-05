# DelegateJS

simple function delegation like jQuery.proxy()

```js


var delegate = require('./delegatejs');

var myClass = function() {

    this.str = 'I am doing';
    this.doSomething = function(what) {
        console.log(this.str + ' ' + what);
    };

};

var myObj = new myClass();

setTimeout(delegate(myObj, myObj.doSomething, 'delegation'), 100);



```
