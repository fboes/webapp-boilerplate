var Application = {
	elements : {
		container : null
	},
	values : {

	},
	init : function () {
		this.elements.container = $('#container');
		console.log("Ready and waiting…");
	}
}

$(document).ready(function() {
	Application.init();
});