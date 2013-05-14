var Application = {
	elements : {
		container : null
	},
	values : {

	},
	init : function () {
		this.elements.container = $('#container');
		console.log("Application started");
	}
}

$(document).ready(function() {
	Application.init();
}