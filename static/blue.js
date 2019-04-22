$(document).ready(function(){
	$("#glass").click(function(e) {
		$("#glassinfo").toggle();
		e.preventDefault();
	})

	$("#metal").click(function(e) {
		$("#metalinfo").toggle();
		e.preventDefault();
	})

	$("#aluminum").click(function(e) {
		$("#aluminuminfo").toggle();
		e.preventDefault();
	})

	$("#household-metal").click(function(e) {
		$("#household-metalinfo").toggle();
		e.preventDefault();
	})

	$("#plastic").click(function(e) {
		$("#plasticinfo").toggle();
		e.preventDefault();
	})

	$("#beverage").click(function(e) {
		$("#beverageinfo").toggle();
		e.preventDefault();
	})
})
