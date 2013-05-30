(function ($) {
	$.fn.examplePlugin = function (options) {
		var behaviour = {
			options: $.extend(
				{
				},
				options
			),
			init : function (el) {
				// Your stuff here
				console.log("Ready and waiting…");
			}
		}

		return this.each(function() {
			behaviour.init($(this));
		});
	}
})(jQuery);

/*
if (typeof navigator.mozApps != 'undefined'){
	var request = navigator.mozApps.checkInstalled("http://path.to/my/manifests/manifest.webapp");
	request.onsuccess = function() {
		if (request.result) {
			// we're installed
		}
		else {
			var request = navigator.mozApps.install("http://path.to/my/manifests/manifest.webapp");
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

$(document).ready(function() {
	$('#container').examplePlugin({});
});