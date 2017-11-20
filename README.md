# DelegateJS

[![Greenkeeper badge](https://badges.greenkeeper.io/soenkekluth/delegatejs.svg)](https://greenkeeper.io/)

performant object scope function [event] delegation like function.bind or jquery.proxy

## Install

```
npm install delegatejs
```

## Usage

```js

const delegate = require('delegatejs');

class Test {
    
  constructor() {
    window.addEventListener('resize', delegate(this, this.onResize), false);
  }
  
  onResize(e) {
    console.log(this, e);
  }
}

```


if you also need to remove your listener (what you always should do in statefull apps) you can du so:

```js

const delegate = require('delegatejs');

class Test {
    
  constructor() {
    this.onResize = delegate(this, this.onResize);
    window.addEventListener('resize', this.onResize , false);
  }
  
  onResize(e) {
    console.log(this, e);
  }

  removeResizeListener(){
    window.removeEventListener('resize', this.onResize);
  }
}

```
