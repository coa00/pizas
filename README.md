# pizas (prevent ios zoom and scroll)

## install

### global

```
<script src="./lib/pizas.js"></script>
```


### es6, babel, webpack

```$xslt
npm install pizas --save
```



## usage

### global

```$xslt
<div class="container">

    <h1>pizas </h1>

    <p>prevent defalut zoom and scroll of safari for full screen web app."</p>


    <button type="button" class="btn btn-primary btn-lg" onclick="window.pizas.startLockAutoDetect()"> all lock (auto detect iOS) </button>
    <button type="button" class="btn  btn-dark btn-lg" onclick="window.pizas.startLock()"> all lock </button>
    <button type="button" class="btn  btn-dark btn-lg" onclick="window.pizas.startZoomLock()"> lock zoom. </button>
    <button type="button" class="btn  btn-dark　btn-lg" onclick="window.pizas.startScrollLock()"> lock scroll. </button>
    <button type="button" class="btn btn-secondary　btn-lg" onclick="window.pizas.stopLock()"> all lock stop</button>

</div>



<script src="./build/pizas.js"></script>

```

### es6, babel, webpack

```$xslt

import { startLockAutoDetect, stopLock } from 'pizas';

// start
startLockAutoDetect();

// end
stopLock();

```

## API


#### startLockAutoDetect

prevent zoom and scroll only mobile safari.


#### stopLock
stop prevent.
 
#### setConfigs
override configs.


##### Configs

```$xslt
{
  capture: false,
  doubleTapInterval: 500, // msec
  targetRootDom: document.documentElement
};
```

