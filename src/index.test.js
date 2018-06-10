import { startLockAutoDetect, stopLock, startLock, stopZoomLock, startZoomLock, stopScrollLock, setConfigs } from './';

test('no error startLockAutoDetect', () => {
  startLockAutoDetect();
});

test('no error stopLock', () => {
  stopLock();
});

test('no error startLock', () => {
  startLock();
});

test('no error stopZoomLock', () => {
  stopZoomLock();
});

test('no error startZoomLock', () => {
  startZoomLock();
});

test('no error stopScrollLock', () => {
  stopScrollLock();
});

test('no error setConfigs', () => {
  setConfigs();
});