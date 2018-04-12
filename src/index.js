import UAParser from 'ua-parser-js';
import loglevel from 'loglevel';

const log = loglevel.getLogger('preventZoomAndScroll');

const parser = new UAParser();

if (process.env.NODE_ENV === 'development') {
  log.setLevel('debug');
} else {
  log.setLevel('silent');
}

const configs = {
  addEventListenerOptions: { capture: false, passive: false },
  doubleTapInterval: 500,
  targetRootDom: document.documentElement
};

/**
 * @param event
 */
const preventDefaultTouchMove = event => {
  log.debug('prevent touch move');
  event.preventDefault();
};

/**
 * @param event
 */
const preventDefaultMultiTouch = event => {
  if (event.touches.length > 1) {
    log.debug('prevent multi touch', event.touches.length);
    event.preventDefault();
  }
};

let lastTouchEnd = 0;

/**
 * Prevent default double tap
 *
 * @param event
 */
const preventDefaultDoubleTap = event => {
  const now = new Date().getTime();
  if (now - lastTouchEnd <= configs.doubleTapInterval) {
    log.debug('prevent touch end');
    event.preventDefault();
  }
  lastTouchEnd = now;
};

/**
 * 設定を上書きします。
 *
 * @param userConfigs
 */
export const setConfigs = (userConfigs = {}) => {
  Object.assign(configs, userConfigs);
};

/**
 * ブラウザ標準のスクロール動作を止めます。
 */
export const startScrollLock = () => {
  configs.targetRootDom.addEventListener(
    'touchmove',
    preventDefaultTouchMove,
    configs.addEventListenerOptions
  );
};

/**
 * ブラウザ標準のスクロール動作に戻します。
 */
export const stopScrollLock = () => {
  configs.targetRootDom.removeEventListener(
    'touchmove',
    preventDefaultTouchMove,
    configs.addEventListenerOptions
  );
};

/**
 * ブラウザ標準の拡大動作を止めます。
 */
export const startZoomLock = () => {
  configs.targetRootDom.addEventListener(
    'touchstart',
    preventDefaultMultiTouch,
    false
  );

  configs.targetRootDom.addEventListener(
    'touchend',
    event => {
      preventDefaultDoubleTap(event);
    },
    configs.addEventListenerOptions
  );
};

/**
 * ブラウザ標準の拡大動作に戻します。
 */
export const stopZoomLock = () => {
  configs.targetRootDom.removeEventListener(
    'touchstart',
    preventDefaultMultiTouch,
    configs.addEventListenerOptions
  );

  configs.targetRootDom.removeEventListener(
    'touchend',
    preventDefaultDoubleTap,
    configs.addEventListenerOptions
  );
};

/**
 * ズームと拡大のブラウザ標準の動作を発生しないようにします。
 */
export const startLock = () => {
  startScrollLock();
  startZoomLock();
};

/**
 * ズームとスクロールの挙動を標準に戻します。
 */
export const stopLock = () => {
  stopScrollLock();
  stopZoomLock();
};

/**
 * IOS かどうかを自動判定しiOSの時のみズームと拡大のブラウザ標準の動作を発生しないようにします。
 */
export const startLockAutoDetect = () => {
  if ('iOS' === parser.getOS().name) {
    startLock();
  }
};
