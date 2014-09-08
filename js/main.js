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
					parent   : null,
					modal    : null,
					messages : null,
					banner   : null,
					forms    : null
				},
				init : function (el) {
					var that = this;
					this.elements.parent   = el;
					this.elements.modal    = el.find('#modal');
					this.elements.messages = el.find('#messages');
					this.elements.banner   = el.find('#banner');
					this.elements.forms    = el.find('form');
					if (this.elements.messages.length) {
						var timer = setTimeout(function () {
							that.elements.messages.addClass('js-hidden');
						}, 2000);
					}
					this.bindEvents();
				},
				bindEvents : function () {
					var that = this;
					if (this.elements.banner.length) {
						this.elements.banner.on('click','.header-menu',function(event) {
							event.preventDefault();
							that.elements.banner.find('.nav-main').toggle();
							//that.elements.modal.toggle();
						});
					}
					if (this.elements.modal.length) {
						this.elements.parent
							.on('click','a.modal', function (event) {
								event.stopPropagation();
								event.preventDefault();
								var links = $(this).attr('href').split('#');
								if (!links[1]) {
									links[1] = links[0];
									links[0] = null;
								}
								var openEl = that.elements.modal.find('#' + links[1]);
								if (!openEl.length && links[0]) {
									$.get(links[0]+'?ajax',function(data,status){
										that.elements.modal.find('aside').append(data.replace(/<section/,'<section id="'+links[1]+'"'));
										that.openModal(that.elements.modal.find('#' + links[1]));
									})
								}
								else if (openEl.length) {
									that.openModal(openEl);
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
					if (this.elements.forms.length) {
						this.elements.forms.on('change keyup input','.js-input-linked',function(event) {
							var linked = that.elements.forms.find($(this).data('input-linked'));
							if (linked.length) {
								linked.val($(this).val());
							}
						});
					}
				},
				openModal : function (openEl) {
					if (openEl.length) {
						this.elements.modal.find('section').hide();
						this.elements.modal.css({
							width: $( document ).width(),
							height: $( document ).height()
						}).show();
						openEl.css({
							left: (($( document ).width() - openEl.width()) / 2)
						}).show().find(':input:first').focus();
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