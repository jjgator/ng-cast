angular.module('video-player')

.component('app', {
  templateUrl: 'src/templates/app.html',
  controller: function(youTube) {
    this.videos = window.exampleVideoData;
    this.currentVideo = window.exampleVideoData[0];
    this.onClick = function(index) {
      this.selectVideo(index);
    }.bind(this);
    this.selectVideo = function(index) {
      this.currentVideo = this.videos[index];
    };
    this.searchResults = function() {
      console.log('can you see me');
    };
    this.callback = function(response) {
      this.videos = response;
      this.currentVideo = response[0];
    }.bind(this);
    youTube.search('puppies', 5, this.callback);
  }
});
