import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');

const player = new Player(iframe);

const storageKey = 'videoplayer-current-time';

const currentTimeFromStorage = localStorage.getItem(storageKey);

if (currentTimeFromStorage) {
  player.setCurrentTime(parseFloat(currentTimeFromStorage));
}

const saveCurrentTime = throttle(() => {
  player.getCurrentTime().then(currentTime => {
    localStorage.setItem(storageKey, currentTime.toString());
  });
}, 1000);

player.on('timeupdate', saveCurrentTime);
