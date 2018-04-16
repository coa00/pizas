# pizas (prevent ios zoom and scroll)

## install

### global



```
<script src="./lib/pizas.js"></script>
```


### es6, babel, webpack

```$xslt
npm install git+ssh://git@devxserve:29418/aoki.kohei/pizas.git --save
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

IOS かどうかを自動判定しiOSの時のみズームと拡大のブラウザ標準の動作を発生しないようにします。


#### stopLock
ズームとスクロールの挙動を標準に戻します。
 
#### setConfigs
設定を上書きします。


##### Configs

```$xslt
{
  capture: false,// キャプチャリングに変更したい場合はtrue 
  doubleTapInterval: 500, // ダブルタップの間隔(msec)
  targetRootDom: document.documentElement // ルートのdom設定
};
```

