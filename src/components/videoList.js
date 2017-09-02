angular.module('video-player')
.component('videoList', {
  bindings: {
    onClick: '<',
    videos: '<'
  },
  templateUrl: 'src/templates/videoList.html'
});
    