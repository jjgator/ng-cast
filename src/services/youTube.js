angular.module('video-player')

.service('youTube', function($http){

	this.search = function(query, max, callback) {

		return $http.get('https://www.googleapis.com/youtube/v3/search', {params: {
			q: query,
			maxResults: max,
			key: window.YOUTUBE_API_KEY,
			type: 'video',
			part: 'snippet'
		}})
		.then(callback);

	};

	// $http({
	//   method: 'GET',
	//   url: 'https://www.googleapis.com/youtube/v3/search'
	// }).then(function successCallback(response) {
	//     console.log("You have succeeded. You win at life. ", response);
	//   }, function errorCallback(response) {
	//     console.log("Someone should feel bad about this. ", response)
	//  	});
})
