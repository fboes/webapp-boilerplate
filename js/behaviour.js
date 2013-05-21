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

$(document).ready(function() {
	$('#container').examplePlugin({});
});