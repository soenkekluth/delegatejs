# DelegateJS

performant object scope function [event] delegation like function.bind or jquery.proxy

```
npm install delegatejs
```


```js

var delegate = require('delegatejs');

class Test {
    
  constructor() {
    window.addEventListener('resize', delegate(this, this.onResize), false);
  }
  
  onResize(e) {
    console.log(this, e);
  }

}

```
