angular.module('video-player')
.component('videoList', {
  bindings: {
    data: '<'
  },
  templateUrl: 'src/templates/videoList.html'
});
