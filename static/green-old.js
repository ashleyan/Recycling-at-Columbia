$(document).ready(function(){
	$("#paper").click(function(e) {
		$("#paperinfo").toggle();
		e.preventDefault();
	})

	$("#mail").click(function(e) {
		$("#mailinfo").toggle();
		e.preventDefault();
	})

	$("#wrapping").click(function(e) {
		$("#wrappinginfo").toggle();
		e.preventDefault();
	})

	$("#smooth-cardboard").click(function(e) {
		$("#smooth-cardboardinfo").toggle();
		e.preventDefault();
	})

	$("#corrugated-cardboard").click(function(e) {
		$("#corrugated-cardboardinfo").toggle();
		e.preventDefault();
	})

	$("#bags").click(function(e) {
		$("#bagsinfo").toggle();
		e.preventDefault();
	})

	$("#cardboard").click(function(e) {
		$("#cardboardinfo").toggle();
		e.preventDefault();
	})

	$("#newspapers").click(function(e) {
		$("#newspapersinfo").toggle();
		e.preventDefault();
	})

	$("#books").click(function(e) {
		$("#booksinfo").toggle();
		e.preventDefault();
	})
})