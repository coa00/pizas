# pizas (prevent ios zoom and scroll)

## インストール方法

### global

ダウンロードして読み込むこと。


```
<script src="./lib/pizas.js"></script>
```


### node

```$xslt
npm install git+ssh://git@devxserve:29418/aoki.kohei/pizas.git --save
```



## 使い方

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

### import する場合

```$xslt

import { startLockAutoDetect, stopLock } from './lib/pizas';

// 開始
startLockAutoDetect();

// 停止

stopLock();

```

（未検証）

