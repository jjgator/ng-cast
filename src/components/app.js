angular.module('video-player')

.component('app', {
  templateUrl: 'src/templates/app.html',
  controller: function() {
    this.videos = window.exampleVideoData;
    this.currentVideo = window.exampleVideoData[0];
    this.onClick = function(index) {
      this.selectVideo(index);
    }.bind(this);
    this.selectVideo = function(index) {
      this.currentVideo = this.videos[index];
    };
    this.searchResults = function() {

    };
  }
});
