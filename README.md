# DelegateJS

simple function delegation like jQuery.proxy()

```
npm install delegatejs
```


```js


var delegate = require('delegatejs');

var MyClass = function() {

    this.str = 'I am doing';
    this.doSomething = function(what) {
        console.log(this.str + ' ' + what);
    };

};

var myObj = new MyClass();

setTimeout(delegate(myObj, myObj.doSomething, 'delegation'), 100);



```
