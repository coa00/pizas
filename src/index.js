import UAParser from 'ua-parser-js';
import loglevel from 'loglevel';

const log = loglevel.getLogger('preventZoomAndScroll');
const parser = new UAParser();

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
    log.debug('prevent touch start');
    event.preventDefault();
  }
};

let lastTouchEnd = 0;

/**
 * @param event
 * @param interval
 */
const preventDefaultDoubleTap = (event, interval = 500) => {
  const now = new Date().getTime();
  if (now - lastTouchEnd <= interval) {
    log.debug('prevent touch end');
    event.preventDefault();
  }
  lastTouchEnd = now;
};

export const startScrollLock = () => {
  document.body.addEventListener('touchmove', preventDefaultTouchMove, false);
};

export const stopScrollLock = () => {
  document.body.removeEventListener(
    'touchmove',
    preventDefaultTouchMove,
    false
  );
};

export const startZoomLock = (doubleTapInterval = 500) => {
  document.documentElement.addEventListener(
    'touchstart',
    preventDefaultMultiTouch,
    false
  );

  document.documentElement.addEventListener(
    'touchend',
    event => {
      preventDefaultDoubleTap(event, doubleTapInterval);
    },
    false
  );
};

export const stopZoomLock = () => {
  document.documentElement.removeEventListener(
    'touchstart',
    preventDefaultMultiTouch,
    false
  );

  document.documentElement.removeEventListener(
    'touchend',
    preventDefaultDoubleTap,
    false
  );
};

export const startLock = (doubleTapInterval = 500) => {
  startScrollLock();
  startZoomLock(doubleTapInterval);
};

export const stopLock = () => {
  stopScrollLock();
  stopZoomLock();
};

export const startLockAutoDetect = (doubleTapInterval = 500) => {
  if ('iOS' === parser.getOS().name) {
    startLock(doubleTapInterval);
  }
};
