angular.module('video-player')

.component('app', {
  templateUrl: 'src/templates/app.html',
  controller: function(youTube) {
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];
    this.onClick = function(index) {
      this.selectVideo(index);
    }.bind(this);
    this.selectVideo = function(index) {
      this.currentVideo = this.videos[index];
    };
    this.searchResults = function() {
      // this.search('angular', 5, function() {

      // });
    };
    youTube.search('angular', 5, function(response) {
      console.log(response);
    });
  }
});
