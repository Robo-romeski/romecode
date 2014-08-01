var quoteDirective = angular.module('quoteDirective', []);

quoteDirective.directive('quoteDirective', [ 'famous', '$timeout', function (famous, $timeout) {
	return {
		priority: 0,
		restrict: 'AE',
	
		link: function (scope, elem, attrs, famous) {
			scope.currentIndex=0;

		scope.next=function(){
			scope.currentIndex<scope.quotes.length-1?scope.currentIndex++:scope.currentIndex=0;
		};
		
		scope.prev=function(){
			scope.currentIndex>0?scope.currentIndex--:scope.currentIndex=scope.quotes.length-1;
		};
		
		scope.$watch('currentIndex',function(){
			if(scope.quotes){
			scope.quotes.forEach(function(quotes){
				quotes.visible=false;
			});
			scope.quotes[scope.currentIndex].visible=true;
		}	
		});
		
		/* Start: For Automatic slideshow*/
		
		var timer;
		
		var sliderFunc = function(){
			timer=$timeout(function(){
				scope.next();
				timer=$timeout(sliderFunc,500);
			},500);
		};
		
		sliderFunc();
		
		scope.$on('$destroy',function(){
			$timeout.cancel(timer);
		});
		
		/* End : For Automatic slideshow*/
		
    },
		templateUrl: 'quote-div.html'
	}
}]);
