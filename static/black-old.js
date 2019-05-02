$(document).ready(function(){
	$("#hardcover").click(function(e) {
		$("#hardcoverinfo").toggle();
		e.preventDefault();
	})

	$("#used").click(function(e) {
		$("#usedinfo").toggle();
		e.preventDefault();
	})

	$("#soiled").click(function(e) {
		$("#soiledinfo").toggle();
		e.preventDefault();
	})

	$("#heavily-soiled").click(function(e) {
		$("#heavily-soiledinfo").toggle();
		e.preventDefault();
	})

	$("#coated").click(function(e) {
		$("#coatedinfo").toggle();
		e.preventDefault();
	})

	$("#glass").click(function(e) {
		$("#glassinfo").toggle();
		e.preventDefault();
	})

	$("#plastic").click(function(e) {
		$("#plasticinfo").toggle();
		e.preventDefault();
	})

	$("#styrofoam").click(function(e) {
		$("#styrofoaminfo").toggle();
		e.preventDefault();
	})
})