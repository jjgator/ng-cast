angular.module('video-player')

.component('app', {
  templateUrl: 'src/templates/app.html'
})

.controller('appCtrl', function ($scope) {
  this.data = window.exampleVideoData;
});

