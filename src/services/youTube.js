angular.module('video-player')

.service('youTube', function($http){

	this.search = function(query, max, callback) {
		$http.get('https://www.googleapis.com/youtube/v3/search', {
			params: {
				q: query,
				maxResults: max,
				key: window.YOUTUBE_API_KEY,
				type: 'video',
				part: 'snippet'
			}
		})
		.then(function(data) {
			callback(data.data.items);
		});
	};
})
