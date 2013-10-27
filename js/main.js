(function ($) {
	$.fn.examplePlugin = function (options) {
		var main = {
			options : $.extend(
				{
				},
				options
			),
			elements : {
				parent : null
			},
			values : {

			},
			init : function (el) {
				this.elements.parent = el;
				// Your stuff here
				this.bindEvents();
				this.update();
			},
			bindEvents : function () {
				var that = this;
				// Your stuff here
				this.elements.parent.on('click', function (event) {
					event.preventDefault();
					event.stopPropagation();
					that.update(); // $(this)
				})
			},
			update : function () {
				// Your stuff here
				console.log('TheMachine wins');
			}
		}

		return this.each(function() {
			main.init($(this));
		});
	}
})(jQuery);

/*
// Add installation dialog for Firefox OS

if (typeof navigator.mozApps != 'undefined'){
	var request = navigator.mozApps.checkInstalled("http://flashy-domain/flashy-path/manifests/manifest.webapp");
	request.onsuccess = function() {
		if (request.result) {
			// we're installed
		} else {
			var request = navigator.mozApps.install("http://flashy-domain/flashy-path/manifests/manifest.webapp");
			request.onsuccess = function() {
				// great - display a message, or redirect to a launch page
			};
			request.onerror = function() {
				// whoops - this.error.name has details
			};
		}
	};
	request.onerror = function() {
		alert('Error checking installation status: ' + this.error.message);
	};
}
*/

/*
// Reload the appcache

if (typeof window.applicationCache != 'undefined'){
	function updateCache() {
			window.applicationCache.addEventListener('updateready', function() {
				if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
					window.applicationCache.swapCache();
				}
			});
			window.applicationCache.update();
		}
	}
}


*/

$(document).ready(function() {
	$('#container').examplePlugin({});
});