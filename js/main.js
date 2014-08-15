(function ($) {
	$.fn.webapp = function (options) {
		return this.each(function() {
			var main = {
				options : $.extend(
					{
					},
					options
				),
				elements : {
					parent : null,
					modal  : null,
				},
				init : function (el) {
					this.elements.parent = el;
					this.elements.modal  = el.find('#modal');
					this.bindEvents();
				},
				bindEvents : function () {
					var that = this;
					if (this.elements.modal.length) {
						this.elements.parent
							.on('click','a.modal', function (event) {
								event.stopPropagation();
								event.preventDefault();
								var openEl = that.elements.modal.find($(this).attr('href'));
								if (openEl.length) {
									that.elements.modal.find('section').hide();
									that.elements.modal.css({
										width: $( document ).width(),
										height: $( document ).height()
									}).show();
									openEl.css({
										left: (($( document ).width() - openEl.width()) / 2)
									}).show();
								}
							})
							.on('click','#modal section', function (event) {
								event.stopPropagation();
							})
							.on('click','#modal', function (event) {
								that.elements.modal.hide();
								that.elements.modal.find('section').hide();
							})
						;
					}
				}
			}

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
	$('body').webapp({});
});