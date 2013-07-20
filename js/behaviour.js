(function ($) {
	$.fn.activateTheMachine = function (options) {
		var TheMachine = {
			options : $.extend(
				{
				},
				options
			),
			values : {
					engineWeight : null,
					engineThrust : null,
					rcsWeight : null,
					rcsThrust : null,
					fuelWeight : null,
					fuelWeightAdditional : null,
					fuelCapacity : null,
					cargoCapacity : null,
					cargoCapacityAdditional : null,
					equipmentWeight : null,
					structuralWeight : null,
					structuralTolerance : null,
					totalEmpty : null,
					totalFuel : null,
					totalFuelCargo : null
			},
			elements : {
				parent : null,
				mainForm : null
			},

			init : function (el) {
				var that = this;
				this.elements.parent = el;
				this.elements.mainForm = el.find('#mainForm');
				this.compute(this);

				this.elements.mainForm
					.on('change','input', function() {
						that.compute(that);
					})
					.on('keyup','input', function() {
						that.compute(that);
					})
				;
			},
			compute : function (that) {
				that.getValues();

				console.log('Computing...');

				that.values.engineThrust = that.values.engineWeight * 1000;
				that.values.rcsThrust = that.values.rcsWeight * 1000;
				that.values.fuelCapacity = that.values.fuelWeight * 1000;
				that.values.fuelWeightAdditional = that.values.fuelWeight / 10;
				that.values.cargoCapacityAdditional = that.values.cargoCapacity / 10;
				that.values.totalEmpty = that.values.engineWeight
					+ that.values.rcsWeight
					+ that.values.fuelWeightAdditional
					+ that.values.cargoCapacityAdditional
					+ that.values.equipmentWeight
					+ that.values.structuralWeight
				;				
				that.values.totalFuel = that.values.totalEmpty + that.values.fuelWeight;				
				that.values.totalFuelCargo = that.values.totalFuel + that.values.cargoCapacity;				

				that.setValues();
			},
			getValues : function () {
					var that = this;
					this.elements.mainForm.find('input').each(function(index) {
						that.values[$(this).attr('id')] = Number($(this).val());
					});
			},
			setValues : function () {
				$.each(this.values, function(index, value) {
					$('#output-'+index).html(value);
				});
			}
		}

		return this.each(function() {
			TheMachine.init($(this));
		});
	}
})(jQuery);

$(document).ready(function() {
	$('#container').activateTheMachine({});
});